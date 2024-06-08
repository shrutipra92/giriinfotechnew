import React from 'react'
import { motion } from 'framer-motion'
import CorporatePhilosophydata from './CorporatePhilosophy.json'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Footer from '@/components/Footer/Footer'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const CorporatePhilosophyPage = () => {
    return (
        <div className='w-full'>
            <Navbar />
            <WhatsAppIcon />
            <div className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>
                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/58c5c775c9.jpeg"
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
                    className='text-yellow-500 font-[700] text-[32px] 700px:text-[42px] text-left w-[60%]'>
                    {CorporatePhilosophydata.Contents.heading.heading1}
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
                        CorporatePhilosophydata.Contents.ContentOne.Title
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
                        CorporatePhilosophydata.Contents.ContentOne.description
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
                    className='w-full  mt-[20px]'>
                    <div className='flex flex-col gap-[22px] font-[700] items-center justify-center mt-[20px]'>
                        <div className='text-justify w-[90%]'>
                            {
                                CorporatePhilosophydata.Contents.ContentOne.objects.subheading
                            }
                        </div>
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
                    className='w-full  mt-[20px]'>

                    <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                        <div className='text-justify w-[90%]'>
                            <ArrowRightIcon className='text-red-500' /> {" "}
                            {
                                CorporatePhilosophydata.Contents.ContentOne.objects.list1
                            }
                        </div>
                    </div>

                    <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                        <div className='text-justify w-[90%]'>
                            <ArrowRightIcon className='text-red-500' />
                            {
                                CorporatePhilosophydata.Contents.ContentOne.objects.list2
                            }
                        </div>
                    </div>

                    <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                        <div className='text-justify w-[90%]'>
                            <ArrowRightIcon className='text-red-500' /> {" "}
                            {
                                CorporatePhilosophydata.Contents.ContentOne.objects.list3
                            }
                        </div>
                    </div>

                    <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                        <div className='text-justify w-[90%]'>
                            <ArrowRightIcon className='text-red-500' /> {" "}
                            {
                                CorporatePhilosophydata.Contents.ContentOne.objects.list4
                            }
                        </div>
                    </div>

                    <div className='flex flex-col gap-[20px] items-center justify-center mt-[20px]'>
                        <div className='text-justify w-[90%]'>
                            <ArrowRightIcon className='text-red-500' /> {" "}
                            {
                                CorporatePhilosophydata.Contents.ContentOne.objects.list5
                            }
                        </div>
                    </div>

                </motion.div>

            </div>
            <Footer />
        </div>
    )
}

export default CorporatePhilosophyPage