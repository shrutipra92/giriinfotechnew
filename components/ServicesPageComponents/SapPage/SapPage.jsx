import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'
import { overViewArray } from './SapDatas'
import ContentOne from './ContetOne'
import CaseStudyJson from './CaseStudy.json'

const SapPage = () => {
  return (
    <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />




            <div 
            className='w-full h-[70vh] relative flex items-center'>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/sap.jpeg"
                    alt=""
                    className='w-full h-full object-cover absolute top-0 left-0 -z-10' />

                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0.4
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1                    }}
                    transition={{
                        duration: 1
                    }}
                    className='z-10'>

                    <div className='text-white font-[600] text-[52px] ml-[160px]'>
                        SAP
                    </div>

                </motion.div>

            </div>







            <div className='w-full flex items-center justify-center flex-col gap-[30px] py-[50px]'>

                <div className='w-[96%] 1200px:w-[80%]'>

                    <div className='w-full flex gap-[20px] flex-col 900px:flex-row'>

                        <div className='w-full 900px:w-[50%] 1000px:w-[75%] flex flex-col gap-[20px] justify-center'>

                            <p className='font-[600] text-[36px]'>
                                Our SAP Services:
                            </p>

                            <p className='text-[18px]'>
                                At Giri Info Tech, we offer a comprehensive range of SAP services tailored to your unique business needs.
                            </p>

                        </div>

                        <div className='w-full 900px:w-[50%] 1000px:w-[25%] h-[300px]'>

                            <img
                                src="https://websiteimagessb.s3.us-west-2.amazonaws.com/sap1.jpeg"
                                alt=""
                                className='w-full h-full object-cover' />

                        </div>

                    </div>

                </div>

                <div className='w-[90%] 1200px:w-[80%] grid grid-cols-1 700px:grid-cols-2 gap-x-8 gap-y-12'>

                    {
                        overViewArray.map((overview) => {
                            return (
                                <div
                                    key={overview.id}
                                    className='w-full relative before:absolute before:left-[-8px] 500px:before:left-[-20px] before:top-0 before:w-[3px] before:h-full before:bg-primaryColor before:rounded-full text-[16px] leading-[18px]'>
                                    <p className='font-[600]'>{overview.paraOne}</p>
                                    <p>{overview.paraTwo}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </div>











            <div className='w-full flex items-center justify-center flex-col gap-[30px] py-[50px]'>

                <div className='w-[96%] 1200px:w-[80%] p-[50px] bg-primaryColor hidden 1000px:block rounded-[4px]'>

                    <ContentOne />

                </div>

            </div>






            <div className='w-full flex items-center justify-center py-[50px]'>

                <div className='w-[96%] 1200px:w-[80%] flex flex-col items-center justify-center gap-[30px]'>

                    <div className='w-full flex justify-between flex-col 700px:flex-row'>

                        <div className='w-full 700px:w-[49%] flex flex-col justify-center gap-[30px] p-[20px] bg-gray-200 rounded-[10px]'>
                            <p className='text-[20px] leading-[22px] w-full'>
                                Why Choose Our SAP Services:
                            </p>

                            <div className='text-[20px] leading-[22px] w-full text-primaryColor'>
                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>cost-effectiveness</span>

                                </div>
                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>
                                        efficiency</span>

                                </div>
                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>reliability</span>

                                </div>
                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>SAP certifications, skills, and experience.</span>

                                </div>
                            </div>
                        </div>

                        <div className='w-full mt-[20px] 700px:mt-0 700px:w-[49%] flex items-center justify-center p-[20px] rounded-[10px] bg-gray-200'>

                            <img
                                src="https://websiteimagessb.s3.us-west-2.amazonaws.com/sappp.jpeg"
                                alt=""
                                className='w-[300px]' />

                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-[16px] p-[20px] bg-gray-200 rounded-[10px]'>
                        <p className='text-[20px] leading-[22px] w-full'>
                            SAP Solutions and Technologies:
                        </p>

                        <div className='text-[20px] leading-[22px] w-full'>
                            <div className='flex items-center gap-[10px]'>

                                <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                <span>In the SAP solutions and technologies Giri Info Tech is proficient in, such as SAP S/4HANA, SAP ECC, SAP Business One, etc.</span>

                            </div>
                            <div className='flex items-center gap-[10px]'>

                                <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                <span>SAP trends and innovations.</span>

                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-[16px] p-[20px] bg-gray-200 rounded-[10px]'>

                        <p className='text-[20px] leading-[22px] w-full'>
                            SAP Implementation Methodology:
                        </p>

                        <div className='text-[20px] leading-[22px] w-full'>
                            <div className='flex items-center gap-[10px]'>

                                <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                <span>Our SAP implementation, including project management, timelines, and quality assurance.</span>

                            </div>
                            <div className='flex items-center gap-[10px]'>

                                <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                <span>We follow SAP methodologies like ASAP or Agile.</span>

                            </div>
                        </div>

                    </div>

                    <div className='w-full flex items-center justify-between flex-col gap-[20px] 900px:flex-row p-[20px] bg-gray-200 rounded-[10px]'>

                        <div className='flex flex-col gap-[20px] text-[20px] w-full 900px:w-[70%] items-start'>

                            <p>
                                Range of SAP Services:
                            </p>
                            <p>
                                Enumerate the specific SAP services we offer, which may include:
                            </p>

                            <div>

                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>SAP implementation</span>

                                </div>

                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>SAP customization and development</span>

                                </div>

                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>SAP support and maintenance</span>

                                </div>

                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>SAP upgrades and migrations</span>

                                </div>

                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>SAP training and consulting</span>

                                </div>

                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>SAP system integration</span>

                                </div>

                                <div className='flex items-center gap-[10px]'>

                                    <div className='w-[8px] h-[8px] rounded-full border border-primaryColor' />

                                    <span>SAP cloud solutions</span>

                                </div>

                            </div>

                        </div>

                        <div className='w-full 900px:w-[30%]'>

                            <img
                                src="https://websiteimagessb.s3.us-west-2.amazonaws.com/sap2.jpeg"
                                alt=""
                                className='w-full' />

                        </div>

                    </div>

                </div>

            </div>






            <div className='w-full flex items-center justify-center gap-[20px] py-[30px] flex-col'>

                <p
                    className={`text-[18px] uppercase relative before:absolute before:left-[-10px] before:top-0 before:w-[2px] before:h-full text-black before:bg-transparent cursor-pointer font-[600]`}>
                    Case Studies
                </p>

                <div className='w-[80%] mx-auto grid grid-cols-1 800px:grid-cols-2 1200px:grid-cols-3 gap-8'>

                    {
                        Object.keys(CaseStudyJson).map((box) => {
                            return (
                                <div className='w-full h-fit' key={box.id}>

                                    <img
                                        src={CaseStudyJson[box].image}
                                        alt=""
                                        className='w-full h-[200px] object-cover' />

                                    <div className='p-[10px] flex flex-col gap-[20px]'>

                                        <p className='font-[600] text-[22px] leading-[24px]'>
                                            {box}
                                        </p>

                                        <Link href={`/Services/Sap/${box}`}>
                                            <button className='px-[20px] py-[6px] border border-primaryColor text-primaryColor w-fit'>
                                                KNOW MORE
                                            </button>
                                        </Link>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>








            <Footer />

        </div>
  )
}

export default SapPage