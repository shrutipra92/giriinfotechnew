import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Footer from '@/components/Footer/Footer'
import LastComponent from './LastComponent'
import ExpertiseComponent from './ExpertiseComponent'
import FirstComponent from './FirstComponent'

const BankingPage = () => {
  return (
    <div className='w-full'>

        <Navbar />

        <WhatsAppIcon />

        <div className='w-full h-[70vh] relative flex items-center'>

            <img 
            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/c932e3e3b7.jfif" 
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
                <span>Giri Info Tech In The Banking Industry</span>
                </p>

                <div className='text-white text-[20px] w-full 700px:w-[520px] leading-[24px] flex flex-col gap-[6px]'>
               
                <span>
                The banking industry has undergone a significant transformation in recent years, driven by technological advancements and changing customer preferences. To thrive in this dynamic environment Giri Info Tech play a crucial role in supporting banks and financial institutions.
                </span>
                </div>

            </motion.div>

        </div>

        <FirstComponent />

        <ExpertiseComponent />

        <LastComponent />

        <Footer />

    </div>
  )
}

export default BankingPage