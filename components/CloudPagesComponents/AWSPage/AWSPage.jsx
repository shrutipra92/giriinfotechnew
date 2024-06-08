import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Link from 'next/link'
import Footer from '@/components/Footer/Footer'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import FifthComponent from './FifthComponent'
import SeventhComponent from './SeventhComponent'
import EightthComponent from './EightthComponent'
import SixthComponent from './SixthComponent'

const AWSPage = () => {
    return (
        <div className="w-full">
    
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
                  AWS cloud services
                </span>
                <div className='text-white text-[20px] w-full 700px:w-[520px] leading-[24px] flex flex-col gap-[6px] mt-[16px]'>
    
                  <span>
                    Empowering Innovation, Unleashing Potential:<br /> Your Cloud Journey, Our Expertise
                  </span>
                </div>
              </p>
              <Link href={'/ContactUs'}>
                <button className='bg-blueBackground text-white font-bold w-fit px-[20px] py-[6px] rounded-[4px]'>
                  Consult now
                </button>
              </Link>
    
            </motion.div>
    
            <img
              src="https://websiteimagessb.s3.us-west-2.amazonaws.com/aws_batch.jpg"
              alt=""
              className={`absolute right-[50px] 500px:right-[100px] bottom-[50px] 500px:bottom-[100px] z-10 w-[100px] 500px:w-[120px]`} />
    
          </div>
    
          <ThirdComponent />
    
          <FourthComponent />
    
          <FifthComponent />
    
          <SeventhComponent />
    
          <EightthComponent />
    
          <SixthComponent />
    
          <Footer />
    
        </div>
      )
}

export default AWSPage