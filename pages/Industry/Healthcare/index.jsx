import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const HealthCarePage = dynamic(
    ()=> import('@/components/IndustryPageComponents/HealthCarePage/HealthCarePgae'),
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
        <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./icon.ico" type="image/x-icon" />
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>
          Revolutionizing Healthcare Solutions | Brizsolution Technology
        </title>

        <meta
          name="description"
          content="Discover the future of healthcare with Brizsolution. Our innovative solutions transform patient care, streamline medical processes, and advance healthcare technology. Explore how Brizsolution is leading the way in shaping a healthier and more efficient healthcare landscape." />

        <meta
          name="keywords"
          content="Healthcare, Healthcare Technology, Patient-Centric Solutions, Medical Process Optimization, Telemedicine Innovations, Health Information Systems, Healthcare Analytics, Advanced Medical Technology, Digital Health Solutions, Healthtech Innovations, Medical Efficiency Solutions" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/healthcare.webp" />
        </Head>
        <HealthCarePage />
    </>
  )
}

export default index