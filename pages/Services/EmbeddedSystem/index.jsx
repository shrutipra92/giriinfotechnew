import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const EmbeddedSystemPage = dynamic(
    ()=> import('@/components/ServicesPageComponents/EmbeddedSystemPage/EmbeddedSystemPage'),
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
          Empowering Devices: Embedded Systems Solutions by Giri Info Tech 
        </title>

        <meta
          name="description"
          content="Explore the world of efficient and intelligent devices with Giri Info Tech's embedded systems solutions. Our technology seamlessly integrates smart systems into diverse applications, enhancing functionality and performance. Discover how Giri Info Tech is driving innovation in embedded systems for a connected and intelligent future." />

        <meta
          name="keywords"
          content="Embedded Systems Solutions, IoT Embedded Devices, Real-time Embedded Systems, Embedded Software Development, Microcontroller Programming, Firmware Design Services, Embedded Hardware Solutions, Industrial IoT (IIoT) Embedded Systems, Automotive Embedded Systems, Custom Embedded Solutions" />

        <meta
          property="og:image"
          content="https://s6.imgcdn.dev/A4WVS.jpg" />
        </Head>
        <EmbeddedSystemPage />
    </>
  )
}

export default index