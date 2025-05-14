import React from 'react'

const comments = async({params}) => {
  const {blogid} =await params
  return (
    <div>comments on the blog{blogid}</div>
  )
}

export default comments