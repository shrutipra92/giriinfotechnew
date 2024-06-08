import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import React from 'react'

const SpecificMessagePage = dynamic(
    ()=> import('@/components/AdminPage/SpecificMessagePage'),
    {
        ssr: false,
        loading: () => (
          <div className="w-full h-screen flex items-center justify-center">
            <Loader />
          </div>
        )
      }
)

const SpecificMessage = () => {
  return (
    <><SpecificMessagePage /></>
  )
}

export default SpecificMessage