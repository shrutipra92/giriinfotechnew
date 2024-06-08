import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LanIcon from '@mui/icons-material/Lan';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import MemoryIcon from '@mui/icons-material/Memory';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import VignetteIcon from '@mui/icons-material/Vignette';
import Link from 'next/link';

const WhoWeAre = () => {
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
            className='w-full flex items-center justify-evenly h-[350px]'>

            <div className='w-[80%] flex flex-col gap-[20px] h-full pt-[10px] '>

                <p className='font-[600] text-[26px]'>
                    Services
                </p>

                <div className='w-full flex justify-between text-[20px]'>

                    <dir className='flex-1 flex flex-col gap-[10px]'>

                        <Link href={'/Services/DigitalTransformation'}>
                            <div className='group flex items-center gap-[16px]'>
                                <LanIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Digital transformation</span>
                            </div>
                        </Link>

                        <Link href={'/Services/Mobility'}>
                            <div className='group flex items-center gap-[16px]'>
                                <MyLocationIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Mobility</span>
                            </div>
                        </Link>

                        <Link href={'/Services/Sap'}>
                            <div className='group flex items-center gap-[16px]'>
                                <CloudSyncIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>SAP</span>
                            </div>
                        </Link>

                        <Link href={'/Services/InternetOfThings'}>
                            <div className='group flex items-center gap-[16px]'>
                                <TapAndPlayIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Internet of things</span>
                            </div>
                        </Link>

                    </dir>

                    <dir className='flex-1 flex flex-col gap-[10px]'>

                        <Link href={'/Services/DevOps'}>
                            <div className='group flex items-center gap-[16px]'>
                                <SettingsSuggestIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>DevOps</span>
                            </div>
                        </Link>

                        <Link href={'/Services/Cloud_Infrastructure'}>
                            <div className='group flex items-center gap-[16px]'>
                                <CloudCircleIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Infrastructure & Cloud Services</span>
                            </div>
                        </Link>

                        <Link href={'/Services/Salesforce'}>
                            <div className='group flex items-center gap-[16px]'>
                                <Diversity3Icon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Salesforce</span>
                            </div>
                        </Link>

                        <Link href={'/Services/Argument_Reality_And_Virtual_Reality'}>
                            <div className='group flex items-center gap-[16px]'>
                                <Diversity3Icon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>AR/VR</span>
                            </div>
                        </Link>

                    </dir>

                    <dir className='flex-1 flex flex-col gap-[10px]'>

                        <div className='group flex items-center gap-[16px]'>
                            <VignetteIcon className='w-[20px] h-[20px] text-blue-300' />
                            <span className='group-hover:underline'>Oracle</span>
                        </div>

                        <Link href={'/Services/EmbeddedSystem'}>
                            <div className='group flex items-center gap-[16px]'>
                                <MemoryIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Embedded system</span>
                            </div>
                        </Link>

                        <Link href={'/Services/MachineLearningAndArtificialIntelligence'}>
                            <div className='group flex items-center gap-[16px]'>
                                <PsychologyIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>AI/Machine learning</span>
                            </div>
                        </Link>

                        <Link href={'/Services/Metaverse'}>
                            <div className='group flex items-center gap-[16px]'>
                                <PsychologyIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Metaverse</span>
                            </div>
                        </Link>

                    </dir>

                    {/* <dir className='flex-1 flex flex-col gap-[10px]'>

                        <div className='group flex items-center gap-[16px]'>
                            <img src={Ficon} alt="" className='w-[20px] h-[20px]' />
                            <span className='group-hover:underline'>Communications</span>
                        </div>

                        <div className='group flex items-center gap-[16px]'>
                            <img src={Ficon} alt="" className='w-[20px] h-[20px]' />
                            <span className='group-hover:underline'>Communications</span>
                        </div>

                        <div className='group flex items-center gap-[16px]'>
                            <img src={Ficon} alt="" className='w-[20px] h-[20px]' />
                            <span className='group-hover:underline'>Communications</span>
                        </div>

                        <div className='group flex items-center gap-[16px]'>
                            <img src={Ficon} alt="" className='w-[20px] h-[20px]' />
                            <span className='group-hover:underline'>Communications</span>
                        </div>

                        <div className='group flex items-center gap-[16px]'>
                            <img src={Ficon} alt="" className='w-[20px] h-[20px]' />
                            <span className='group-hover:underline'>Communications</span>
                        </div>

                    </dir> */}

                </div>

                {/* <div className='w-full h-[1px] bg-white' /> */}

                {/* <ConnectUsButton /> */}

            </div>

        </motion.div>
    )
}

export default WhoWeAre