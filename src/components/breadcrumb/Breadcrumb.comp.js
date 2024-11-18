import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

export const PageBreadcrumb = ({page}) => {
  return (
    <div>
    <Breadcrumb className='mt-4'>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
    </div>
  )
}