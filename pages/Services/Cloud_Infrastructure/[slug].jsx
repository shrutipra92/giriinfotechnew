import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import React from 'react'

const CaseStudyPage = dynamic(
    ()=> import('@/components/ServicesPageComponents/CloudInfrastructurePage/CaseStudyPage/CaseStudyPage'),
    {
        ssr: false,
        loading: () => (
          <div className="w-full h-screen flex items-center justify-center">
            <Loader />
          </div>
        )
      }
)

const CaseStudy = () => {
  return (
    <>
    <CaseStudyPage />
    </>
  )
}

export default CaseStudy