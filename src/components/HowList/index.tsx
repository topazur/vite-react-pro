import React, { ReactNode, useState } from 'react'
import { PullToRefresh, InfiniteScroll, List, Loading } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'

interface IHowList {
  onRefresh?: () => Promise<any>
  pullingText?: ReactNode
  releaseText?: ReactNode
  refreshingText?: ReactNode
  completeText?: ReactNode
  completeDelay?: number
  headHeight?: number
  threshold?: number
  ListClass?: string
  // isPull?: boolean
  // to do: 插槽 数据请求，目前仅仅为demo
}

let current = 1

function getNextData() {
  const ret: string[] = []
  for (let i = 0; i < 18; i++) {
    ret.unshift(current.toString())
    current++
  }
  return ret
}

export default (props: IHowList) => {
  const { ListClass } = props

  const [data, setData] = useState(() => getNextData())
  const [hasMore, setHasMore] = useState(true)
  async function onRefresh() {
    await sleep(2000)
    setData([...getNextData(), ...data])
  }
  async function loadMore() {
    await sleep(2000)
    const append = getNextData()
    setData((val) => [...val, ...append])
    // 结果数据小于等于0，表示没有更多数据
    // setHasMore(append.length > 0)
    setHasMore(data.length > 40)
  }
  return (
    <PullToRefresh onRefresh={onRefresh}>
      {/* style={{ minHeight: '100vh' }}的目的是：当列表很短，下拉空白处由于没点击在组件上，无法触发下拉 */}
      <List className={ListClass || 'h-min-screen'}>
        {data.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
      <InfiniteScroll threshold={100} hasMore={hasMore} loadMore={loadMore}>
        <InfiniteScrollContent hasMore={hasMore} />
      </InfiniteScroll>
    </PullToRefresh>
  )
}

const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
  return (
    <span className="adm-infinite-content">
      {hasMore ? (
        // 數組是完全有效的 jsx 元素
        [<span key="load-text">Loading</span>, <Loading key="load-spin" size="small" />]
      ) : (
        <span> --- 我是有底线的 --- </span>
      )}
    </span>
  )
}
