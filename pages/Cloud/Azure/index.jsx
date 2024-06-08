import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const AzurePage = dynamic(
    ()=> import('@/components/CloudPagesComponents/AzurePage/AzurePage'),
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
          Empowering Your Cloud Journey: Azure Solutions by Brizsolution Technology
        </title>

        <meta
          name="description"
          content="Transform your business with Brizsolution's Azure solutions, harnessing the robust capabilities of Microsoft Azure. Our technology unleashes the power of the cloud, providing scalable, secure, and innovative solutions. Explore how Brizsolution is driving digital transformation through Azure for enhanced agility, efficiency, and business growth." />

        <meta
          name="keywords"
          content="Azure Solutions, Microsoft Azure Cloud Services, Azure Infrastructure as a Service (IaaS), Azure Platform as a Service (PaaS), Azure Managed Services, Cloud Storage Solutions on Azure, Azure AI and Machine Learning, Azure DevOps Integration, Serverless Computing with Azure Functions, Azure Cloud Security" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/c1.jfif" />
        </Head>
        <AzurePage />
    </>
  )
}

export default index