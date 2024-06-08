import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const SapPage = dynamic(
    ()=> import('@/components/ServicesPageComponents/SapPage/SapPage'),
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./icon.ico" type="image/x-icon" />
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>
          SAP Solutions for Business Excellence | Giri Info Tech 
        </title>

        <meta
          name="description"
          content="Unlock the full potential of your enterprise with Giri Info Tech's SAP solutions. From ERP to advanced analytics, our technology empowers businesses with seamless integration and comprehensive SAP services. Discover how Giri Info Tech is leveraging SAP to drive efficiency, innovation, and business excellence." />

        <meta
          name="keywords"
          content="SAP Solutions, SAP ERP Integration, Advanced Analytics with SAP, SAP Implementation Services, SAP Business Excellence, Enterprise Resource Planning (ERP), SAP HANA Innovations, SAP Cloud Solutions, SAP Consulting Services, SAP Integration and Optimization" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/sap.jpeg" />
        </Head>
        <SapPage />
    </>
  )
}

export default index