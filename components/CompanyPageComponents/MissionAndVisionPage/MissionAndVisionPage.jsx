import React from 'react'
import { motion } from 'framer-motion'
import Mission_and_Vision from './MissionAndVision.json'
import Footer from '@/components/Footer/Footer'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const MissionAndVisionPage = () => {
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
                        className='text-white font-[700] text-[32px] 10px:text-[42px] text-left w-[100%] '>
                        {Mission_and_Vision.Contents.heading.heading1}
                    </motion.div>
              </div>
              <div className='w-full bg-[#ffff] py-[80px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>
    
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        x:0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='w-[96%] 700px:w-1/2 flex flex-col gap-[20px] 1000px:ml-[100px] ml-[10px]'>
    
                    <p className='text-[40px] font-[700] text-red-500'>
                        OUR VISION
                    </p>
    
                    <p className='font-[600] text-black text-[20px] mr-[10px]'>
                        To build upon a reputation of being one of the most innovative and world class IT Solution and Service provider, we believe in doing our work in the most efficient way with robust and structured methodology, with gradual evolution from hard-work to smart- work culture, at onsite/ offsite.
                    </p>
    
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
                    className='mr-[10px] w-[96%] 700px:w-1/2'>
    
                    <img src="https://static.wixstatic.com/media/508759_b8d332384b704ee19eddf0bc00d3b8aa~mv2.jpg/v1/fit/w_660%2Ch_434%2Cal_c%2Cq_80,enc_auto/file.jpg" alt="" className='h-[300px] 1000px:h-[400px]' />
    
                </motion.div>
    
                </div>
                <div className='w-full bg-[#ffff] py-[80px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>
    
                  <motion.div
                      initial={{
                          x: 100,
                          opacity: 0
                      }}
                      whileInView={{
                          x: 0,
                          opacity: 1
                      }}
                      transition={{
                          duration: 1
                      }}
                      className='w-[96%] 700px:w-1/2 flex flex-col gap-[20px] 1000px:ml-[100px] ml-[10px]'>
    
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsGjcv7283x1MTmKNpJcK5NWfCUOmWjHqsx3qVFnu_y6vA7ZBs-wej6kn_XsJ29w5wtI&usqp=CAU" alt="" className='h-[300px] 1000px:h-[400px]' />
                     
    
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
                      className='mr-[10px] w-[96%] 700px:w-1/2'>
                         <p className='text-[40px] font-[700] text-red-500'>
                         OUR MISSION
                      </p>
    
                      <p className='font-[600] text-black text-[20px]'>
                          Boost the competitiveness and sustainability of organizations through innovative software solutions for excellence and enterprise compliance.
                      </p>
    
    
                  </motion.div>
    
                  </div>
        <Footer/>
       </div>
      )
}

export default MissionAndVisionPage