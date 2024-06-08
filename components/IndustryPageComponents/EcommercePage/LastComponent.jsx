import Link from 'next/link'
import React from 'react'

const LastComponent = () => {
  return (
    <div
      className='w-full bg-cover bg-no-repeat h-[500px] bg-blend-multiply bg-gray-700 flex items-center justify-center relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-primaryColor'
      style={{
        backgroundImage: `url('https://websiteimagessb.s3.us-west-2.amazonaws.com/aviation/collaboration.jfif')`
      }}>

      <div className='w-[90%] 1000px:w-[80%] mx-auto h-fit flex items-center justify-center flex-col gap-[20px] text-white'>

        <p className='text-[32px] font-[600]'>
          We value your feedback and inquiries.
        </p>

        <p className='text-[24px] font-[600]'>
          If you have any questions, suggestions, or concerns, please don't hesitate to reach out to us.
        </p>

        <Link href={'/ContactUs'}>
          <button className='bg-primaryColor px-[30px] py-[10px]'>
            Contact us
          </button>
        </Link>

      </div>

    </div>
  )
}

export default LastComponent