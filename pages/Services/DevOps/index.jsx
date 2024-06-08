import Loader from '@/components/Loader/Loader'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const DevOpsPage = dynamic(
    ()=> import('@/components/ServicesPageComponents/DevOpsPage/DevOpsPage'),
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
          Streamline Development to Operations: DevOps Solutions by Giri Info Tech 
        </title>

        <meta
          name="description"
          content="Empower your development and operations workflows with Giri Info Tech's cutting-edge DevOps solutions. Our technology bridges the gap between development and IT operations, fostering collaboration, automation, and efficiency. Explore how Giri Info Tech is leading the way in reshaping software delivery pipelines for a faster and more reliable development process." />

        <meta
          name="keywords"
          content="DevOps Solutions, Continuous Integration/Continuous Deployment (CI/CD), Automation in DevOps, Collaboration Tools for DevOps, DevOps Pipeline Optimization, Infrastructure as Code (IaC), Containerization and Orchestration, Monitoring and Logging in DevOps, DevOps Best Practices, Agile DevOps Transformation" />

        <meta
          property="og:image"
          content="https://s6.imgcdn.dev/28wgS.jpg" />
        </Head>
        <DevOpsPage />
    </>
  )
}

export default index