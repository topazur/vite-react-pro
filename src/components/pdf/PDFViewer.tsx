import React, { useRef, useEffect, useState } from 'react'
import * as pdfJS from 'pdfjs-dist'
import {
  PDFLinkService,
  PDFFindController,
  PDFViewer,
  // DownloadManager,
} from 'pdfjs-dist/web/pdf_viewer'
// window.pdfjsWorker
import 'pdfjs-dist/build/pdf.worker.entry'

import 'pdfjs-dist/web/pdf_viewer.css'
import './pdf-view.less'

pdfJS.GlobalWorkerOptions.workerSrc = window!.pdfjsWorker
// 显示文字类型 0 不显示 1 显示 2 启用增强
const TEXT_LAYER_MODE = 0
// 是否通过CSS控制放大缩小 true false
const USE_ONLY_CSS_ZOOM = true

interface IProps {
  url: string
  textLayer?: boolean
}

/**
 * @title PDFViewer 使用pdf.js 推荐的方式实现预览，实现功能有 翻页 缩放 文字查找高亮显示
 * @description PDFViewer也支持大文件预览 ？？？
 */
export default function ({ url, textLayer = false }: IProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [viewer, setViewer] = useState<any>(null)
  const [numPages = 1, setNumPages] = useState<number>(1)
  const [currentPage = 1, setCurrentPage] = useState<number>(1)
  const [scale = 1, setScale] = useState<string | number>('auto')

  const changePage = (num: number) => {
    viewer.currentPageNumber = num
    setCurrentPage(num)
  }

  // 渲染页面
  const initialViewer = async (url: string) => {
    const linkService = new PDFLinkService()
    const findController = new PDFFindController({
      linkService,
      // 发布订阅
      eventBus: {
        _on: () => {},
        dispatch: () => {},
      },
    })
    const newViewer = new PDFViewer({
      // 必须含绝对定位样式 - `getComputedStyle(this.container).position !== "absolute"`
      container: containerRef.current,
      // renderer:'svg',
      useOnlyCssZoom: USE_ONLY_CSS_ZOOM,
      textLayerMode: TEXT_LAYER_MODE,
      linkService,
      findController,
      // 发布订阅
      eventBus: {
        _on: () => {},
        dispatch: (event: string, payload: any) => {
          if (event === 'pagechanging') {
            console.log(payload.pageNumber)
          }
        },
      },
    })

    linkService.setViewer(newViewer)
    // 设置初始缩放
    newViewer.currentScaleValue = scale

    const loadingTask = pdfJS.getDocument({ url: url })
    const pdfDocument = await loadingTask.promise

    // 下面两个setDocument方法是渲染的最后关键之处
    if (!pdfDocument) return
    newViewer.setDocument(pdfDocument)
    linkService.setDocument(pdfDocument)
    setNumPages(pdfDocument.numPages)
    setViewer(newViewer)
  }

  useEffect(() => {
    if (url) initialViewer(url)
    // 监听事件
  }, [url])

  useEffect(() => {
    // window.addEventListener('pagechanging', (evt) => {
    //   console.log('evt: ', evt, 1)
    //   const page = evt.detail.pageNumber
    //   changePage(page)
    // })
  })

  return (
    <div className="viewer">
      <div className="toolBus">
        <div className="pagination">
          <button
            className="toolbarButton pageUp"
            title="Previous Page"
            id="previous"
            onClick={() => {
              const newCurrentPage = currentPage - 1
              changePage(newCurrentPage)
            }}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <input
            type="number"
            id="pageNumber"
            value={currentPage}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10)
              if (val >= 1 && val <= numPages) {
                changePage(val)
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
              const newCurrentPage = currentPage + 1
              changePage(newCurrentPage)
            }}
            disabled={currentPage === numPages}
          >
            Next Page
          </button>
        </div>
        <div className="selection">
          <select
            value={`${scale}`}
            onChange={(e) => {
              const newScale = e.target.value
              viewer.currentScaleValue = newScale
              setScale(newScale)
            }}
          >
            <option value="auto">自动缩放</option>
            <option value="page-actual">实际大小</option>
            <option value="page-fit">适合页面</option>
            <option value="page-width">适合页宽</option>
            <option value="0.50">50%</option>
            <option value="0.75">75%</option>
            <option value="1">100%</option>
            <option value="1.25">125%</option>
            <option value="1.50">150%</option>
            <option value="1.75">175%</option>
            <option value="2">200%</option>
            <option value="3">300%</option>
            <option value="4">400%</option>
          </select>
        </div>
      </div>
      {/* 容器 `container: div#viewerContainer.viewerContainer` */}
      <div id="viewerContainer" className="viewerContainer" ref={containerRef}>
        {/* 每一页插入位置是 `viewer: div#innerContainer.pdfViewer` */}
        <div className="pdfViewer" id="innerContainer" />
        <div className="otherViewer">11</div>
      </div>
    </div>
  )
}
