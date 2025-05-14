import React from 'react'
import { notFound } from 'next/navigation';
export async function generateMetadata({ params }) {
  
  const { blogid } =await params;
  return { 
    title : `Blog: ${blogid}`
}
}
//if we want to stop more dynamic pages use this and set dynamicParams to false
// export const dynamicParams = false

export  async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
   return  data.map(({id})=>({ blogid:`${id}`})
)

    
    // return [
    //     { blogid: '1' },
    //     { blogid: '2' },
    //     { blogid: '3' },
    //     { blogid: '4' },
    //     { blogid: '5' },
    //     { blogid: '6' },
    //     { blogid: '7' },
    //     { blogid: '8' },
    //     { blogid: '9' },
    //     { blogid: '10' }
    // ]
}

const blogid =async ({params}) => {
    const { blogid } =await params;
     if(!/^\d+$/.test(blogid)){ 
        notFound()
    }
    return  <h1>Blog: {blogid}</h1> //`blogid`
        
    
}

export default blogid
