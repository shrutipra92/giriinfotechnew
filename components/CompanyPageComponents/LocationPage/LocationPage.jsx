import React from 'react'
import location from './Location.json'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer/Footer'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const LocationPage = () => {
    return (
        <div className='w-full'>
            <Navbar />
            <WhatsAppIcon />
            <div className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>
                <img
                    src="https://s6.imgcdn.dev/2XHKL.jpg"
                    alt=""
                    className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                />

                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-white font-[700] text-[32px] 700px:text-[42px] text-left w-[90%]'>
                    {location.Contents.heading.heading1}
                </motion.div>
            </div>

            <div className='w-full bg-[#ffff] py-[80px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>

                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='w-[96%] 700px:w-1/2 flex flex-col gap-[5px] 1000px:ml-[100px] ml-[10px]'>

                    <p className='text-[22px] font-[600] text-red-500'>
                        Address:
                    </p>
                    <p className='text-black text-[16px] ml-[10px]'>
                        Giri Info Tech Pvt Ltd<br /> H - 86, Sector 63, Noida, UP<br /> India-201301
                    </p>

                    <p className='text-[22px] font-[600] text-red-500'>
                        Phone:
                    </p>
                    <p className='text-black text-[16px] ml-[10px]'>
                        (+91) 9811736844
                    </p>

                    <p className='text-[22px] font-[600] text-red-500'>
                        Email:
                    </p>
                    <p className='text-black text-[16px] ml-[10px]'>
                        info@solutionbriz.com
                    </p>

                    <p className='text-[22px] font-[600] text-red-500'>
                        Web:
                    </p>
                    <p className='text-black text-[16px] mr-[10px]'>
                        https://www.solutionbriz.com
                    </p>

                    <p className='text-[22px] font-[600] text-red-500'>
                        Open
                    </p>
                    <p className='text-black text-[16px] mr-[10px]'>
                        Monday - Friday 09:30 - 18:30
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
                    className='mr-[10px] w-[96%] 700px:w-1/2'>


                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56042.02472448257!2d77.26531815103166!3d28.61097832516111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4ffd9b979eb%3A0x1925cda1418b09ad!2sSector%2010%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1694278836015!5m2!1sen!2sin" width="95%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>

                </motion.div>

            </div>
            <Footer />
        </div>
    )
}

export default LocationPage