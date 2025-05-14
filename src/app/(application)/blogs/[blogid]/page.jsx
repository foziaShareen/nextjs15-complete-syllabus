import React from 'react'
import { notFound } from 'next/navigation';
export async function generateMetadata({ params }) {
  
  const { blogid } =await params;
  return { 
    title : `Blog: ${blogid}`
}
}

const blogid =async ({params}) => {
    const { blogid } =await params;
     if(!/^\d+$/.test(blogid)){ 
        notFound()
    }
    return  <h1>Blog: {blogid}</h1> //`blogid`
        
    
}

export default blogid
