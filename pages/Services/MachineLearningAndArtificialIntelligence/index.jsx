import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const MlAndAiPagePage = dynamic(
    ()=> import('@/components/ServicesPageComponents/MlAndAiPage/MlAndAiPage'),
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
          Unleashing Intelligence: AI and ML Solutions by Giri Info Tech 
        </title>

        <meta
          name="description"
          content="Step into the future with Giri Info Tech's AI and ML solutions, where innovation meets intelligence. Our technology harnesses the power of artificial intelligence and machine learning, redefining possibilities for businesses. Explore how Giri Info Tech is driving transformative insights, automation, and intelligent decision-making." />

        <meta
          name="keywords"
          content="Artificial intelligence, Machine learning, AI and ML Solutions, Artificial Intelligence Technology, Machine Learning Innovations, Data Analytics with AI, Predictive Analytics, Deep Learning Solutions, Natural Language Processing (NLP), AI-powered Automation, Computer Vision Technology, Cognitive Computing" />

        <meta
          property="og:image"
          content="https://www.bacancytechnology.com/main-boot-5/images/aiml-img/banner-2.webp" />
        </Head>
        <MlAndAiPagePage />
    </>
  )
}

export default index