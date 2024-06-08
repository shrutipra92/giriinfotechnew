import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const TelecomPage = dynamic(
    ()=> import('@/components/IndustryPageComponents/TelecomPage/TelecomPage'),
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
          Revolutionizing Telecommunications | Giri Info Tech Solutions
        </title>

        <meta
          name="description"
          content="Discover the future of telecommunications with Brizsolution. Our innovative solutions redefine connectivity, enhance communication networks, and advance telecom technology. Explore how Brizsolution is leading the way in shaping a connected and communicative world." />

        <meta
          name="keywords"
          content="Telecommunications Solutions, Advanced Communication Networks, Telecom Technology Innovations, 5G Connectivity Solutions, Network Infrastructure Optimization, Telecommunication Services, Mobile Technology Advancements, Connectivity Solutions for Businesses, Next-Gen Telecom Technologies, Internet of Things (IoT) Connectivity" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/tele.webp" />
        </Head>
        <TelecomPage />
    </>
  )
}

export default index