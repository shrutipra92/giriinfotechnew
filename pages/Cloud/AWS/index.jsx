import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const AWSPage = dynamic(
    ()=> import('@/components/CloudPagesComponents/AWSPage/AWSPage'),
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
          Unleash the Power of the Cloud: AWS Solutions by Brizsolution Technology
        </title>

        <meta
          name="description"
          content="Elevate your business to new heights with Brizsolution's AWS solutions. Our technology leverages the robust capabilities of Amazon Web Services, offering scalable and secure cloud solutions. Explore how Brizsolution is driving innovation through AWS for enhanced performance, flexibility, and reliability." />

        <meta
          name="keywords"
          content="Amazon Web services, AWS Solutions, Cloud Computing Services, AWS Infrastructure as a Service (IaaS), AWS Platform as a Service (PaaS), AWS Managed Services, Cloud Storage Solutions on AWS, AWS Machine Learning Services, AWS DevOps Integration, Serverless Computing with AWS Lambda, AWS Cloud Security" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/c1.jfif" />
        </Head>
        <AWSPage />
    </>
  )
}

export default index