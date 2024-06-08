import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const TechnologyPage = dynamic(
    ()=> import('@/components/IndustryPageComponents/TechnologyPage/TecnologyPage'),
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
          Innovative Technology Solutions for a Smarter Tomorrow | Brizsolution Technology
        </title>

        <meta
          name="description"
          content="Explore the forefront of technology with Brizsolution. Our innovative solutions redefine industries, enhance processes, and drive digital transformation. Discover how Brizsolution is leading the way in shaping a connected, efficient, and technologically advanced world." />

        <meta
          name="keywords"
          content="technology, Technology Solutions, Digital Transformation, Innovative Tech Solutions, Cutting-Edge Technologies, Tech Innovations, Industry 4.0 Solutions, Digital Disruption, Advanced Technology Services, Future-ready Tech Solutions, Emerging Technologies" />

        <meta
          property="og:image"
          content="https://s6.imgcdn.dev/28wgS.jpg" />
        </Head>
        <TechnologyPage />
    </>
  )
}

export default index