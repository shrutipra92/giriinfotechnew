import React from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer/Footer'
import LastComponent from './LastComponent'
import FirstComponent from './FirstComponent'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const EcommercePage = () => {
  return (
    <div className='w-full'>

            <Navbar />
            <WhatsAppIcon />

            <div className='w-full h-[70vh] relative flex items-center'>
                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/retailbanner.jfif"
                    alt=""
                    className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                />
                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='ml-[20px] 600px:ml-[60px] 1000px:ml-[160px] flex flex-col gap-[20px]'>
                    <p className='text-white font-[700] text-[28px] 700px:text-[32px] leading-[38px] 700px:leading-[36px]'>
                        <span>E-commerce Platform Development</span>
                    </p>

                    <div className='text-white text-[20px] w-full 700px:w-[520px] leading-[24px] flex flex-col gap-[6px]'>

                        <span>
                        Ready to sell online? Our e-commerce solutions empower businesses of all sizes to establish and grow their online stores. We create intuitive platforms with secure payment gateways, inventory management, and customer analytics, providing a seamless shopping experience for your customers."
                        </span>
                    </div>
                </motion.div>
            </div>

            <FirstComponent />

            <LastComponent />

            <Footer />

        </div>
  )
}

export default EcommercePage