import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const CloudInfrastructurePage = dynamic(
    ()=> import('@/components/ServicesPageComponents/CloudInfrastructurePage/CloudInfrastructurePage'),
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
          Scalable Cloud Infrastructure Solutions by Giri Info Tech 
        </title>

        <meta
          name="description"
          content="Transform your business with Giri Info Tech's state-of-the-art cloud infrastructure solutions. From scalable computing power to secure storage, our technology empowers enterprises with the flexibility and reliability of cloud computing. Discover how Giri Info Tech is redefining the future of IT infrastructure for a more agile and responsive business environment." />

        <meta
          name="keywords"
          content="Cloud Infrastructure Solutions, Scalable Cloud Computing, Cloud Storage Services, Hybrid Cloud Solutions, Cloud Security and Compliance, Cloud Migration Services, Serverless Computing, Multi-Cloud Management, Cloud Network Architecture, Cloud Cost Optimization" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/cloudinfra.jpeg" />
        </Head>
        <CloudInfrastructurePage />
    </>
  )
}

export default index