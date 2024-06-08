import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import { footerHeading } from './FooterData';
import { LinkedIn } from '@mui/icons-material';
import Link from 'next/link';

const Footer = () => {

    return (
        <footer className='w-full text-white'>

            <div className='w-full 1000px:justify-around pt-[20px] bg-[#005482] px-[10px] gap-[5px] 900px:gap-0 hidden 500px:flex'>

                <div className='flex flex-col gap-[10px] flex-1 text-[12px] 900px:text-[18px]'>

                    <p className='900px:text-[20px] text-[14px] font-[600] text-gray-400 cursor-pointer'>Resources</p>

                    <p className='text-[16px] font-[400] hover:underline'>Careers</p>
                    <p className='text-[16px] font-[400] hover:underline'>Developers</p>
                    <p className='text-[16px] font-[400] hover:underline'>Investors</p>
                    <p className='text-[16px] font-[400] hover:underline'>Partners</p>
                    <p className='text-[16px] font-[400] hover:underline'>Researchers</p>
                    <p className='text-[16px] font-[400] hover:underline'>Students and Educators</p>

                </div>

                <div className='flex flex-col gap-[10px] flex-1 text-[12px] 900px:text-[18px]'>

                    <p className='900px:text-[20px] text-[16px] font-[600] text-gray-400 cursor-pointer'>Why Giri Info Tech?</p>

                    <p className='text-[16px] font-[400] hover:underline'>Analyst Reports</p>
                    <p className='text-[16px] font-[400] hover:underline'>Best cloud-based ERP</p>
                    <p className='text-[16px] font-[400] hover:underline'>Cloud economics</p>
                    <p className='text-[16px] font-[400] hover:underline'>Corporate Responsibility</p>
                    <p className='text-[16px] font-[400] hover:underline'>Diversity and Inclusion</p>
                    <p className='text-[16px] font-[400] hover:underline'>Security Practices</p>

                </div>

                <div className='flex flex-col gap-[10px] flex-1 text-[12px] 900px:text-[18px]'>

                    <p className='900px:text-[20px] text-[16px] font-[600] text-gray-400 cursor-pointer'>Industries</p>

                    <Link href={'/Industry/Ecommerce'}>
                        <p className='text-[16px] font-[400] hover:underline'>E-commerce</p>
                    </Link>
                    <Link href={'/Industry/Aviation'}>
                        <p className='text-[16px] font-[400] hover:underline'>Aviation</p>
                    </Link>
                    <Link href={'/Industry/Telecom'}>
                        <p className='text-[16px] font-[400] hover:underline'>Telecom</p>
                    </Link>
                    <Link href={'/Industry/Technology'}>
                        <p className='text-[16px] font-[400] hover:underline'>Technology</p>
                    </Link>
                    <p className='text-[16px] font-[400] hover:underline'>Logistics</p>
                    <p className='text-[16px] font-[400] hover:underline'>Manufacturing</p>

                </div>

                <div className='flex flex-col gap-[10px] flex-1 text-[12px] 900px:text-[18px]'>

                    <p className='900px:text-[20px] text-[16px] font-[600] text-gray-400 cursor-pointer'>Services</p>

                    <Link href={'/Services/DigitalTransformation'}>
                        <p className='text-[16px] font-[400] hover:underline'>Digital Transformation</p>
                    </Link>
                    <Link href={'/Services/Mobility'}>
                        <p className='text-[16px] font-[400] hover:underline'>Mobility</p>
                    </Link>
                    <Link href={'/Services/InternetOfThings'}>
                        <p className='text-[16px] font-[400] hover:underline'>Internet of things</p>
                    </Link>
                    <Link href={'/Services/DevOps'}>
                        <p className='text-[16px] font-[400] hover:underline'>Dev Ops</p>
                    </Link>
                    <Link href={'/Services/Salesforce'}>
                        <p className='text-[16px] font-[400] hover:underline'>Salesforce</p>
                    </Link>
                    <Link href={'/Services/Cloud_Infrastructure'}>
                        <p className='text-[16px] font-[400] hover:underline'>Infrastructure & Cloud Services</p>
                    </Link>

                </div>

                <div className='flex flex-col gap-[10px] flex-1 text-[12px] 900px:text-[18px]'>

                    <p className='900px:text-[20px] text-[16px] font-[600] text-gray-400 cursor-pointer'>Contact us</p>

                    <p className='text-[16px] font-[400] hover:underline'>+91 9811736844</p>
                    <p className='text-[16px] font-[400] hover:underline'>Giri Info Tech Pvt Ltd</p>
                    <p className='text-[16px] font-[400] hover:underline'>H-86, Sector 63, Noida, UP, India, 201301</p>
                    <p className='text-[16px] font-[400] hover:underline'>How can we help?</p>

                </div>

            </div>

            <div className='w-full flex 500px:hidded 500px:h-0 bg-[#005482] px-[10px] py-[20px] h-[300px]'>

                <div className='flex-1 flex flex-col justify-evenly'>

                    {
                        footerHeading.map((heading) => {
                            return (
                                <div
                                    key={heading.id}
                                    className=''>

                                    <p className='font-[500] text-[16px] 500px:opacity-0 opacity-1'>
                                        {heading.heading}
                                    </p>

                                </div>
                            )
                        })
                    }

                </div>

                <div className='flex-1 flex flex-col justify-evenly'>

                </div>

            </div>

            <div className='w-full h-[100px] bg-black flex items-center justify-center 1000px:gap-[80px] gap-[30px]'>

                <div className='1000px:font-[700] font-[600] 1000px:text-[26px] text-[20px] cursor-pointer hidden 500px:block'>Giri Info Tech Pvt. Ltd.</div>

                <div className='flex items-center justify-center 1000px:gap-[50px] gap-[20px]'>

                    <a
                        href="https://www.facebook.com/solutionbriz?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FacebookIcon className='cursor-pointer' />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/solution-briz-technologies/?originalSubdomain=in"
                        target="_blank"
                        rel="noopener noreferrer">
                        <LinkedIn className='cursor-pointer' />
                    </a>

                </div>

                <div className='flex items-center justify-center 1000px:gap-[50px] gap-[20px]'>

                    <p className='text-[14px] 500px:text-[16px]'>
                        Privacy and policy
                    </p>
                    <Link href={'/ContactUs'}>
                        <p className='text-[14px] 500px:text-[16px] hidden 700px:block'>
                            Contact us
                        </p>
                    </Link>

                </div>

            </div>

        </footer>
    )
}

export default Footer