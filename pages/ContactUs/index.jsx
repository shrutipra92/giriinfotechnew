import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import React from 'react'

const ContactUsContainer = dynamic(
    ()=> import('@/components/ContactUs/ContactUsContainer'),
    {
        ssr: false,
        loading: () => (
          <div className="w-full h-screen flex items-center justify-center">
            <Loader />
          </div>
        )
      }
)

const index = () => {
  return (
    <>
        <ContactUsContainer />
    </>
  )
}

export default index