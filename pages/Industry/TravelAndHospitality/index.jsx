import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const TravelAndHospitalityPage = dynamic(
    ()=> import('@/components/IndustryPageComponents/TravelAndHospitalityPage/TravelAndHospitalityPage'),
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
          Unlock Unforgettable Journeys with Giri Info Tech | Travel and Hospitality Solutions
        </title>

        <meta
          name="description"
          content="Embark on a journey like never before with Brizsolution's innovative travel and hospitality solutions. From seamless booking experiences to smart hotel management, discover how Brizsolution is redefining the travel and hospitality industry. Explore our technology for a world of memorable and personalized experiences." />

        <meta
          name="keywords"
          content="Travel and hospitality, Travel Technology Solutions, Hospitality Innovations, Smart Booking Experiences, Hotel Management Solutions, Personalized Travel Experiences, Digital Concierge Services, TravelTech Innovations, Smart Tourism Solutions, Seamless Booking Platforms, Enhanced Guest Experiences" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/travel_hospitality.webp" />
        </Head>
        <TravelAndHospitalityPage />
    </>
  )
}

export default index