import Link from 'next/link'
import React, { useState } from 'react'

const SixthComponent = () => {
    const [hover, setHover] = useState(false)

    return (
        <div className='w-full bg-[#005f82] flex items-center justify-center pb-[50px] flex-col 500px:flex-row px-[10px] 500px:px-0'>

            <div className='500px:w-1/2 w-full mt-[50px] flex flex-col items-start 500px:items-end 900px:gap-[40px] gap-[16px]'>

                <p className='1000px:w-[60%] w-[90%] 900px:text-[40px] text-[28px] font-[600] text-white 900px:leading-[52px] leading-[34px]'>
                    Unlocking Efficiency and Innovation
                </p>

                <p className='1000px:w-[60%] w-[90%] 900px:text-[26px] text-[20px] font-[600] text-white'>
                    Infrastructure Cloud Integration for Modern Businesses
                </p>

                <p className='1000px:w-[60%] w-[90%] 900px:text-[18px] text-[16px] font-[600] text-white'>
                    In today's digital age, businesses are increasingly adopting cloud technologies to enhance agility, scalability, and cost-effectiveness. Infrastructure cloud integration is a strategic approach that enables organizations to seamlessly incorporate cloud resources into their existing IT infrastructure. This integration not only streamlines operations but also empowers businesses to harness the full potential of cloud computing
                </p>

            </div>

            <div className='500px:w-1/2 w-full 500px:mt-[100px] mt-[40px] ml-[10px] 500px:ml-0'>

                <p className='1000px:w-[60%] w-[90%] 900px:text-[26px] text-[20px] font-[600] text-white'>
                    Maximizing Efficiency and Scalability
                </p>

                <div className='text-white font-[600] 1000px:w-[60%] w-[90%] mt-[20px] flex flex-col gap-[10px] text-[14px] 900px:text-[16px]' >
                    <div className='flex items-center justify-center w-fit ml-[20px] gap-[10px]'>
                        <div className='w-[8px] h-[8px] bg-white rounded-full' />
                        <span>Hybrid Cloud Environments</span>
                    </div>
                    <div className='flex items-center justify-center w-fit ml-[20px] gap-[10px]'>
                        <div className='w-[8px] h-[8px] bg-white rounded-full' />
                        <span>Scalability and Resource Optimization</span>
                    </div>
                    <div className='flex items-center justify-center w-fit ml-[20px] gap-[10px]'>
                        <div className='w-[8px] h-[8px] bg-white rounded-full' />
                        <span>Data Backup and Disaster Recovery</span>
                    </div>
                    <div className='flex items-center justify-center w-fit ml-[20px] gap-[10px]'>
                        <div className='w-[8px] h-[8px] bg-white rounded-full' />
                        <span>Cost Savings</span>
                    </div>
                    <div className='flex items-center justify-center w-fit ml-[20px] gap-[10px]'>
                        <div className='w-[8px] h-[8px] bg-white rounded-full' />
                        <span>Improved Collaboration</span>
                    </div>
                    <div className='flex items-center justify-center w-fit ml-[20px] gap-[10px]'>
                        <div className='w-[8px] h-[8px] bg-white rounded-full' />
                        <span>Enhanced Security</span>
                    </div>
                    <div className='flex items-center justify-center w-fit ml-[20px] gap-[10px]'>
                        <div className='w-[8px] h-[8px] bg-white rounded-full' />
                        <span>API Integration</span>
                    </div>
                    <div className='flex items-center justify-center w-fit ml-[20px] gap-[10px]'>
                        <div className='w-[8px] h-[8px] bg-white rounded-full' />
                        <span>IoT and Edge Computing</span>
                    </div>
                    <div className='flex items-center justify-center w-fit ml-[20px] gap-[10px]'>
                        <div className='w-[8px] h-[8px] bg-white rounded-full' />
                        <span>Multi-Cloud Strategy</span>
                    </div>
                    <div className='flex items-center justify-center w-fit ml-[20px] gap-[10px]'>
                        <div className='w-[8px] h-[8px] bg-white rounded-full' />
                        <span>Compliance and Governance</span>
                    </div>
                </div>

                <Link href={'/cloud-infrastructure'} className='mt-[20px]'>
                    <button
                        className={`relative uppercase tracking-[0.25em] text-[16px] 1000px:text-lg w-[180px] 1000px:w-[260px] h-[60px] rounded-[5px] transition-all duration-300 cursor-pointer before:absolute before:right-0 before:top-0 before:bg-[#fb4b02] before:transition-all before:duration-300 before:shadow-bannerButton before:h-0 before:w-[2px] after:absolute after:right-0 after:top-0 after:bg-[#fb4b02] after:transition-all after:duration-300 after:shadow-bannerButton after:w-0 after:h-[2px] hover:before:h-full hover:after:w-full `}
                        onMouseEnter={() => { setHover(true) }}
                        onMouseLeave={() => { setHover(false) }}
                        style={{
                            boxShadow: 'inset 2px 2px 2px 0px rgba(255,255,255,.5),7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1)',
                            background: !hover ? 'linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%)' : 'white'
                        }}>

                        <div
                            className={`w-[180px] 1000px:w-[260px] h-[60px] relative before:absolute after:absolute before:left-0 after:left-0 before:bottom-0 after:bottom-0 before:bg-[#fb4b02] after:bg-[#fb4b02] before:transition-all after:transition-all before:duration-300 after:duration-300 before:shadow-bannerButton after:shadow-bannerButton before:w-[2px] before:h-0 after:h-[2px] after:w-0 hover:before:h-[60px] hover:after:w-[180px] hover:after:1000px:w-[260px] flex items-center justify-center text-white hover:text-[#fb4b02]`}>
                            Know More
                        </div>

                    </button>
                </Link>

            </div>

        </div>
    )
}

export default SixthComponent