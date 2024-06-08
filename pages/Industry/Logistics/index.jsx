import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const LogisticsPagePage = dynamic(
    ()=> import('@/components/IndustryPageComponents/LogisticsPage/LogisticsPage'),
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
          Efficient Logistics Solutions for Seamless Supply Chains | Brizsolution Technology
        </title>

        <meta
          name="description"
          content="Optimize your supply chain with Brizsolution's cutting-edge logistics solutions. From real-time tracking to intelligent route optimization, our technology enhances every step of the logistics process. Discover how Brizsolution is revolutionizing the logistics industry for greater efficiency and reliability." />

        <meta
          name="keywords"
          content="Logistics, Logistics Solutions, Supply Chain Optimization, Intelligent Route Planning, Real-time Shipment Tracking, Warehouse Management Technology, Last-Mile Delivery Innovations, Freight Management Solutions, Logistics Technology Trends, Smart Transportation Solutions, Efficient Supply Chain Services" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/logistics_banner.webp" />
        </Head>
        <LogisticsPagePage />
    </>
  )
}

export default index