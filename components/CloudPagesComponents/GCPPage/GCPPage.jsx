import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import { motion } from 'framer-motion'
import React from 'react'
import FirstComponent from './FirstComponent'
import ComponentOne from './ComponentOne'
import Footer from '@/components/Footer/Footer'
import FourthComponent from './FourthComponent'

const GCPPage = () => {
    return (
        <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />

            <div className='w-full h-[70vh] relative flex items-center'>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/banner.jfif"
                    alt=""
                    className='absolute top-0 left-0 w-full h-full z-[-1] object-cover' />

                <motion.div
                    className='ml-[20px] 600px:ml-[60px] 1000px:ml-[160px] flex flex-col gap-[20px]'
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 1
                    }}>

                    <p className='text-white font-[700] text-[28px] 700px:text-[32px] leading-[38px] 700px:leading-[36px]'>
                        <span>
                        Google Cloud Platform
                        </span>
                        <div className='text-white text-[20px] w-full 700px:w-[520px] leading-[24px] flex flex-col gap-[6px] mt-[16px]'>

                            <span>
                            Our Google Cloud Platform (GCP) offers several key advantages, making it a preferred choice for businesses worldwide.
                            </span>
                        </div>
                    </p>

                </motion.div>

            </div>

            <FirstComponent />

            <ComponentOne />


            {/* <SecondComponent /> */}

            <FourthComponent />

            <Footer />

        </div>
    )
}

export default GCPPage