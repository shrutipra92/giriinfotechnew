import React from 'react'
import { motion } from 'framer-motion'

const SuccessStory = () => {
  return (
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
                    Our Proven Success
                    </p>

                    <p className='font-[600] text-white text-[20px]'>
                    Don't just take our word for it. Explore our success stories with retail partners who have reaped the rewards of our IT solutions. From reducing operational costs to boosting sales and enhancing customer loyalty, our case studies speak volumes.
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

                    <img 
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/retail-revolution.jfif" 
                    alt="" 
                    className='w-full object-cover rounded-[6px]' />

                </motion.div>

            </div>
  )
}

export default SuccessStory