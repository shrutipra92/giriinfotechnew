import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Solutions from './Solutions'
import OurOffering from './OurOffering'
import LastComponent from '../AgriculturePage/LastComponent'
import Footer from '@/components/Footer/Footer'

const TecnologyPage = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <WhatsAppIcon />
      <div className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>

        <img
          src="https://s6.imgcdn.dev/28wgS.jpg"
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
          className='text-white font-[700] text-[32px] 700px:text-[42px] w-[90%] 1000px:w-[80%]'>
          Technology
        </motion.div>
      </div>

      <div className='w-full flex flex-col items-center justify-center py-[40px] '>

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
          className='text-[22px] flex leading-[26px] w-[90%] 1000px:w-[80%] pt-[10px] '>
          Giri Info Tech empowers businesses to extract actionable insights for strategic decision-making that fuels rapid growth. Our comprehensive suite of services encompasses consulting, seamless implementation, continuous maintenance, and expertly managed solutions.<br />We empower our clients to advance along their Big Data & Analytics journey, enabling them to make well-informed decisions by harnessing a diverse array of cutting-edge tools and technologies.


        </motion.div>

      </div>



      <div className='w-full'>

        <Solutions />
        <OurOffering />
        
      </div>

      <LastComponent />

      <Footer />
    </div>
  )
}

export default TecnologyPage