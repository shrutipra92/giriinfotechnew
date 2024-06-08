import Footer from '@/components/Footer/Footer'
import Loader from '@/components/Loader/Loader'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const ParticularBlogPage = dynamic(
    ()=> import('@/components/BlogsPage/ParticularBlog/ParticularBlog'),
    {
        ssr: false,
        loading: () => (
          <div className="w-full h-screen flex items-center justify-center">
            <Loader />
          </div>
        )
      }
)

const ParticularBlog = () => {
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

        <title>Giri Info Tech Pvt. Ltd.</title>
      </Head>
      <Navbar />
      <WhatsAppIcon />
      <ParticularBlogPage />
      <Footer />
    </>
  )
}

export default ParticularBlog