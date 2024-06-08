import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import EmbeddedSystemData from './EmbeddedSystem.json'
import Footer from '@/components/Footer/Footer'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EmbeddedSystemPage = () => {

    const [expandState, setExpandState] = useState(0)

    return (
        <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />

            <div
                className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>

                <img
                    src="https://s6.imgcdn.dev/A4WVS.jpg"
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
                    {EmbeddedSystemData.PageHeading}
                </motion.div>

            </div>

            <div
                className='w-full p-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>

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
                                EmbeddedSystemData.ContentOne.heading
                            }
                        </div>

                        {
                            EmbeddedSystemData.ContentOne.description
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
                        src={EmbeddedSystemData.ContentOne.image}
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
                        src={EmbeddedSystemData.ContentTwo.image}
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

                    <div className='text-[18px] leading-[20px] pt-[20px] w-full'>

                        {
                            EmbeddedSystemData.ContentTwo.description
                        }

                    </div>

                </motion.div>

            </div>

            <div className='w-full p-[50px]'>

                {/* <motion.div
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
                    className='text-[22px] 700px:text-[32px] font-[500] mb-[20px]'>

                    {EmbeddedSystemData.ContentThree.tag}

                </motion.div> */}

                <div className='flex items-center justify-center gap-[20px] flex-col 1000px:flex-row'>

                    <div className='w-full 1000px:w-[50%] flex items-center justify-center'>

                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/menufacture.jfif"
                            alt=""
                            className='w-full 1000px:w-[90%] rounded-[6px]' />

                    </div>

                    <div className='w-full 1000px:w-[50%]'>

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
                    className='text-[22px] 700px:text-[32px] font-[500] mb-[20px]'>

                    {EmbeddedSystemData.ContentThree.tag}

                </motion.div>

                        {
                            EmbeddedSystemData.ContentThree.heading.map((heading, index) => {
                                return (
                                    <div
                                        key={index}>

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
                                            className='text-[18px] 700px:text-[26px] font-[500] mb-[10px] w-full py-[8px] bg-gray-200 px-[10px] flex items-center justify-between cursor-pointer'
                                            style={{
                                                borderRadius: '10px 10px 0px 0px'
                                            }}
                                            onClick={() => { setExpandState(heading) }}>

                                            <span>
                                                {heading}
                                            </span>
                                            <ExpandMoreIcon className={`${expandState === heading && 'rotate-180'} transition-all duration-500`} />

                                        </motion.div>

                                        <motion.div
                                            className={`text-[16px] 700px:text-[20px] font-[500] mb-[10px] w-full py-[8px] px-[10px] flex items-center justify-between cursor-pointer ${expandState === heading ? 'h-[100px] opacity-1' : 'h-0 opacity-0'} transition-all duration-500`}>

                                            {EmbeddedSystemData.ContentThree.paragraphs[index]}

                                        </motion.div>

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

            <div className='w-full p-[50px]'>

                {/* <motion.div
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
                    className='text-[22px] 700px:text-[32px] font-[500] mb-[20px]'>

                    {EmbeddedSystemData.ContentFour.tag}

                </motion.div> */}

                <div className='flex items-center justify-center gap-[20px] flex-col 1000px:flex-row'>

                    <div className='w-full 1000px:w-[50%] flex items-center justify-center'>

                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/firmware.jfif"
                            alt=""
                            className='w-full 1000px:w-[90%] rounded-[6px]' />

                    </div>

                    <div className='w-full 1000px:w-[50%]'>

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
                    className='text-[22px] 700px:text-[32px] font-[500] mb-[20px]'>

                    {EmbeddedSystemData.ContentFour.tag}

                </motion.div>

                        {
                            EmbeddedSystemData.ContentFour.heading.map((heading, index) => {
                                return (
                                    <div
                                        key={index}>

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
                                            className='text-[18px] 700px:text-[26px] font-[500] mb-[10px] w-full py-[8px] bg-gray-200 px-[10px] flex items-center justify-between cursor-pointer'
                                            style={{
                                                borderRadius: '10px 10px 0px 0px'
                                            }}
                                            onClick={() => { setExpandState(heading) }}>

                                            <span>
                                                {heading}
                                            </span>
                                            <ExpandMoreIcon className={`${expandState === heading && 'rotate-180'} transition-all duration-500`} />

                                        </motion.div>

                                        <motion.div
                                            className={`text-[16px] 700px:text-[20px] font-[500] mb-[10px] w-full py-[8px] px-[10px] flex items-center flex-col justify-between cursor-pointer ${expandState === heading ? 'h-fit opacity-1' : 'h-0 opacity-0'} transition-all duration-500`}>

                                            <p>
                                                {EmbeddedSystemData.ContentFour.paragraphs[index].tagOne}
                                            </p>
                                            <p>
                                                {EmbeddedSystemData.ContentFour.paragraphs[index].tagTwo}
                                            </p>

                                        </motion.div>

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>



            </div>

            <div className='w-full bg-[#131315] py-[80px] flex items-center justify-center 700px:justify-evenly gap-[20px] flex-col 700px:flex-row'>

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
                    className='w-[96%] 700px:w-1/2 flex flex-col gap-[20px] ml-[10px] 1000px:ml-[100px]'>

                    <p className='text-[22px] text-blue-400'>
                        {
                            EmbeddedSystemData.ContentFive.Title
                        }
                    </p>

                    <p className='font-[600] text-white text-[20px]'>
                        {
                            EmbeddedSystemData.ContentFive.description
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
                    className='w-[96%] 700px:w-1/2'>

                    <img src={EmbeddedSystemData.ContentFive.image} alt="" className='w-full object-cover rounded-[6px]' />

                </motion.div>

            </div>

            <Footer />

        </div>
    )
}

export default EmbeddedSystemPage