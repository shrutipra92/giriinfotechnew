import Link from 'next/link'
import React from 'react'

const TenthComponent = () => {
  return (
    <div className='w-full h-[180px] flex items-center justify-evenly bg-blueBackground flex-col 900px:flex-row'>

        <p className='text-[20px] 700px:text-[40px] font-bold text-white'>
        Get Ready to Transform & Innovate
        </p>
        <Link href={'/ContactUs'}>
        <button className='bg-white px-[30px] py-[16px] font-[600] rounded-[4px]'>
            GET IN TOUCH
        </button>
        </Link>

    </div>
  )
}

export default TenthComponent