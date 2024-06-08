import { Avatar } from '@mui/material'
import React from 'react'
import Image from 'next/image'

const BlogList = () => {
    const logored = "https://websiteimagessb.s3.us-west-2.amazonaws.com/logos.png"
    return (
      <div className='w-full'>
  
              <div className='h-[10vh] flex items-center justify-between px-[40px] border shadow'>
  
                  <div className='h-[8vh] cursor-pointer'><Image src={logored} alt='logo' className='h-full' width={400} height={400} /></div>
  
                  <div className='w-[50px] h-[50px] cursor-pointer'>
                      <Avatar className='w-full h-full' />
                  </div>
  
              </div>
  
              <div className='px-[40px] py-[20px] bg-gray-100'>
  
                  
  
              </div>
  
  
          </div>
    )
}

export default BlogList