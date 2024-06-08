import React from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer/Footer'
import FourthComponent from './FourthComponent'
import ThirdComponent from './ThirdComponent'
import SecondComponent from './SecondComponent'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const CloudInfrastructurePage = () => {
  return (
    <div className='w-full'>

        <Navbar />

        <WhatsAppIcon />

        <div 
        className='w-full h-[70vh] relative flex items-center justify-center'>

            <img 
            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/cloudinfra.jpeg" 
            alt=""
            className='absolute z-[-1] top-0 left-0 w-full h-full object-cover' />

            <motion.div
            initial={{
                x: -100,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            className='font-[600] text-[36px] 700px:text-[42px] text-white'>
                Infrastructure & Cloud Services
            </motion.div>

        </div>

        <SecondComponent />

        <ThirdComponent />

        <FourthComponent />

        <Footer />

    </div>
  )
}

export default CloudInfrastructurePage