import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import FirstComponent from './FirstComponent'
import FifthComponent from './FifthComponent'
import FourthComponent from './FourthComponent'
import SixthComponent from './SixthComponent'
import ThirdComponent from './ThirdComponent'
import LastComponent from './LastComponent'
import Footer from '@/components/Footer/Footer'

const AzurePage = () => {
    return (
        <div className='w-full'>
    
          <Navbar />
    
          <WhatsAppIcon />
    
          <div className='w-full h-[70vh] relative flex items-center'>
    
            <img
              src="https://websiteimagessb.s3.us-west-2.amazonaws.com/c1.jfif"
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
                  Azure cloud services
                </span>
              </p>
    
            </motion.div>
    
            <img
              src="https://websiteimagessb.s3.us-west-2.amazonaws.com/batch1.jpg"
              alt=""
              className={`absolute right-[50px] 500px:right-[100px] bottom-[50px] 500px:bottom-[100px] z-10 w-[120px] 500px:w-[160px]`} />
    
          </div>
    
          <FirstComponent />
    
          <FifthComponent />
    
          <ThirdComponent />
    
          <SixthComponent />
    
          <FourthComponent />
    
          <LastComponent />
    
          <Footer />
    
        </div>
      )
}

export default AzurePage