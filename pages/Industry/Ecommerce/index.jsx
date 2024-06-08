import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const EcommercePage = dynamic(
    ()=> import('@/components/IndustryPageComponents/EcommercePage/EcommercePage'),
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
          Elevate Your Shopping Experience | Giri Info Tech E-commerce Solutions
        </title>

        <meta
          name="description"
          content="Explore a seamless online shopping experience with Brizsolution's innovative e-commerce solutions. From user-friendly interfaces to secure payment gateways, our technology enhances every step of the e-commerce journey. Discover how Brizsolution is revolutionizing the world of online retail for a smarter and more enjoyable shopping experience." />

        <meta
          name="keywords"
          content="E-commerce Solutions, Online Shopping Experience, Secure Payment Gateways, User-Friendly E-commerce Platforms, Digital Retail Innovations, E-commerce Technology Trends, Personalized Shopping Experiences, Mobile Commerce Solutions, E-commerce Analytics, Enhanced Customer Engagement" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/retailbanner.jfif" />
        </Head>
        <EcommercePage />
    </>
  )
}

export default index