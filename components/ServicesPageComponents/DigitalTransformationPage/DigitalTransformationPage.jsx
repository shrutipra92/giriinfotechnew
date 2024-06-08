import React from 'react'
import { motion } from 'framer-motion'
import DigitalTransforrmationData from './DigitalTransformation.json'
import Footer from '@/components/Footer/Footer'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'

const DigitalTransformationPage = () => {
  return (
    <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />

            <div 
            className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>

                <img
                    src="https://s6.imgcdn.dev/2XHKL.jpg"
                    alt=""
                    className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                />

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
                    className='text-white font-[700] text-[32px] 700px:text-[42px] text-center w-[60%]'>
                    {DigitalTransforrmationData.Contents.heading.heading1}
                </motion.div>

            </div>

            <div className='w-full px-[10px] 1000px:px-[50px] py-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>

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
                    className='w-[96%] 700px:w-1/2 flex justify-end'>

                    <div className='text-[18px] leading-[20px] pt-[20px] w-full'>

                        {
                            DigitalTransforrmationData.Contents.ContentOne.description
                        }

                    </div>

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
                    className='w-[96%] 700px:w-1/2'>

                    <img
                        src={DigitalTransforrmationData.Contents.ContentOne.image}
                        alt=""
                        className='w-full object-cover rounded-[6px]'
                    />

                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center justify-evenly bg-gray-200 gap-[20px] flex-col 700px:flex-row'>

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
                    className='w-[96%] 700px:w-1/2 flex justify-end'>

                    <img
                        src={DigitalTransforrmationData.Contents.ContentTwo.image}
                        alt=""
                        className='w-full object-cover rounded-[6px]'
                    />

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
                    className='w-[96%] 700px:w-1/2'>

                    <div className='text-[18px] leading-[20px] pt-[20px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentTwo.description1
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentTwo.description2
                        }
                    </div>

                </motion.div>

            </div>

            <div className='w-full py-[50px] px-[20px] flex items-center justify-center gap-[20px] 1000px:justify-evenly flex-col 700px:flex-row'>

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
                    className='w-[96%] 700px:w-1/2'>

                    <img
                        src={DigitalTransforrmationData.Contents.ContentThree.image}
                        alt=""
                        className='w-full object-cover rounded-[6px]'
                    />

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
                    className='w-[96%] 700px:w-1/2'>

                    <div className='text-[26px] 1000px:text-[32px] font-[600] text-blue-700 leading-[34px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentThree.Title
                        }
                    </div>

                    <div className='text-[16px] 1000px:text-[18px] font-[600] leading-[20px] pt-[20px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentThree.description1
                        }
                    </div>
                    <div className='text-[16px] 1000px:text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentThree.description2
                        }
                    </div>
                    <div className='text-[16px] 1000px:text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentThree.description3
                        }
                    </div>

                </motion.div>

            </div>

            <div className='w-full bg-[#060606] mt-[80px] py-[80px] flex items-center justify-center gap-[20px] 1000px:justify-evenly flex-col 700px:flex-row'>

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
                    className='flex flex-col gap-[20px] ml-[20px] 1000px:ml-[100px] w-[96%] 700px:w-1/2'>

                    <p className='text-[18px] 900px:text-[22px] text-blue-400'>
                        {
                            DigitalTransforrmationData.Contents.ContentFive.Title
                        }
                    </p>

                    <p className='font-[600] text-white text-[16px] 900px:text-[20px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentFive.description
                        }
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
                    className='mr-[20px] w-[96%] 700px:w-1/2'>

                    <img 
                    src={DigitalTransforrmationData.Contents.ContentFive.image} 
                    alt="" 
                    className='w-full rounded-[6px] object-cover' />

                </motion.div>

            </div>

            <div className='w-full py-[50px] px-[20px] flex items-center justify-center 1000px:justify-evenly gap-[20px] flex-col 700px:flex-row'>

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
                    className='w-[96%] 700px:w-1/2'>

                    <img
                        src={DigitalTransforrmationData.Contents.ContentSix.image}
                        alt=""
                        className='w-full object-cover rounded-[6px]'
                    />

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
                    className='w-[96%] 700px:w-1/2'>

                    <div className='text-[32px] font-[600] text-blue-700 leading-[34px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentSix.Title
                        }
                    </div>

                    <div className='text-[18px] font-[600] leading-[20px] pt-[20px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentSix.description1
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentSix.description2
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            DigitalTransforrmationData.Contents.ContentSix.description3
                        }
                    </div>

                </motion.div>

            </div>

            <div className='w-full p-[40px] 700px:p-[120px] flex flex-col items-center justify-center gap-[20px]'>

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
                    className='text-[26px] font-[600] text-center'>
                    Experience Connective Automation
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
                    className='text-center text-[18px]'>
                    Accelerate project timelines, reduce risk, and increase efficiency with<br />
                    trusted automation.
                </motion.div>

                <Link href={'/ContactUs'}>
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
                        className='text-white font-[600] px-[10px] py-[12px] bg-primaryColor text-[22px] cursor-pointer'>
                        Request Demo
                    </motion.div>
                </Link>

            </div>

            <Footer />

        </div>
  )
}

export default DigitalTransformationPage