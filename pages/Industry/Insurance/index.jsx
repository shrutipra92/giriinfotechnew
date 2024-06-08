import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const InsurancePage = dynamic(
    ()=> import('@/components/IndustryPageComponents/InsurancePage/InsurancePage'),
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
          Smart Insurance Solutions for a Secure Future | Brizsolution Technology
        </title>

        <meta
          name="description"
          content="Discover intelligent insurance solutions with Brizsolution. Our innovative technology redefines the insurance landscape, providing seamless policy management, enhanced risk assessment, and personalized coverage. Explore how Brizsolution is shaping the future of insurance for a more secure and protected tomorrow." />

        <meta
          name="keywords"
          content="Insurance, Insurance Technology Solutions, Intelligent Policy Management, Risk Assessment Innovations, Personalized Insurance Coverage, InsurTech Solutions, Digital Insurance Services, Claims Processing Technology, Secure Insurance Platforms, Future-proof Insurance Solutions, Enhanced Policyholder Experiences" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/insurance_banner.webp" />
        </Head>
        <InsurancePage />
    </>
  )
}

export default index