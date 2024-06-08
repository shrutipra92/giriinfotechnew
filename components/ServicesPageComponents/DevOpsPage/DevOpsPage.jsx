import React from 'react'
import Devops from './DevOps.json'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer/Footer'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const DevOpsPage = () => {
  return (
    <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />

            <div 
            className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>

                <img
                    src="https://s6.imgcdn.dev/28wgS.jpg"
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
                    {Devops.PageHeading}
                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>

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

                    <div className='text-[18px] leading-[20px] pt-[20px] w-full'>

                        <div className='text-[22px] 700px:text-[26px] font-[700] leading-[30px] pt-[20px] text-primaryColor mb-[10px]'>
                            {
                                Devops.Contents.ContentOne.heading
                            }
                        </div>

                            {
                                Devops.Contents.ContentOne.description
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
                        src={Devops.Contents.ContentOne.image}
                        alt=""
                        className='w-full object-cover rounded-[6px]'
                    />

                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row bg-gray-200'>

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
                        src={Devops.Contents.ContentTwo.image}
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

                    <div className='text-[22px] 700px:text-[26px] font-[700] leading-[20px] pt-[20px] text-primaryColor'>
                        {
                            Devops.Contents.ContentTwo.heading
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentTwo.description
                        }
                    </div>

                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>

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

                    <div className='text-[22px] 700px:text-[26px] font-[700] leading-[20px] pt-[20px] text-primaryColor'>
                        {
                            Devops.Contents.ContentThree.heading
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentThree.description
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentThree.seviceList.list1
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentThree.seviceList.list2
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentThree.seviceList.list3
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentThree.seviceList.list4
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentThree.seviceList.list5
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentThree.seviceList.list6
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentThree.seviceList.list7
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
                        src={Devops.Contents.ContentThree.image}
                        alt=""
                        className='h-full object-cover rounded-[6px]'
                    />

                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row bg-gray-200'>

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
                        src={Devops.Contents.ContentFour.image}
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

                    <div className='text-[22px] 700px:text-[26px] font-[700] leading-[20px] pt-[20px] text-primaryColor'>
                        {
                            Devops.Contents.ContentFour.heading
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentFour.description
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentFour.seviceList.list1
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentFour.seviceList.list2
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentFour.seviceList.list3
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentFour.seviceList.list4
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Devops.Contents.ContentFour.seviceList.list5
                        }
                    </div>

                </motion.div>

            </div>

            <div className='w-full bg-[#131315] py-[80px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>

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
                    className='w-[96%] 700px:w-1/2 flex flex-col gap-[20px] 1000px:ml-[100px] ml-[10px]'>

                    <p className='text-[22px] text-blue-400'>
                        {
                            Devops.Contents.ContentFive.Title
                        }
                    </p>

                    <p className='font-[600] text-white text-[20px]'>
                        {
                            Devops.Contents.ContentFive.description
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
                    className='mr-[10px] w-[96%] 700px:w-1/2'>

                    <img 
                    src={Devops.Contents.ContentFive.image} 
                    alt="" 
                    className='w-full object-cover rounded-[6px]' />

                </motion.div>

            </div>

            <Footer />

        </div>
  )
}

export default DevOpsPage