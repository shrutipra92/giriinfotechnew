import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const DigitalTransformationPage = dynamic(
    ()=> import('@/components/ServicesPageComponents/DigitalTransformationPage/DigitalTransformationPage'),
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
          Embrace Digital Transformation with Giri Info Tech Solutions
        </title>

        <meta
          name="description"
          content="Unlock the full potential of your organization through digital transformation with Giri Info Tech. Our technology solutions empower businesses to innovate, optimize processes, and stay ahead in the digital era. Explore how Giri Info Tech is reshaping industries through comprehensive and strategic digital transformation initiatives." />

        <meta
          name="keywords"
          content="Digital transformation, Digital Transformation Solutions, Business Innovation Technology, Strategic Digital Initiatives, Digitalization Strategies, Technology-Led Organizational Change, Future-Ready Business Solutions, Data-driven Transformation, Cloud Computing for Businesses, Automation and Efficiency, Industry 4.0 Implementation" />

        <meta
          property="og:image"
          content="https://s6.imgcdn.dev/2XHKL.jpg" />
        </Head>
        <DigitalTransformationPage />
    </>
  )
}

export default index