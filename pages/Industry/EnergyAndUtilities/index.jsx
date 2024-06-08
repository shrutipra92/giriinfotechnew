import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const EnergyAndUtilitiesPage = dynamic(
    ()=> import('@/components/IndustryPageComponents/EnergyAndUtilitiesPage/EnergyAndUtilitiesPage'),
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
          Empowering Energy and Utilities | Innovative Solutions by Brizsolution Technology
        </title>

        <meta
          name="description"
          content="Explore the cutting-edge solutions for the energy and utilities sector at Brizsolution. Our innovative technologies redefine energy production, enhance utility services, and drive sustainability. Discover how Brizsolution is shaping the future of energy for a cleaner and more efficient world." />

        <meta
          name="keywords"
          content="Energy and utilities, Energy Solutions, Utilities Innovation, Renewable Energy Technologies, Smart Grid Solutions, Sustainable Energy Practices, Utility Service Optimization, Clean Energy Innovations, Energy Efficiency Solutions, Advanced Utility Management, Power Generation Technologies" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/banner.webp" />
        </Head>
        <EnergyAndUtilitiesPage />
    </>
  )
}

export default index