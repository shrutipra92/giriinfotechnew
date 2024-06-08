import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const SalesforcePage = dynamic(
    ()=> import('@/components/ServicesPageComponents/SalesforcePage/SalesForcePage'),
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./icon.ico" type="image/x-icon" />
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>
          Unlock Business Potential with Salesforce Solutions by Giri Info Tech 
        </title>

        <meta
          name="description"
          content="Elevate your customer experience and streamline business processes with Giri Info Tech's Salesforce solutions. Our technology expertise leverages the power of Salesforce, delivering seamless CRM, automation, and innovation. Explore how Giri Info Tech is transforming businesses through Salesforce for enhanced efficiency and customer satisfaction." />

        <meta
          name="keywords"
          content="Salesforce Solutions, Salesforce CRM, Salesforce Automation, Salesforce Integration, Cloud-based Salesforce Services, Salesforce Customization, Salesforce Consulting, Salesforce App Development, Salesforce Analytics, Salesforce Lightning Platform" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/salesforce.jpeg" />
        </Head>
        <SalesforcePage />
    </>
  )
}

export default index