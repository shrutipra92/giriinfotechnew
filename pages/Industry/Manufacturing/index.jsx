import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const ManufacturingPage = dynamic(
    ()=> import('@/components/IndustryPageComponents/ManufacturingPage/ManufacturingPage'),
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
          Innovate Manufacturing Excellence with Giri Info Tech Solutions
        </title>

        <meta
          name="description"
          content="Explore the future of manufacturing with Brizsolution's advanced technology solutions. From smart production systems to efficient supply chain management, our technology reshapes the manufacturing landscape. Discover how Brizsolution is driving innovation, efficiency, and sustainability in the manufacturing sector." />

        <meta
          name="keywords"
          content="Manufacturing, Manufacturing Technology Solutions, Smart Production Systems, Supply Chain Optimization for Manufacturing, Industrial Automation Innovations, Advanced Manufacturing Technologies, Sustainable Manufacturing Practices, Digital Transformation in Manufacturing, Efficient Production Processes, Manufacturing Industry Solutions, Industry 4.0 Technologies" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/manufacture_banner.webp" />
        </Head>
        <ManufacturingPage />
    </>
  )
}

export default index