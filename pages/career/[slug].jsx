import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import React from 'react'

const JobDetailsPage = dynamic(
    () => import('@/components/CareerPage/JobDetailsPage/JobDetailsPage'),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-screen flex items-center justify-center">
                <Loader />
            </div>
        )
    }
)

const ParticularCareerPage = () => {
  return (
    <>
    <JobDetailsPage />
    </>
  )
}

export default ParticularCareerPage