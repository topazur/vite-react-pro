import React from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { ErrorBlock } from 'antd-mobile'

type IHomeError = RouteConfigComponentProps & {
  status?: 'default' | 'disconnected' | 'empty' | 'busy' | undefined
}

function HowError(props: IHomeError) {
  return (
    <ErrorBlock status={props.status} fullPage={true}>
      {/*  slot */}
    </ErrorBlock>
  )
}

export default HowError
