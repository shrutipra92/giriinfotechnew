import React from 'react'
import { motion } from 'framer-motion'

const Ambition = ({ paragraph }) => {
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
        className='w-[90%] 1000px:w-[80%] mx-auto font-[600] text-[18px] 900px:text-[20px] leading-[30px] 900px:leading-[40px]'>

            Ambition: <span className='italic'>{paragraph}</span>

        </motion.div>

    </div>
  )
}

export default Ambition