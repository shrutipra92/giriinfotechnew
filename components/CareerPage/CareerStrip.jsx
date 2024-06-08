import React from 'react'
import { motion } from 'framer-motion'
import careerdata from './Career.json'

const CareerStrip = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
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
          className='text-[22px] 700px:text-[26px] font-[700] leading-[30px] pt-[20px] text-white mb-[10px] bg-yellow-700 rounded-lg px-[50px] py-[10px] mt-5 1000px:h-[150px] h-[fit] border-2 w-[90%] 1000px:w-[80%] mx-auto'>
    
              {careerdata.Contents.ContentOne.objects.object3}
    
          </motion.div>
        </div>
      )
}

export default CareerStrip