import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import Footer from '@/components/Footer/Footer'

const MetaversePages = () => {
  return (
    <div className='w-full'>

        <Navbar />

        <WhatsAppIcon />

        <div className='w-full h-[70vh] relative flex items-center'>

            <img 
            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/meta.jfif" 
            alt=""
            className='absolute top-0 left-0 w-full h-full z-[-1] object-cover' />

            <motion.div 
            className='ml-[20px] 600px:ml-[60px] 1000px:ml-[160px] flex flex-col gap-[10px]'
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

                <p className='text-white font-[700] text-[32px] 700px:text-[42px] leading-[34px] 700px:leading-[44px]'>
                Metaverse
                </p>

                {/* <p className='text-white text-[20px] w-full 700px:w-[520px] leading-[24px]'>
                We are offerings and experiences within a virtual, interconnected, and immersive world. Metaverse refers to a collective virtual shared space, often facilitated by the internet, where users can interact with each other and digital objects in real-time.
                </p> */}

            </motion.div>

        </div>

        <SecondComponent />

        <ThirdComponent />

        <Footer />

    </div>
  )
}

export default MetaversePages