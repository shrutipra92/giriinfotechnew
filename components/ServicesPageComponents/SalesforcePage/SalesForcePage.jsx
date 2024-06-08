import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CaseStusies from './casestudy.json'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BrazeCaseStudy from './brazecasestudysalesforce.json'
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon';
import Navbar from '@/components/Navbar/Navbar';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SalesForcePage = () => {
    const offeringArray = [
        {
            id: 1,
            tag: 'Sales Cloud Solutions'
        },
        {
            id: 2,
            tag: 'Service Cloud Excellence'
        },
        {
            id: 3,
            tag: 'Marketing Cloud Mastery'
        },
        {
            id: 4,
            tag: 'Community Cloud Collaboration'
        },
        {
            id: 5,
            tag: 'Commerce Cloud Expertise'
        },
        {
            id: 6,
            tag: 'Integration and Custom Development'
        },
        {
            id: 7,
            tag: 'Data Migration and Cleansing'
        },
        {
            id: 8,
            tag: 'User Training and Adoption'
        },
        {
            id: 9,
            tag: 'Security and Compliance'
        },
        {
            id: 10,
            tag: 'Managed Services and Support'
        },
        {
            id: 11,
            tag: 'Business Process Optimization'
        },
        {
            id: 12,
            tag: 'Then Hilde the client List'
        },
    ]

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div className='w-full overflow-hidden'>

            <Navbar />

            <WhatsAppIcon />

            <div 
            className='w-full h-[70vh] relative'>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/salesforce.jpeg"
                    alt=""
                    className='w-full h-full object-cover z-[-1] absolute left-0 top-0' />

                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='font-[600] text-[52px] text-black pt-[50vh] ml-[10vw] z-10'>

                    Salesforce

                </motion.div>

            </div>

            <div className='w-full flex items-center justify-center py-[30px]'>

                <div className='w-[80%] flex flex-col gap-[20px]'>

                    <motion.div
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
                        At Giri Info Tech, we pride ourselves on being a trusted partner within the Salesforce (MuleSoft) ecosystem. Our mission is to provide our global clients with domain-specific, business-focused solutions that drive tangible outcomes. With a team of seasoned Salesforce experts who possess a unique blend of domain expertise and technical prowess, we are well-prepared to collaborate with your business.
                    </motion.div>

                    <motion.div
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
                        }}
                        className='flex flex-col gap-[16px]'>

                        <div className='flex items-center gap-[16px]'>

                            <div className='w-[8px] h-[8px] rounded-full bg-black' />

                            <div>
                                Expertise in Salesforce and MuleSoft
                            </div>

                        </div>

                        <div className='flex items-center gap-[16px]'>

                            <div className='w-[8px] h-[8px] rounded-full bg-black' />

                            <div>
                                Domain-Specific Solutions
                            </div>

                        </div>

                        <div className='flex items-center gap-[16px]'>

                            <div className='w-[8px] h-[8px] rounded-full bg-black' />

                            <div>
                                Outcome-Oriented Approach
                            </div>

                        </div>

                        <div className='flex items-center gap-[16px]'>

                            <div className='w-[8px] h-[8px] rounded-full bg-black' />

                            <div>
                                Risk Mitigation
                            </div>

                        </div>

                        <div className='flex items-center gap-[16px]'>

                            <div className='w-[8px] h-[8px] rounded-full bg-black' />

                            <div>
                                Maximum ROI
                            </div>

                        </div>

                        <div className='flex items-center gap-[16px]'>

                            <div className='w-[8px] h-[8px] rounded-full bg-black' />

                            <div>
                                Collaborative Partnership
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

            <div className='w-full py-[30px] bg-blueBackground flex items-center justify-center'>

                <div
                    className='w-[80%] text-white'>

                    <p className='text-[20px] 700px:text-[26px] 900px:text-[32px] font-[600] my-[10px]'>
                        By choosing Giri Info Tech as your Salesforce (MuleSoft) partner, you gain access to a dedicated team of experts committed to helping your business thrive in the digital age. We look forward to the opportunity to work with you and contribute to your organization's growth and success.
                    </p>

                </div>

            </div>

            <div className='w-full flex overflow-auto py-[30px]'>

                <Swiper
                    className={`Swiper h-fit w-[80%] mx-auto relative`}
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    // autoplay={true}
                    autoplay={{ delay: 7000 }}>

                    {
                        Object.keys(CaseStusies).map((caseStudy) => {
                            return (
                                <SwiperSlide key={caseStudy} className='w-[100%] p-[20px] bg-blueBackground rounded-[20px] flex gap-[20px] h-fit 700px:h-[240px] flex-col 700px:flex-row'>

                                    <div className='w-full 700px:w-[260px] h-full mx-auto 700px:mx-0'>
                                        <img
                                            src={CaseStusies[caseStudy].base.images[0]}
                                            alt=""
                                            className='w-full h-full rounded-[10px]' />
                                    </div>

                                    <div className='text-white h-full w-full 700px:w-[75%] flex flex-col justify-center gap-[16px] 700px:justify-evenly'>

                                        <p className='font-[500] text-[16px] 900px:text-[18px]'>
                                            {CaseStusies[caseStudy].base.heading}
                                        </p>

                                        <p className='font-[600] text-[18px] 900px:text-[22px] leading-[20px] 900px:leading-[24px]'>
                                            {CaseStusies[caseStudy].base.Ambition}
                                        </p>

                                        <Link href={`/case-studies/${caseStudy}`}>

                                        <button
                                            className='px-[30px] py-[10px] bg-secondaryColor w-fit rounded-[10px] transition-all duration-500 hover:bg-white hover:text-secondaryColor'>
                                            Read More
                                        </button>

                                        </Link>

                                    </div>

                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

            </div>

            <div className='w-full py-[40px] flex items-center justify-center bg-blueBackground'>

                <div className='w-[80%] flex flex-col gap-[16px] text-white'>

                    <p className='text-[18px] 900px:text-[20px]'>
                        HOW WE TRANSFORM
                    </p>

                    {/* <p className='text-[26px] 900px:text-[36px] font-[600]'>
                        Braze casestudy
                    </p> */}

                    <div className='grid grid-cols-1 500px:grid-cols-2 1000px:grid-cols-3 1400px:grid-cols-4 gap-8 text-black mx-auto 500px:mx-0'>

                        {
                            offeringArray.map((offerings) => {
                                return (
                                    <div
                                        className='bg-white w-[200px] 900px:w-[260px] h-[200px] 900px:h-[260px] rounded-[20px] flex flex-col items-center justify-evenly'
                                        key={offerings.id}>

                                        <img
                                            src="https://www.coforge.com/hubfs/airplane.svg"
                                            alt=""
                                            className='w-[70px] 900px:w-[100px]' />

                                        <p className='w-[90%] font-[600] text-[18px] leading-[20px] text-center'>
                                            {offerings.tag}
                                        </p>

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

            <div className='w-full py-[40px] flex items-center justify-center'>

                <div className='w-[80%] flex flex-col gap-[16px] text-primaryColor'>

                    <p className='text-[20px]'>
                        HOW WE TRANSFORM
                    </p>

                    <p className='text-[36px] font-[600]'>
                        Braze casestudy
                    </p>

                    <div className='grid grid-cols-1 700px:grid-cols-2 1200px:grid-cols-3 gap-8 text-black'>

                        {
                            Object.keys(BrazeCaseStudy).map((offering) => {
                                return (

                                    <Link href={`/case-studies/braze-case-study/${offering}`} key={offering.id}>
                                    <div
                                        className='w-full p-[20px] rounded-[20px] cursor-pointer bg-cover bg-no-repeat bg-blend-multiply bg-gray-500'
                                        style={{
                                            backgroundImage: `url('${BrazeCaseStudy[offering].base.images[0]}')`
                                        }}>

                                        <p className='text-[20px] text-white font-[600]'>{BrazeCaseStudy[offering].base.heading}</p>

                                    </div>
                                    </Link>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

            <div className='py-[30px] flex items-center justify-center w-full'>

                <div className='w-[80%] flex items-center justify-center gap-[50px]'>

                    <p className='text-primaryColor hidden 500px:block font-[700] text-[36px] 900px:text-[42px]'>
                        Let's Connect
                    </p>

                    <Link href={'/ContactUs'}>
                        <div className='px-[30px] py-[10px] flex items-center justify-center bg-primaryColor text-white rounded-[20px] transition-all duration-500 hover:text-primaryColor hover:bg-white'>
                            <span>
                                Send a message
                            </span>
                        </div>
                    </Link>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default SalesForcePage