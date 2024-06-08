import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const MetaversePage = dynamic(
    ()=> import('@/components/ServicesPageComponents/MetaversePages/MetaversePages'),
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
          Explore Boundless Realms: Metaverse Solutions by Giri Info Tech 
        </title>

        <meta
          name="description"
          content="Dive into the infinite possibilities of the metaverse with Giri Info Tech's innovative solutions. Our technology transforms digital experiences, creating immersive, interconnected virtual worlds. Discover how Giri Info Tech is shaping the future of the metaverse, unlocking new dimensions for collaboration, entertainment, and exploration." />

        <meta
          name="keywords"
          content="Metaverse, Metaverse Solutions, Virtual Reality (VR) in the Metaverse, Augmented Reality (AR) Experiences, Digital Twins Technology, Immersive Virtual Environments, Social Metaverse Platforms, Blockchain in the Metaverse, Extended Reality (XR) Solutions, Metaverse Development Services, Virtual Commerce in the Metaverse" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/meta.jfif" />
        </Head>
        <MetaversePage />
    </>
  )
}

export default index