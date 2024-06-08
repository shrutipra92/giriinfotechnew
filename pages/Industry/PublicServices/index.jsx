import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const PublicServicesPage = dynamic(
    ()=> import('@/components/IndustryPageComponents/PublicServicesPage/PublicServicesPage'),
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
          Innovative Technology for Public Services | Brizsolution Solutions
        </title>

        <meta
          name="description"
          content="Brizsolution's technology solutions empower public services with innovation and efficiency. From streamlined administrative processes to enhanced citizen services, our technology redefines the landscape of public service delivery. Discover how Brizsolution is driving positive change in public sectors for a connected and responsive community." />

        <meta
          name="keywords"
          content="Public services, Public Services Technology, Citizen-Centric Solutions, Government Technology Innovations, Administrative Efficiency, Smart City Solutions, Digital Governance, Public Sector Technology Trends, Civic Tech Solutions, Community-Driven Services, Connected Government Initiatives" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/public_sector_banner.webp" />
        </Head>
        <PublicServicesPage />
    </>
  )
}

export default index