import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const ARVRPage = dynamic(
    ()=> import('@/components/ServicesPageComponents/ARVRPage/ARVRPage'),
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
          Immersive Experiences Redefined: AR/VR Solutions by Giri Info Tech
        </title>

        <meta
          name="description"
          content="Dive into the future of immersive technologies with Giri Info Tech's AR/VR solutions. From augmented reality applications to virtual reality experiences, our technology creates engaging and transformative interactions. Explore how Giri Info Tech is at the forefront of shaping the digital landscape with innovative AR/VR solutions." />

        <meta
          name="keywords"
          content="AR/VR Solutions, Augmented Reality Applications, Virtual Reality Experiences, Immersive Technology Innovations, AR/VR Development Services, Mixed Reality Solutions, AR/VR Content Creation, Virtual Simulation Technologies, 3D Visualization Services, AR/VR for Business" />

        <meta
          property="og:image"
          content="https://websiteimagessb.s3.us-west-2.amazonaws.com/v8.jfif" />
        </Head>
        <ARVRPage />
    </>
  )
}

export default index