import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminPage = dynamic(
    ()=> import('@/components/AdminPage/AdminPage'),
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
        <AdminPage />
    </>
  )
}

export default index