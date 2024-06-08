import React from 'react'
import { motion } from 'framer-motion'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Navbar from '@/components/Navbar/Navbar';
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon';
import Footer from '@/components/Footer/Footer';
import AboutUs from './AboutUs.json'

const AboutUsPage = () => {
    return (
        <div className='w-full'>
         <Navbar/>
         <WhatsAppIcon/>
         <div className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>
         <img
                        src="https://s6.imgcdn.dev/2XHKL.jpg"
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
                        className='text-white font-[700] text-[32px] 700px:text-[42px] text-left w-[60%]'>
                        {AboutUs.Contents.heading.heading1}
                    </motion.div>
              </div>
    
              <div className='w-full flex flex-col items-center justify-center py-[80px]'>
    
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
                  className='text-[40px] text-red-500 text-center font-[600] leading-[40px] w-[90%] 1000px:w-[660px]'>
                  {
                      AboutUs.Contents.ContentOne.Title
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
                  {
                      AboutUs.Contents.ContentOne.description
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
                  className='w-70%  mt-[20px] '>
    
                    <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                        <div className='text-justify w-[90%]'>
                        <ArrowRightIcon className='text-red-500'/> {" "}
                        <span className='text-justify font-[500] w-[90%]'>{
                                AboutUs.Contents.ContentOne.objects.subheading1
                            }</span> {" "}
                            {
                                AboutUs.Contents.ContentOne.objects.list1
                            }
                        </div>
                    </div>
    
                  <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                      <div className='text-justify w-[90%]'>
                      <ArrowRightIcon className='text-red-500'/> {" "}
                      <span className='text-justify font-[500] w-[90%]'>{
                              AboutUs.Contents.ContentOne.objects.subheading2
                          }</span> {" "}
                          {
                              AboutUs.Contents.ContentOne.objects.list2
                          }
                      </div>
                  </div>
                  
                  <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                      <div className='text-justify w-[90%]'>
                      <ArrowRightIcon className='text-red-500'/> {" "}
                      <span className='text-justify font-[500] w-[90%]'>{
                              AboutUs.Contents.ContentOne.objects.subheading3
                          }</span> {" "}
                          {
                              AboutUs.Contents.ContentOne.objects.list3
                          }
                      </div>
                  </div>
                  
                  <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                      <div className='text-justify w-[90%]'>
                      <ArrowRightIcon className='text-red-500'/> {" "}
                      <span className='text-justify font-[500] w-[90%]'>{
                              AboutUs.Contents.ContentOne.objects.subheading4
                          }</span> {" "}
                          {
                              AboutUs.Contents.ContentOne.objects.list4
                          }
                      </div>
                  </div> 
    
                  <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                      <div className='text-justify w-[90%]'>
                      <ArrowRightIcon className='text-red-500'/> {" "}
                      <span className='text-justify font-[500] w-[90%]'>{
                              AboutUs.Contents.ContentOne.objects.subheading5
                          }</span> {" "}
                          {
                              AboutUs.Contents.ContentOne.objects.list5
                          }
                      </div>
                  </div> 
    
                  <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                      <div className='text-justify w-[90%]'>
                      <ArrowRightIcon className='text-red-500'/> {" "}
                      <span className='text-justify font-[500] w-[90%]'>{
                              AboutUs.Contents.ContentOne.objects.subheading6
                          }</span> {" "}
                          {
                              AboutUs.Contents.ContentOne.objects.list6
                          }
                      </div>
                  </div>  
                  
                  <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                      <div className='text-justify w-[90%]'>
                      <ArrowRightIcon className='text-red-500'/> {" "}
                      <span className='text-justify font-[500] w-[90%]'>{
                              AboutUs.Contents.ContentOne.objects.subheading7
                          }</span> {" "}
                          {
                              AboutUs.Contents.ContentOne.objects.list7
                          }
                      </div>
                  </div> 
                  
                  <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                      <div className='text-justify w-[90%]'>
                      <ArrowRightIcon className='text-red-500'/> {" "}
                      <span className='text-justify font-[500] w-[90%]'>{
                              AboutUs.Contents.ContentOne.objects.subheading8
                          }</span> {" "}
                          {
                              AboutUs.Contents.ContentOne.objects.list8
                          }
                      </div>
                  </div>
    
    
              </motion.div>
    
              </div>
         <Footer/>
        </div>
      )
}

export default AboutUsPage