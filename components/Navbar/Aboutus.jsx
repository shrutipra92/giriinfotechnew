import Link from 'next/link'
import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import InfoIcon from '@mui/icons-material/Info';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PolicyIcon from '@mui/icons-material/Policy';
import { motion } from 'framer-motion'

const Aboutus = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1
            }}
            transition={{
                type: "spring",
            }}
            className='w-full flex items-center justify-evenly h-[300px]'>

            <div className='w-[80%] flex flex-col gap-[20px] h-full pt-[10px] '>

                <p className='font-[600] text-[26px]'>
                    Company
                </p>

                <div className='w-full flex justify-between text-[20px]'>

                    <dir className='flex-1 flex flex-col gap-[10px]'>

                        <Link href={'/Company/AboutUs'}>
                            <div className='group flex items-center gap-[16px]'>
                                <InfoIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>About us</span>
                            </div>
                        </Link>

                        <Link href={'/Company/MissionAndVision'}>
                            <div className='group flex items-center gap-[16px]'>
                                <RocketLaunchIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Mission and Vision</span>
                            </div>
                        </Link>

                        <Link href={'/Company/CorporatePhilosophy'}>
                            <div className='group flex items-center gap-[16px]'>
                                <PolicyIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Corporate Philosophy</span>
                            </div>
                        </Link>

                        <Link href={'/Company/Quality'}>
                            <div className='group flex items-center gap-[16px]'>
                                <MilitaryTechIcon className='w-[20px] h-[20px]  text-blue-300' />
                                <span className='group-hover:underline'> Quality</span>
                            </div>
                        </Link>

                    </dir>

                    <dir className='flex-1 flex flex-col gap-[10px]'>

                        <Link href={'/Company/MeetTheTeam'}>
                            <div className='group flex items-center gap-[16px]'>
                                <Diversity3Icon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Meet The Team</span>
                            </div>
                        </Link>

                        <Link href={'/Company/Location'}>

                            <div className='group flex items-center gap-[16px]'>
                                <PlaceIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Location</span>
                            </div>
                        </Link>

                    </dir>

                </div>


            </div>

        </motion.div>
    )
}

export default Aboutus