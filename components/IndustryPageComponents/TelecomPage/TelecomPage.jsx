import React from 'react'
import { motion } from 'framer-motion'
import telecomdata from './Telecom.json'
import Footer from '@/components/Footer/Footer'
import LastComponent from '../AgriculturePage/LastComponent'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const TelecomPage = () => {
  return (
    <div className='w-full text-[20px]'>
      <Navbar />
      <WhatsAppIcon />
      <div className='w-full h-[70vh] relative flex items-center justify-center flex-col gap-[12px]'>
        <img
          src={"https://websiteimagessb.s3.us-west-2.amazonaws.com/tele.webp"}
          alt=""
          className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        />
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
          className='text-white font-[700] text-[32px] 700px:text-[42px] text-left w-[90%] 1000px:w-[80%]'>
          {telecomdata.PageHeading}
        </motion.div>
      </div>
      <div className='w-[90%] 1000px:w-[80%] mx-auto flex flex-col items-center justify-center pt-[30px]'>
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
          className='text-[22px] 700px:text-[32px] font-[600] text-red-700'>
          {telecomdata.Contents.heading.heading1}

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
          className='mt-[10px] px-[10px]'>
          <p>{telecomdata.Contents.ContentOne.description}</p>
          <p></p>
          <p></p>
          <p></p>
        </motion.div>

      </div>

      <div className='w-[90%] 1000px:w-[80%] mx-auto flex flex-col items-center justify-center pt-[30px] '>
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
          className='text-[32px] font-[600] text-black'>
          Solutions
        </motion.div>
        </div>
      <div className='grid grid-cols-1 700px:grid-cols-2 900px:grid-cols-3  justify-evenly 1000px:grid-cols-3 w-100% gap-8 mt-[26px] pb-[50px] px-[30px] w-[90%] 1000px:w-[80%] mx-auto'>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading1}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object1}</p>
        </div>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading2}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object2}</p>
        </div>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading3}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object3}</p>
        </div>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading4}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object4}</p>
        </div>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading5}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object5}</p>
        </div>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading6}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object6}</p>
        </div>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading7}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object7}</p>
        </div>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading8}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object8}</p>
        </div>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading9}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object9}</p>
        </div>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading10}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object10}</p>
        </div>
        <div className='w-full text-left '>
          <p className='font-[600]'>{telecomdata.Contents.ContentOne.subheadings.subheading11}</p>
          <p>{telecomdata.Contents.ContentOne.objects.object11}</p>
        </div>
      </div>

<LastComponent />

      <Footer />
    </div>
  )
}

export default TelecomPage