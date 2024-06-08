import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const RetailPage = dynamic(
    ()=> import('@/components/IndustryPageComponents/RetailPage/RetailPage'),
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
          Elevate Retail Experiences with Giri Info Tech Solutions
        </title>

        <meta
          name="description"
          content="Discover the future of retail with Brizsolution's cutting-edge technology solutions. From seamless e-commerce platforms to in-store innovations, our technology transforms the retail landscape. Explore how Brizsolution is enhancing customer experiences, optimizing operations, and reshaping the retail industry." />

        <meta
          name="keywords"
          content="Retail, Retail Technology Solutions, E-commerce Innovations, In-Store Technology, Omni-Channel Retail, Customer Experience Optimization, Retail Analytics Solutions, Inventory Management Technology, Point-of-Sale Innovations, Digital Retail Trends, Smart Retail Solutions" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/retailbanner.jfif" />
        </Head>
        <RetailPage />
    </>
  )
}

export default index