import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LanIcon from '@mui/icons-material/Lan';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import Link from 'next/link';

const Cloud = () => {
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
                    Cloud
                </p>

                <div className='w-full flex justify-between text-[20px]'>

                    <dir className='flex-1 flex flex-col gap-[10px]'>

                        <Link href={'/Cloud/AWS'}>
                            <div className='group flex items-center gap-[16px]'>
                                <LanIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>AWS</span>
                            </div>
                        </Link>

                        <Link href={'/Cloud/Azure'}>
                            <div className='group flex items-center gap-[16px]'>
                                <MyLocationIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Azure</span>
                            </div>
                        </Link>

                        <Link href={'/Cloud/GCP'}>
                            <div className='group flex items-center gap-[16px]'>
                                <CloudSyncIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>GCP</span>
                            </div>
                        </Link>

                    </dir>

                </div>

            </div>

        </motion.div>
  )
}

export default Cloud