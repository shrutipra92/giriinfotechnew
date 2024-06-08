import React from 'react'
import { motion } from 'framer-motion'


const Solutions = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center pb-[80px] bg-gray-100'>
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
                        className='text-[22px] font-[800] flex leading-[26px] items-center justify-center text-center  w-[90%] 1000px:w-[80%] px-[10px] pt-[50px] '>
                        Solutions
                    </motion.div>


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
                    className='grid grid-cols-1 700px:grid-cols-2 900px:grid-cols-3 1000px:grid-cols-3 w-[90%] 1000px:w-[80%] gap-8 mt-[26px] pb-[50px]'>

                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] w-full '>
                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/bigdata.webp"
                            alt=""
                            className='w-[100%] h-[200px] object-cover rounded-t-lg' />

                        <div className='font-[600] text-[20px] text-black'>
                        Big Data Ecosystem
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] w-full '>
                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/cloudcompute.webp"
                            alt=""
                            className='w-[100%] h-[200px] object-cover rounded-t-lg' />

                        <div className='font-[600] text-[20px] text-black'>
                        Cloud
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] w-full '>
                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/nosql.webp"
                            alt=""
                            className='w-[100%] h-[200px] object-cover rounded-t-lg' />

                        <div className='font-[600] text-[20px] text-black'>
                        NoSQL Databases
                        </div>
                    </div>

                </motion.div>

                    </div>
  )
}

export default Solutions
