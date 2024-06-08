import React from 'react'
import { motion } from 'framer-motion'
import Qualitydata from './Quality.json'
import Footer from '@/components/Footer/Footer'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const QualityPage = () => {
    return (
        <div className='w-full'>
        <Navbar/>
        <WhatsAppIcon/>
        <div className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>
         <img
                        src="https://websiteimagessb.s3.us-west-2.amazonaws.com/6971e8f9f6.jpeg"
                        alt=""
                        className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                    />
    
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 1
                        }}
                        className='text-white font-[700] text-[32px] 600px:text-[42px] text-left w-[90%]'>
                        {Qualitydata.Contents.heading.heading1}
                    </motion.div>
              </div>
    
              <div className='w-full flex flex-col items-center justify-center py-[80px]'>
    
              <motion.div
                  initial={{
                      x: 100,
                      opacity: 0
                  }}
                  whileInView={{
                      y: 0,
                      opacity: 1
                  }}
                  transition={{
                      duration: 1
                  }}
                  className='text-red-500 font-[700] text-[32px] 600px:text-[42px] text-left w-[90%]'>
                  {
                      Qualitydata.Contents.ContentOne.Title
                  }
              </motion.div>
    
              <motion.div
                  initial={{
                      y: 100,
                      opacity: 0
                  }}
                  whileInView={{
                      y: 0,
                      opacity: 1
                  }}
                  transition={{
                      duration: 1
                  }}
                  className='text-[16px] leading-[26px] text-justify mt-[20px] w-[95%] 1000px:w-[full] px-[5px]'>
                  <span className='font-[700]'>{Qualitydata.Contents.ContentOne.objects.subheading}</span>{" "}
                  <span>{Qualitydata.Contents.ContentOne.objects.list1}</span>{" "}
                  <span className='font-[700]'>{Qualitydata.Contents.ContentOne.objects.subheading}</span>{" "}
                  <span>{Qualitydata.Contents.ContentOne.objects.list2}</span>
                  <span>{Qualitydata.Contents.ContentOne.objects.list3}</span>
                 
                  <div className='font-[500] mt-[100px]'>
                  <div className='font-[500] text-red-800 mt-[200px] bg-yellow-500'>
                  <span className='font-[700] ml-[10px]'> STRATEGY:-</span>
                    </div>
                  <span className='font-[700]'>{Qualitydata.Contents.ContentOne.objects.subheading}</span>{" "}
                    {Qualitydata.Contents.ContentOne.objects.list4}
                    </div>
    
              </motion.div>
              
              </div>
        <Footer/>
       </div>
      )
}

export default QualityPage