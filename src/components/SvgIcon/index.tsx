import React, { useMemo, CSSProperties } from 'react'
import { isExternal } from '@/utils/validate'

interface IProps {
  icon?: string
  name?: string
  style?: CSSProperties
}

/**
 * doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
 */
export default ({ icon, name, style }: IProps) => {
  // name 和 icon 属性都可以识别
  const iconName = useMemo(() => name || icon || 'icon-song', [icon, name])
  // 是否为网络链接
  const calcExternal = useMemo(() => isExternal(iconName), [iconName])
  // 网络协议svg资源 行内样式
  const calcExternalIconStyle = useMemo(() => {
    return calcExternal
      ? {
          mask: `url(${iconName}) no-repeat 50% 50%`,
          '-webkit-mask': `url(${iconName}) no-repeat 50% 50%`,
          ...style,
        }
      : {}
  }, [calcExternal, iconName])
  // 拼接完整name
  const calcIconName = useMemo(() => `#icon-${iconName}`, [iconName])

  return calcExternal ? (
    <div className="svg-icon svg-external-icon" style={calcExternalIconStyle} />
  ) : (
    <svg aria-hidden="true" className="svg-icon" style={style}>
      <use xlinkHref={calcIconName} />
    </svg>
  )
}
