import React from 'react'
import { motion } from 'framer-motion'
import YardIcon from '@mui/icons-material/Yard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DiamondIcon from '@mui/icons-material/Diamond';
import Link from 'next/link';

const Insights = () => {
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
            className='w-full flex items-center justify-evenly h-[400px]'>

            <div className='w-[80%] flex flex-col gap-[20px] h-full pt-[10px] '>

                <p className='font-[600] text-[26px]'>
                    Industries
                </p>

                <div className='w-full flex justify-between text-[20px]'>

                    <dir className='flex-1 flex flex-col gap-[10px]'>

                        <Link href={"/Industry/Agriculture"}>
                            <div className='group flex items-center gap-[16px]'>
                                <YardIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Agriculture</span>
                            </div>
                        </Link>

                        <Link href={'/Industry/Aviation'}>
                            <div className='group flex items-center gap-[16px]'>
                                <ConnectingAirportsIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Aviation</span>
                            </div>
                        </Link>

                        <Link href={'/Industry/Healthcare'}>
                            <div className='group flex items-center gap-[16px]'>
                                <LocalHospitalIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Health care</span>
                            </div>
                        </Link>

                        <Link href={"/Industry/EnergyAndUtilities"}>
                            <div className='group flex items-center gap-[16px]'>
                                <SolarPowerIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Energy and Utilities</span>
                            </div>
                        </Link>

                        <Link href={'/Industry/Telecom'}>
                            <div className='group flex items-center gap-[16px]'>
                                <DiamondIcon text-blue-300 className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Telecom</span>
                            </div>
                        </Link>


                    </dir>

                    <dir className='flex-1 flex flex-col gap-[10px]'>

                        <Link href={'/Industry/Ecommerce'}>
                            <div className='group flex items-center gap-[16px]'>
                                <AccountBalanceIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>E-commerce</span>
                            </div>
                        </Link>

                        <Link href={"/Industry/TravelAndHospitality"}>
                            <div className='group flex items-center gap-[16px]'>
                                <EmojiTransportationIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Travel & hospitality</span>
                            </div>
                        </Link>

                        <Link href={'/Industry/Technology'}>
                            <div className='group flex items-center gap-[16px]'>
                                <OnDeviceTrainingIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Technology</span>
                            </div>
                        </Link>

                        <Link href={'/Industry/IndependentVendor'}>
                            <div className='group flex items-center gap-[16px]'>
                                <AccessibilityNewIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Independent vendor</span>
                            </div>
                        </Link>

                        <Link href={'/Industry/Insurance'}>
                            <div className='group flex items-center gap-[16px]'>
                                <DiamondIcon text-blue-300 className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Insurance</span>
                            </div>
                        </Link>

                    </dir>

                    <dir className='flex-1 flex flex-col gap-[10px]'>

                        <Link href={'/Industry/Logistics'}>
                            <div className='group flex items-center gap-[16px]'>
                                <LocalShippingIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Logistics</span>
                            </div>
                        </Link>

                        <Link href={"/Industry/Manufacturing"}>
                            <div className='group flex items-center gap-[16px]'>
                                <PrecisionManufacturingIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Manufacturing</span>
                            </div>
                        </Link>

                        <Link href={'/Industry/Banking'}>
                            <div className='group flex items-center gap-[16px]'>
                                <CardTravelIcon className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Banking</span>
                            </div>
                        </Link>

                        <Link href={"/Industry/PublicServices"}>
                            <div className='group flex items-center gap-[16px]'>
                                <VolunteerActivismIcon text-blue-300 className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Public Services</span>
                            </div>
                        </Link>

                        <Link href={'/Industry/Retail'}>
                            <div className='group flex items-center gap-[16px]'>
                                <DiamondIcon text-blue-300 className='w-[20px] h-[20px] text-blue-300' />
                                <span className='group-hover:underline'>Retail</span>
                            </div>
                        </Link>



                    </dir>

                </div>

                {/* <div className='w-full h-[1px] bg-white' /> */}

                {/* <ConnectUsButton /> */}

            </div>

        </motion.div>
    )
}

export default Insights