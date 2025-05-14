import React from 'react'

const commentsid
 = async({params}) => {
    const paramsObj =await params
    const{commentsid,blogid}=paramsObj
    console.log(paramsObj)
    return (
        <div>
         <b>commentsid  ={paramsObj.commentsid}</b> <br/>
         <b>blogid ={blogid}</b>

        </div>
    )
}

export default commentsid

