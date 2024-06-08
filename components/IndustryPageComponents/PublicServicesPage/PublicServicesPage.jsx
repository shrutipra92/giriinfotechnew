import React from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer/Footer'
import LastComponent from '../AgriculturePage/LastComponent'
import SecondComponent from './SecondComponent'
import FirstComponent from './FirstComponent'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const PublicServicesPage = () => {
  return (
    <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />

            <div className='w-full h-[70vh] relative flex items-center'>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/public_sector_banner.webp"
                    alt="Logistics_baneer"
                    className='absolute top-0 left-0 w-full h-full z-[-1] object-cover' />

                <motion.div
                    className='w-[90%] 1000px:w-[80%] mx-auto flex items-center'
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
                        <span>Public Services</span>
                    </p>

                </motion.div>

            </div>

            <FirstComponent />

            <SecondComponent />

            <LastComponent />

            <Footer />

        </div>
  )
}

export default PublicServicesPage