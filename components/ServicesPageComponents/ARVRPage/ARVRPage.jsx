import React from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer/Footer'
import FourthComponent from './FourthComponent'
import ThisdComponent from './ThisdComponent'
import SecondComponent from './SecondComponent'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const ARVRPage = () => {
  return (
    <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />

            <div 
            className='w-full h-[95vh] 1000px:h-[90vh] relative flex items-end pb-[20px] 1000px:pb-0 1000px:items-center overflow-hidden bg-black'>

                <video autoPlay={true} loop={true} muted={true} className='absolute top-[120px] 1000px:top-1/2 1000px:-translate-y-1/2 left-1/2 -translate-x-1/2 w-[95vw] 1000px:w-full rounded-[20px] z-[1]'>
                    <source src={"https://websiteimagessb.s3.us-west-2.amazonaws.com/video/ar-vr-vid.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <motion.div
                    className='ml-[20px] 600px:ml-[60px] 1000px:ml-[160px] flex flex-col gap-[10px] z-10'
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 1
                    }}>

                    <p className='text-white font-[700] text-[26px] 700px:text-[42px] leading-[28px] 700px:leading-[44px]'>
                        AR/VR: Bridging the Real and <br />Virtual
                    </p>

                    <p className='text-white text-[20px] w-full 700px:w-[520px] leading-[24px]'>
                        Augmented Reality (AR) and Virtual Reality (VR) technologies have been gaining significant traction in various industries, including gaming, healthcare, education, real estate, Aviation and more. Giri Info Tech is specialising in AR/VR applications development and services.
                    </p>

                    <button
                        className='text-white font-[600] px-[30px] py-[10px] w-fit rounded-full'
                        style={{
                            backgroundImage: 'linear-gradient(90deg, rgba(236,27,36,1) 0%, rgba(253,117,123,1) 100%)'
                        }}>
                        LEARN MORE
                    </button>

                </motion.div>

            </div>

            <SecondComponent />

            <ThisdComponent />

            <FourthComponent />

            <Footer />

        </div>
  )
}

export default ARVRPage