import React from 'react'
import { motion } from 'framer-motion'
import careerdata from './Career.json'

const WhybrizSolution = () => {
    return (
        <>
            <div className='w-full flex flex-col items-center justify-center py-[50px]'>
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
                    className='text-[40px] text-red-500 text-center font-[600] leading-[40px] w-[90%] 1000px:w-[660px]'>
                    {careerdata.Contents.ContentOne.subheadings.subheading1}
                </motion.div>
            </div>
            <div className='w-[90%] 1000px:w-[80%] mx-auto flex items-center justify-center gap-[20px] flex-col 700px:flex-row'>
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
                            {careerdata.Contents.heading.heading1}
                        </div>
                        <p>{careerdata.Contents.ContentOne.objects.object1}</p>
                        <p>{careerdata.Contents.ContentOne.objects.object2}</p>
                        <p className='text-red-500'>{careerdata.Contents.ContentOne.objects.object4}</p>

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
                    className='1000px:h-[100%] h-[300px] w-[100%] 700px:w-1/2 mb-[100px] mt-[100px] '>
                    <div className='text-[18px] leading-[20px]   '>

                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/career.jfif"
                            alt=""
                            className='w-[100%] object-cover rounded-[10px]'
                        />
                    </div>

                </motion.div>
            </div>

        </>

    )
}

export default WhybrizSolution