import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import FirstComponent from './FirstComponent'
import ExpertiseComponent from './ExpertiseComponent'
import ThirdComponent from './ThirdComponent'
import SuccessStory from './SuccessStory'
import LastComponent from '../AgriculturePage/LastComponent'
import Footer from '@/components/Footer/Footer'

const RetailPage = () => {
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
            <span>Empowering Retail Excellence Through IT Solutions</span>
          </p>

          <div className='text-white text-[20px] w-full 700px:w-[520px] leading-[24px] flex flex-col gap-[6px]'>

            <span>
              In an era where retail is not just about transactions but creating unforgettable experiences, we understand the unique challenges and limitless possibilities of the industry. At Giri Info Tech, we don't just provide IT solutions; we catalyze transformation. Our journey is anchored in a relentless commitment to empower retailers to thrive in a digital-first world.
            </span>
          </div>
        </motion.div>
      </div>

      <FirstComponent />

      <ExpertiseComponent />

      <ThirdComponent />

      <SuccessStory />

      <LastComponent />

      <Footer />
    </div>
  )
}

export default RetailPage