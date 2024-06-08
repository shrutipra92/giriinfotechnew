import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const MobilityPage = dynamic(
    ()=> import('@/components/ServicesPageComponents/MobilityPage/MobilityPage'),
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
          Seamless Mobility Solutions for a Connected World | Giri Info Tech 
        </title>

        <meta
          name="description"
          content="Explore the next wave of mobility with Giri Info Tech's cutting-edge technology solutions. From smart transportation to connected vehicles, our mobility solutions redefine the way we move. Discover how Giri Info Tech is driving innovation in transportation, enhancing connectivity, and shaping a smarter, more efficient world." />

        <meta
          name="keywords"
          content="Mobility, Mobility Solutions, Smart Transportation Technology, Connected Vehicles, Intelligent Mobility Innovations, Urban Mobility Solutions, Future of Transportation, Sustainable Mobility, IoT in Mobility, Advanced Transportation Technologies, Mobility as a Service (MaaS) " />

        <meta
          property="og:image"
          content="https://s6.imgcdn.dev/2gkdl.jpg" />
        </Head>
        <MobilityPage />
    </>
  )
}

export default index