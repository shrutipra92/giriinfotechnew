import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const IndependentVendorPage = dynamic(
    ()=> import('@/components/IndustryPageComponents/IndependentVendorPage/IndependentVendorPage'),
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
          Empower Independent Vendors with Giri Info Tech | Vendor Management Solutions
        </title>

        <meta
          name="description"
          content="Brizsolution's technology solutions empower independent vendors to thrive in the digital marketplace. From streamlined inventory management to enhanced customer engagement, discover how Brizsolution is redefining the landscape for independent vendors. Explore our tailored solutions for a more efficient and profitable vendor experience." />

        <meta
          name="keywords"
          content="Independent Vendor, Independent Vendor Solutions, Vendor Management Technology, Digital Marketplace Solutions, Inventory Management for Vendors, Customer Engagement for Independent Sellers, E-commerce Solutions for Vendors, Small Business Technology Solutions, Vendor Efficiency Solutions, Marketplace Optimization, Tailored Vendor Services" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/travel_hospitality.webp" />
        </Head>
        <IndependentVendorPage />
    </>
  )
}

export default index