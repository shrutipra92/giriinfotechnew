import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const InternetOfThingsPage = dynamic(
    ()=> import('@/components/ServicesPageComponents/InternetOfThingsPage/InternetThingsPage'),
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
          Empowering Connectivity: IoT Solutions by Giri Info Tech 
        </title>

        <meta
          name="description"
          content="Step into the era of seamless connectivity with Giri Info Tech's innovative Internet of Things (IoT) solutions. Our technology transforms industries, enhances efficiency, and brings intelligence to devices. Explore how Giri Info Tech is at the forefront of shaping a connected and smarter world through IoT innovations." />

        <meta
          name="keywords"
          content="IoT Solutions, Connected Devices, Smart Connectivity, Industrial IoT (IIoT), IoT Analytics, IoT Security, IoT Integration Services, IoT Sensor Technologies, Edge Computing for IoT, IoT Applications" />

        <meta
          property="og:image"
          content="https://s6.imgcdn.dev/AuX9t.jpg" />
        </Head>
        <InternetOfThingsPage />
    </>
  )
}

export default index