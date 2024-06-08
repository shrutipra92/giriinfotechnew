import React from 'react'
import { motion } from 'framer-motion'


const OurOffering = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center pb-[80px] bg-orange-100'>
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
                        Our Offering
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
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/oracle.webp"
                            alt=""
                            className='w-[100%] h-[200px] rounded-t-lg object-cover' />

                        <div className='font-[600] text-[20px] text-center text-black'>
                        Oracle Services
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px]  '>
                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/trouble.webp"
                            alt=""
                            className='w-[100%] h-[200px] rounded-t-lg object-cover' />

                        <div className='font-[600] text-[20px] text-center text-black'>
                        Troubleshooting Support
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px]  '>
                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/iotttt.webp"
                            alt=""
                            className='w-[100%] h-[200px] rounded-t-lg object-cover' />

                        <div className='font-[600] text-[20px] text-center text-black'>
                        Internet of Things (IoT)
                        </div>
                    </div>
                 
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px]  '>
                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/sapsupport.webp"
                            alt=""
                            className='w-[100%] h-[200px] rounded-t-lg object-cover' />

                        <div className='font-[600] text-[20px] text-center text-black'>
                        SAP Support and Maintenance Services
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center rounded-lg border-solid  bg-white pb-[10px]  '>
                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/itinfra.webp"
                            alt=""
                            className='w-[100%] h-[200px] rounded-t-lg object-cover' />

                        <div className='font-[600] text-[20px] text-center text-black'>
                        IT Infrastructure Services
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px]  '>
                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/product_manage.webp"
                            alt=""
                            className='w-[100%] h-[200px] rounded-t-lg object-cover' />

                        <div className='font-[600] text-center text-[20px] text-black'>
                        Extensive Product Management Services for Tech Companies
                        </div>
                    </div>


                </motion.div>

                    </div>
  )
}

export default OurOffering
