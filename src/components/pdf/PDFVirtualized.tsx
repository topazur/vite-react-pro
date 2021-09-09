import React, { useState, useEffect } from 'react'
import * as pdfJS from 'pdfjs-dist'
import { TextLayerBuilder } from 'pdfjs-dist/web/pdf_viewer'
// window.pdfjsWorker
import 'pdfjs-dist/build/pdf.worker.entry'
import { List as VList } from 'react-virtualized'

import 'pdfjs-dist/web/pdf_viewer.css'
import 'react-virtualized/styles.css'
import './pdf-vir.less'

pdfJS.GlobalWorkerOptions.workerSrc = window!.pdfjsWorker

const firstPageNumber = 1
const devicePixelRatio = window.devicePixelRatio

interface IProps {
  url: string
  textLayer?: boolean
}

export default function ({ url, textLayer = false }: IProps) {
  // 存储每一页的宽高
  const [numPages, setNumPages] = useState<{ width: number; height: number }[]>([])
  const [pdfDocument, setPdfDocument] = useState<any>(null)
  const [scale, setScale] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    fetchPdf()
  }, [url])

  const fetchPdf = async () => {
    const loadingTask = pdfJS.getDocument(url)
    const curPdf = await loadingTask.promise
    await setPdfDocument(curPdf)
    getPageInfo(curPdf)
  }

  const getPageInfo = async (pdfDocument: any) => {
    const page = await pdfDocument.getPage(firstPageNumber)
    const newScale = scale * devicePixelRatio
    setScale(newScale)
    const viewport = page.getViewport({ scale: newScale })
    const width = viewport.width
    const height = viewport.height
    const array = []
    for (let index = 0; index < pdfDocument.numPages; index++) {
      array.push({ width, height })
    }
    setNumPages(array)
  }

  // 虚拟列表
  const renderItem = (value: any) => {
    // 每一张的数据
    const { key, index, style } = value
    return (
      <div key={key} style={{ ...style, border: '1px solid #dddddd' }} data-index={index}>
        <canvas data-page-number={index + 1} style={{ width: style.width, height: style.height }} />
        <div
          data-page-number={index + 1}
          className="textLayer"
          style={{ width: style.width, height: style.height }}
        ></div>
      </div>
    )
  }

  const renderPdf = async (num: number, pdfDocument: any) => {
    const page = await pdfDocument.getPage(num + 1)
    const viewport = page.getViewport({ scale: scale * devicePixelRatio })

    // Prepare canvas using PDF page dimensions
    const canvas: HTMLCanvasElement | null = document.querySelector(
      `canvas[data-page-number='${num + 1}']`,
    )

    if (!canvas) return
    const context = canvas.getContext('2d')
    canvas.height = viewport.height
    canvas.width = viewport.width

    // Render PDF page into canvas context
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    }
    const renderTask = page.render(renderContext)

    // 根据 props.textLayer 来决定是否渲染文本图层
    if (!textLayer) return
    await renderTask.promise
      .then(() => {
        return page.getTextContent()
      })
      .then((textContent: any) => {
        renderText(textContent, num, page, viewport)
      })
  }

  const renderText = (
    textContent: any,
    num: any,
    documentPage: any,
    documentViewport: any,
    // eslint-disable-next-line
  ) => {
    const textLayerDiv = document.querySelector(`div[data-page-number='${num + 1}']`)

    if (textLayerDiv) {
      // 创建新的TextLayerBuilder实例
      const textLayer = new TextLayerBuilder({
        textLayerDiv,
        pageIndex: documentPage.pageNumber,
        documentViewport,
        // 发布订阅
        eventBus: { _on: () => {}, dispatch: () => {} },
      })

      textLayer.setTextContent(textContent)

      textLayer.render()
    }
  }

  return (
    <div>
      <div className="toolBus">
        <div className="pagination">
          <button
            className="toolbarButton pageUp"
            title="Previous Page"
            id="previous"
            disabled={currentPage === 1}
            onClick={() => {
              const previousPage = currentPage - 1
              setCurrentPage(previousPage)
            }}
          >
            Previous Page
          </button>
          <input
            type="number"
            id="pageNumber"
            className="toolbarField pageNumber"
            value={currentPage}
            readOnly
          />
          / {numPages.length}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="toolbarButton pageDown"
            title="Next Page"
            id="next"
            disabled={currentPage === numPages.length}
            onClick={() => {
              const nextPage = currentPage + 1
              setCurrentPage(nextPage)
            }}
          >
            Next Page
          </button>
        </div>
      </div>
      <div className="container">
        {pdfDocument && numPages.length ? (
          <VList
            style={{
              margin: 'auto',
            }}
            overscanRowCount={3}
            scrollToAlignment="start"
            rowCount={numPages.length}
            width={numPages[0].width}
            height={numPages[0].height}
            rowHeight={({ index }) => numPages[index].height}
            rowRenderer={renderItem}
            scrollToIndex={currentPage - 1}
            onRowsRendered={({ overscanStartIndex, overscanStopIndex, startIndex, stopIndex }) => {
              renderPdf(startIndex, pdfDocument)
              setCurrentPage(stopIndex + 1)
            }}
          />
        ) : null}
      </div>
    </div>
  )
}
