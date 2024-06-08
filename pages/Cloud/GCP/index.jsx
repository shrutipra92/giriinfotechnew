import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const GCPPage = dynamic(
    ()=> import('@/components/CloudPagesComponents/GCPPage/GCPPage'),
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
          Unleashing Innovation in the Cloud: GCP Solutions by Brizsolution Technology
        </title>

        <meta
          name="description"
          content="Elevate your business to new heights with Brizsolution's GCP solutions, leveraging the power of Google Cloud Platform. Our technology brings scalable, reliable, and cutting-edge cloud solutions to drive innovation. Explore how Brizsolution is reshaping the digital landscape through GCP for enhanced performance, flexibility, and efficiency." />

        <meta
          name="keywords"
          content="GCP Solutions, Google Cloud Platform Services, GCP Infrastructure as a Service (IaaS), GCP Platform as a Service (PaaS), GCP Managed Services, Cloud Storage Solutions on GCP, GCP Machine Learning Services, GCP DevOps Integration, Serverless Computing with GCP Cloud Functions, GCP Cloud Security" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/banner.jfif" />
        </Head>
        <GCPPage />
    </>
  )
}

export default index