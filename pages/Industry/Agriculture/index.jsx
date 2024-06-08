import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const AgriculturePage = dynamic(
    ()=> import('@/components/IndustryPageComponents/AgriculturePage/AgriculturePage'),
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
          Transforming Agriculture with Innovative Solutions | Brizsolution Technology
        </title>

        <meta
          name="description"
          content="Explore the future of agriculture with Brizsolution Technology. Our innovative solutions redefine farming practices for sustainability and efficiency. Discover precision farming, smart irrigation, and more. Join us in shaping the future of agriculture for a greener and smarter world." />

        <meta
          name="keywords"
          content="Agriculture, Precision Farming, Smart Agriculture, Sustainable Farming, Farm Innovation, Agricultural Solutions, Modern Farming Practices, Crop Management Technology, Smart Crop Monitoring, Digital Farming" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/agriii.webp" />
        </Head>
        <AgriculturePage />
    </>
  )
}

export default index