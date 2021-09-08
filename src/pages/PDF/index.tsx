import React from 'react'

import {
  // PDFBase,
  PDFViewer,
} from '@/components'

const url = 'http://127.0.0.1:4000/2021.pdf'

const Index = () => {
  return (
    <div>
      {/* <PDFBase url={url} /> */}
      <PDFViewer url={url} />
    </div>
  )
}

export default Index
