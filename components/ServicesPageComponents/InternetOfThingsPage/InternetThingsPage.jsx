import React, { useEffect, useState } from 'react'
import Internetofthings from './InternetOfThings.json'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer/Footer'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'

const InternetOfThingsPage = () => {

    const [expandState, setExpandState] = useState(0)

    return (
        <div>

            <Navbar />

            <WhatsAppIcon />

            <div 
            className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>

                <img
                    src="https://s6.imgcdn.dev/AuX9t.jpg"
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
                    className='text-white font-[700] text-[32px] 700px:text-[42px] text-center w-[60%]'>
                    {Internetofthings.PageHeading}
                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>

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

                    <div className='text-[20px] leading-[22px] pt-[20px] w-full'>
                        <div className='text-[22px] 700px:text-[26px] font-[700] leading-[30px] pt-[20px] text-primaryColor mb-[10px]'>
                            {
                                Internetofthings.Contents.ContentOne.heading
                            }
                        </div>

                            {
                                Internetofthings.Contents.ContentOne.description
                            }
                        
                    </div>

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
                        src={Internetofthings.Contents.ContentOne.image}
                        alt=""
                        className='w-full object-cover rounded-[6px]'
                    />

                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row bg-gray-200'>

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

                    <div className='text-[22px] 700px:text-[26px] font-[700] leading-[20px] pt-[20px] text-primaryColor'>
                        {
                            Internetofthings.Contents.ContentTwo.heading
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentTwo.description
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentTwo.seviceList.list1
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentTwo.seviceList.list2
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentTwo.seviceList.list3
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentTwo.seviceList.list4
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentTwo.seviceList.list5
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentTwo.seviceList.list6
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentTwo.seviceList.list7
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentTwo.lastDescription
                        }
                    </div>

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
                        src={Internetofthings.Contents.ContentTwo.image}
                        alt=""
                        className='w-full object-cover rounded-[6px]'
                    />

                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>

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
                        src={Internetofthings.Contents.ContentThree.image}
                        alt=""
                        className='w-full rounded-[6px] object-cover'
                    />

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

                    <div className='text-[22px] 700px:text-[26px] font-[700] leading-[20px] pt-[20px] text-primaryColor'>
                        {
                            Internetofthings.Contents.ContentThree.heading
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentThree.description
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(8)}}>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list1
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list1Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 8 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(9)}}>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list2
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list2Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 9 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(10)}}>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list3
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list3Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 10 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(11)}}>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list4
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list4Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 11 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(12)}}>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list5
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list5Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 12 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(13)}}>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list6
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentThree.seviceList.list6Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 13 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>

                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row bg-gray-200'>

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

                    <div className='text-[22px] 700px:text-[26px] font-[700] leading-[30px] pt-[20px] text-primaryColor'>
                        {
                            Internetofthings.Contents.ContentFour.heading
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            Internetofthings.Contents.ContentFour.description
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(1)}}>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list1
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list1Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 1 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(2)}}>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list2
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list2Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 2 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(3)}}>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list3
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list3Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 3 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(4)}}>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list4
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list4Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 4 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(5)}}>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list5
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list5Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 5 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(6)}}>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list6
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list6Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 6 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px] cursor-pointer' onClick={()=>{setExpandState(7)}}>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list7
                        }
                    </div>
                    <ul>
                        {
                            Internetofthings.Contents.ContentFour.seviceList.list7Item.map((list) => {
                                return (
                                    <li key={list} className={`text-[18px] font-[400] leading-[20px] ${ expandState === 7 ? 'h-fit opacity-1 pt-[20px]' : 'h-0 opacity-0 pt-[0px]' } transition-all duration-500`}>
                                        {list}
                                    </li>
                                )
                            })
                        }
                    </ul>

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
                        src={Internetofthings.Contents.ContentFour.image}
                        alt=""
                        className='w-full rounded-[6px] object-cover'
                    />

                </motion.div>

            </div>

            <div className='w-full bg-[#212224] py-[80px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>

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
                    className='w-[96%] 700px:w-1/2 flex flex-col gap-[20px] 1000px:ml-[100px] ml-[10px]'>

                    <p className='text-[22px] text-blue-400'>
                        {
                            Internetofthings.Contents.ContentFive.Title
                        }
                    </p>

                    <p className='font-[600] text-white text-[20px]'>
                        {
                            Internetofthings.Contents.ContentFive.description
                        }
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

                    <img src={Internetofthings.Contents.ContentFive.image} alt="" className='w-full rounded-[6px]' />

                </motion.div>

            </div>

            <Footer />

        </div>
    )
}

export default InternetOfThingsPage