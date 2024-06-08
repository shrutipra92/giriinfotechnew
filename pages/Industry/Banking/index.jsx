import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const BankingPage = dynamic(
    ()=> import('@/components/IndustryPageComponents/BankingPage/BankingPage'),
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
          Transforming Banking Experiences with Giri Info Tech Solutions
        </title>

        <meta
          name="description"
          content="Explore the future of banking with Brizsolution's innovative technology solutions. From secure digital banking to personalized financial services, our technology redefines the banking experience. Discover how Brizsolution is driving innovation, efficiency, and security in the banking sector." />

        <meta
          name="keywords"
          content="Banking, Banking Technology Solution, Digital Banking Innovations, Personalized Financial Services, Secure Online Banking, Fintech Solutions, Mobile Banking Technology, Financial Technology Trends, Banking Security Solutions, Efficient Banking Processes, Customer-Centric Banking" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/c932e3e3b7.jfif" />
        </Head>
        <BankingPage />
    </>
  )
}

export default index