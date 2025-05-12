import React from 'react'

const CatchAll = async({params}) => {
    const {catchall}=await params
    console.log(catchall)
  return (
    //in url suppose we have written /docs/guides/getstarted
    
    <div>CatchAll /{catchall.join("/")}</div>
  )
}

export default CatchAll