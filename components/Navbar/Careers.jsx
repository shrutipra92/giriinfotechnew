import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion'

const Careers = () => {
    const [activeItem, setActiveItem] = useState('overview')

    const newsArray = [
        {
            id: 1,
            date: '17 Aug 2023',
            headline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, laborum!'
        },
        {
            id: 2,
            date: '17 Aug 2023',
            headline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, laborum!'
        },
        {
            id: 3,
            date: '17 Aug 2023',
            headline: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, laborum!'
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                // rotate: 360, 
                opacity: 1
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className='w-full flex items-center justify-evenly h-[500px]'>

            <div className='w-[380px] h-full justify-evenly flex flex-col gap-[20px]'>

                <div className={`w-full flex items-center justify-between px-[6px] py-[18px] ${activeItem === 'overview' ? 'bg-red-300 border-b-[2px] border-white font-[600]' : 'bg-transparent border-b-[1px] border-gray-200 font-[400]'} border-solid transition-all duration-500`}
                    onMouseEnter={() => { setActiveItem('overview') }}>

                    <span className='text-[18px] transition-all duration-500'>Overview</span> <ArrowForwardIosIcon />

                </div>

                <div className={`w-full flex items-center justify-between px-[6px] py-[18px] ${activeItem === 'About us' ? 'bg-red-300 border-b-[2px] border-white font-[600]' : 'bg-transparent border-b-[1px] border-gray-200 font-[400]'} border-solid transition-all duration-500`}
                    onMouseEnter={() => { setActiveItem('About us') }}>

                    <span className='text-[18px] transition-all duration-500'>About us</span> <ArrowForwardIosIcon />

                </div>

                <div className={`w-full flex items-center justify-between px-[6px] py-[18px] ${activeItem === 'Leadership' ? 'bg-red-300 border-b-[2px] border-white font-[600]' : 'bg-transparent border-b-[1px] border-gray-200 font-[400]'} border-solid transition-all duration-500`}
                    onMouseEnter={() => { setActiveItem('Leadership') }}>

                    <span className='text-[18px] transition-all duration-500'>Leadership</span> <ArrowForwardIosIcon />

                </div>

                <div className={`w-full flex items-center justify-between px-[6px] py-[18px] ${activeItem === 'In the news' ? 'bg-red-300 border-b-[2px] border-white font-[600]' : 'bg-transparent border-b-[1px] border-gray-200 font-[400]'} border-solid transition-all duration-500`}
                    onMouseEnter={() => { setActiveItem('In the news') }}>

                    <span className='text-[18px] transition-all duration-500'>In the news</span> <ArrowForwardIosIcon />

                </div>

            </div>

            <div>

                {
                    activeItem === 'overview' && <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            // rotate: 360, 
                            opacity: 1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        className='w-[700px] flex flex-col justify-between gap-[20px] text-[18px] font-[600]'>

                        <p className='text-[40px]'>
                            We’re in it for good, driving positive change for the benefit of all.
                        </p>

                        <p>
                            Our expert, committed team put our shared beliefs into action – every day. Together, we combine innovation and collective knowledge to create the extraordinary.
                        </p>

                        <button className='w-fit px-[40px] py-[15px] border-solid border-[1px] border-white rounded-full'>
                            Discover the difference
                        </button>

                    </motion.div>
                }
                {
                    activeItem === 'About us' && <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            // rotate: 360, 
                            opacity: 1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        className='w-[700px] flex justify-between gap-[30px] text-[18px] font-[600]'>

                        <div className='flex-1 flex flex-col gap-[18px]'>

                            <p className='hover:underline cursor-pointer'>E-commerce</p>

                            <p className='hover:underline cursor-pointer'>Travel & hospitality</p>

                            <p className='hover:underline cursor-pointer'>Technology</p>

                            <p className='hover:underline cursor-pointer'>Independent vendor</p>

                        </div>

                        <div className='flex-1 flex flex-col gap-[18px]'>

                            <p className='hover:underline cursor-pointer'>Logistics</p>

                            <p className='hover:underline cursor-pointer'>Manufacturing</p>

                            <p className='hover:underline cursor-pointer'>Banking</p>

                            <p className='hover:underline cursor-pointer'>Distribution and Transmission lines</p>

                        </div>

                    </motion.div>
                }
                {
                    activeItem === 'Leadership' && <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            // rotate: 360, 
                            opacity: 1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        className='w-[700px] flex justify-between gap-[30px] text-[18px] font-[600]'>

                        {/* <div className='flex-1 flex flex-col gap-[18px]'>

                            <p className='hover:underline cursor-pointer'>Banking</p>

                            <p className='hover:underline cursor-pointer'>Capital Markets</p>

                            <p className='hover:underline cursor-pointer'>Consumer goods and capitalisation</p>

                        </div>

                        <div className='flex-1 flex flex-col gap-[18px]'>

                            <p className='hover:underline cursor-pointer'>Education</p>

                            <p className='hover:underline cursor-pointer'>Energy, Resource and utilities</p>

                            <p className='hover:underline cursor-pointer'>Healthcare</p>

                            <p className='hover:underline cursor-pointer'>Hightech</p>

                        </div>

                        <div className='flex-1 flex flex-col gap-[18px]'>

                            <p className='hover:underline cursor-pointer'>Life sciences</p>

                            <p className='hover:underline cursor-pointer'>Manufacturing</p>

                            <p className='hover:underline cursor-pointer'>Public services</p>

                        </div> */}

                    </motion.div>
                }
                {
                    activeItem === 'In the news' && <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            // rotate: 360, 
                            opacity: 1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        className='w-[700px] flex flex-col justify-between gap-[20px] text-[18px] font-[600]'>

                        <p className='font-[400] text-[20px]'>
                            Recent new
                        </p>

                        {
                            newsArray.map((news)=>{
                                return(
                                    <div
                                    key={news.id}>

                                        <p className='font-[400] text-[16px]'>
                                            {news.date}
                                        </p>

                                        <p>
                                            {news.headline}
                                        </p>

                                    </div>
                                )
                            })
                        }

                        <div className='underline'>
                            View all
                        </div>

                    </motion.div>
                }

            </div>

        </motion.div>
    )
}

export default Careers