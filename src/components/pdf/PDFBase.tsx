import React, { useRef, useEffect, useState, useMemo } from 'react'
import * as pdfJS from 'pdfjs-dist'
import { TextLayerBuilder } from 'pdfjs-dist/web/pdf_viewer'
// window.pdfjsWorker
import 'pdfjs-dist/build/pdf.worker.entry'

import 'pdfjs-dist/web/pdf_viewer.css'
import './pdf.less'

pdfJS.GlobalWorkerOptions.workerSrc = window!.pdfjsWorker
const devicePixelRatio = window.devicePixelRatio

interface IProps {
  url: string
  textLayer?: boolean
}

/**
 * @title PDF 正常的PDF预览方式（单页显示）
 * @description 根据api实现功能有翻页，缩放
 */
export default function ({ url, textLayer = false }: IProps) {
  // canvas实例
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  // 保存PDF实例
  const [pdfInstance, setPdfInstance] = useState<any>(null)
  // 保存PDF页码
  const [numPages, setNumPages] = useState(0)
  // 当前页
  const [currentPage, setCurrentPage] = useState(1)
  // 设置缩放大小
  const [scale, setScale] = useState(1)

  const percentZoom = useMemo(() => `${Number(scale * 100).toFixed(0)}%`, [scale])

  /**
   * @title 渲染pdf的canvas层级
   */
  const renderPdf = async (pdfDocument: any, num: number) => {
    const page = await pdfDocument.getPage(num)

    const viewport = page.getViewport({ scale: scale * devicePixelRatio })
    // Prepare canvas using PDF page dimensions
    const canvas = canvasRef.current

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
        renderText(textContent, page, viewport, canvas)
      })
  }

  /**
   * @title 渲染pdf的可选中文本层级
   */
  const renderText = (
    textContent: any,
    documentPage: any,
    documentViewport: any,
    canvas: HTMLCanvasElement,
    // eslint-disable-next-line
  ) => {
    const textLayerDiv = document.createElement('div')

    textLayerDiv.setAttribute('class', 'textLayer')

    textLayerDiv.style.width = `${canvas?.width}px`
    textLayerDiv.style.height = `${canvas?.height}px`

    // 将文本图层div添加至每页pdf的div中
    const pageDom = canvas.parentNode
    pageDom!.appendChild(textLayerDiv)

    // 创建新的TextLayerBuilder实例
    const textLayer = new TextLayerBuilder({
      textLayerDiv,
      pageIndex: documentPage.pageNumber,
      viewport: documentViewport,
      // 发布订阅
      eventBus: { _on: () => {}, dispatch: () => {} },
    })

    textLayer.setTextContent(textContent)

    textLayer.render()
  }

  useEffect(() => {
    const fetchPdf = async () => {
      const loadingTask = pdfJS.getDocument(url)

      const pdfDocument = await loadingTask.promise
      setPdfInstance(pdfDocument)
      setNumPages(pdfDocument.numPages)
      renderPdf(pdfDocument, currentPage)
    }

    fetchPdf()
  }, [url])

  return (
    <div>
      <div className="toolBus">
        <div className="pagination">
          <button
            className="toolbarButton pageUp"
            title="Previous Page"
            id="previous"
            onClick={() => {
              const previousPage = currentPage - 1
              setCurrentPage(previousPage)
              renderPdf(pdfInstance, previousPage)
            }}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <input
            type="number"
            id="pageNumber"
            className="toolbarField pageNumber"
            value={currentPage}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10)
              if (val >= 1 && val <= numPages) {
                setCurrentPage(val)
                renderPdf(pdfInstance, val)
              }
            }}
          />
          / {numPages}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="toolbarButton pageDown"
            title="Next Page"
            id="next"
            onClick={() => {
              const nextPage = currentPage + 1
              setCurrentPage(nextPage)
              renderPdf(pdfInstance, nextPage)
            }}
            disabled={currentPage === numPages}
          >
            Next Page
          </button>
        </div>
        <div className="zoom">
          <button
            onClick={() => {
              const curScale = scale + 0.1
              if (scale <= 2) {
                setScale(curScale)
                renderPdf(pdfInstance, currentPage)
              }
            }}
          >
            Zoom In
          </button>
          <input disabled value={percentZoom} />
          <button
            onClick={() => {
              const curScale = scale - 0.1
              if (scale > 0.5) {
                setScale(curScale)
                renderPdf(pdfInstance, currentPage)
              }
            }}
          >
            Zoom Out
          </button>
        </div>
      </div>
      <div className="container">
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  )
}
