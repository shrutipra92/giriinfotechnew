import React from 'react'
import { motion } from 'framer-motion'

const Relevance = ({ relevances }) => {
  return (
    <div className='w-full py-[30px]'>

            <motion.div
                initial={{
                    x: -100,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1
                }}
                className='w-[90%] 1000px:w-[80%] mx-auto'>

                <div className='font-[600] text-[20px] 900px:text-[22px] leading-[40px]'>
                    Relevances:
                </div>

                <div className='mt-[20px] flex flex-col ml-[20px] gap-[10px]'>

                    {
                        relevances.map((impact)=>{
                            return (
                                <div className='flex items-center gap-[16px] font-[500] text-[18px] 900px:text-[20px] leading-[24px] 900px:leading-[30px]' key={impact}>

                                    {/* <div className='w-[16px] h-[8px] bg-primaryColor rounded-full'/> */}

                                    <div>{impact}</div>

                                </div>
                            )
                        })
                    }

                </div>

            </motion.div>

        </div>
  )
}

export default Relevance