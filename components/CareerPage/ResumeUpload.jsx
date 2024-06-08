import React from 'react'
import { motion } from 'framer-motion'
import careerdata from './Career.json'

const ResumeUpload = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center my-[20px]'>

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
        className='text-[20px] leading-[26px] mt-[20px] w-[100%] 1000px:w-[full]'>
        <div className='px-[30px] w-[90%] 1000px:w-[80%] mx-auto rounded-md 1000px:px-[10px] flex items-center 1000px:justify-evenly justify-center gap-[10px] flex-col 700px:flex-row bg-primaryColor p-5 '>
          <div className='w-[96%] 700px:w-1/4 px-3'>
            <div className='flex flex-row justify-center text-center'>
              <input type="file" name="upload_resume" id="upload_resume" className='hidden' />
              <label htmlFor='upload_resume' className='w-fit px-[10px] py-[10px] bg-black text-white text-center flex items-center justify-center cursor-pointer rounded-lg'>Upload your resume</label>
            </div>

          </div>
          <div className='w-[96%] 700px:w-3/4 '>
            <div className='w-[96%] px-10 text-white'>
              <p className=' text-[22px]  font-[700] mb-1'>
                {careerdata.Contents.ContentOne.objects.object5}</p>
              <p className=' text-[22px]  font-[400] mb-1'>{careerdata.Contents.ContentOne.objects.object6}</p>
              {/* <br/> */}
              <p className=' text-[22px]  font-[400]'>{careerdata.Contents.ContentOne.objects.object7}</p>

            </div>
          </div>
        </div>


      </motion.div>

    </div>
  )
}

export default ResumeUpload