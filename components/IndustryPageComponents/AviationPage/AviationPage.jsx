import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import aviation from './Aviation.json'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Link from 'next/link'
import Footer from '@/components/Footer/Footer'
import LastComponent from './LastComponent'

const AviationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='w-full'>
            <Navbar />
            <WhatsAppIcon />
            <div className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>
                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/aviation/c43517b76e.jfif"
                    alt=""
                    className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                />

                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-white font-[700] text-[32px] 700px:text-[42px] text-left w-[80%]'>
                    {aviation.Contents.heading.heading1}
                </motion.div>
            </div>


            <div className='w-full flex flex-col items-center justify-center py-[40px] '>

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
                    className='text-[22px] flex leading-[26px] text-justify  w-[90%] 1000px:w-[80%] pt-[10px] mx-auto'>
                    {
                        aviation.Contents.ContentOne.description
                    }
                </motion.div>

            </div>

            <div className='w-full flex flex-col items-center justify-center pb-[80px] bg-gray-200'>
                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-[22px] font-[800] flex leading-[26px] text-center  w-[90%] 1000px:w-[80%] px-[10px] pt-[50px] '>
                    {
                        aviation.Contents.ContentOne.subheadings.subheading1}
                </motion.div>


                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='grid grid-cols-1 700px:grid-cols-2 900px:grid-cols-3 1000px:grid-cols-3 w-[90%] 1000px:w-[80%] gap-8 mt-[26px] pb-[50px]'>

                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] w-full'>
                        <img
                            src={aviation.Contents.ContentOne.objects.object1.image}
                            alt=""
                            className='w-full h-[200px] object-cover rounded-t-lg' />

                        <div className='font-[600] text-[20px] text-black'>
                            {
                                aviation.Contents.ContentOne.objects.object1.name
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] w-full'>
                        <img
                            src={aviation.Contents.ContentOne.objects.object2.image}
                            alt=""
                            className='w-full h-[200px] object-cover rounded-t-lg' />

                        <div className='font-[600] text-[20px] text-black'>
                            {
                                aviation.Contents.ContentOne.objects.object2.name
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] w-full'>
                        <img
                            src={aviation.Contents.ContentOne.objects.object3.image}
                            alt=""
                            className='w-full h-[200px] object-cover rounded-t-lg' />

                        <div className='font-[600] text-[20px] text-black'>
                            {
                                aviation.Contents.ContentOne.objects.object3.name
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] w-full'>
                        <img
                            src={aviation.Contents.ContentOne.objects.object4.image}
                            alt=""
                            className='w-full h-[200px] object-cover rounded-t-lg' />

                        <div className='font-[600] text-[20px] text-black'>
                            {
                                aviation.Contents.ContentOne.objects.object4.name
                            }
                        </div>
                    </div>


                </motion.div>

            </div>

            {/* case study start */}

            <div className='w-full flex flex-col items-center justify-center py-[40px] '>
                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-[22px] font-[800] flex leading-[26px] text-center  w-[90%] 1000px:w-[80%] px-[10px] pb-[20px] '>
                    Case Studies
                </motion.div>
                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className=' gap-[20px]  flex flex-row  leading-[40px] w-[90%] 1000px:w-[80%] bg-blue-900 rounded-md px-[10px] py-[10px] 1000px:h-[250px] h-[fit] '>
                    <div className='px-[30px] w-full  1000px:px-[10px] flex items-center  1000px:justify-evenly justify-center gap-[10px] flex-col 700px:flex-row  '>

                        <div className='flex flex-col pl-[10px] w-[90%] 700px:w-3/4 '>
                            <div className='text-[20px] text-white' >Case Study- 1</div>
                            <div className='text-[40px] font-[500] text-white mt-[10px]'>Business Transformation Success Story for Aviation Industry</div>
                            <Link href={'/Industry/Aviation/CaseStudy1'}><div><button type='submit' className='bg-yellow-400 rounded-lg mt-[50px] w-[100px]'>Read More</button></div></Link>


                        </div>
                        <div className='rounded-md px-[10px] py-[10px] h-[230px] w-[300px] bg-white 700px:w-1/4'>
                            <img src="https://blog.ibsplc.com/images/easyblog_articles/321/20220330-164215CLS-rev-accounting-automation.jpg" className='top-0 left-0 w-full h-full object-cover' alt='' />
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className=' gap-[20px]  flex flex-row  leading-[40px] w-[90%] 1000px:w-[80%] bg-blue-900 rounded-md px-[10px] py-[10px] mt-5 1000px:h-[250px] h-[fit]'>
                    <div className='px-[30px] w-full  1000px:px-[10px] flex items-center 1000px:justify-evenly justify-center gap-[10px] flex-col 700px:flex-row  '>
                        <div className='rounded-md px-[10px] py-[10px] h-[230px] w-[300px] bg-white 700px:w-1/4'>
                            <img src="https://blog.ibsplc.com/images/easyblog_articles/321/20220330-164215CLS-rev-accounting-automation.jpg" className='top-0 left-0 w-full h-full object-cover' alt='' />
                        </div>
                        <div className='flex flex-col pl-[10px] justify-end 700px:w-3/4 '>
                            <div className='text-[20px] text-white' >Case Study- 2</div>
                            <div className='text-[40px] font-[500] text-white mt-[10px]'>Business Transformation Success Story for Aviation Industry</div>
                            <Link href={'/Industry/Aviation/CaseStudy2'}><div><button type='submit' className='bg-yellow-400 rounded-lg mt-[50px] w-[100px]'>Read More</button></div></Link>


                        </div>
                    </div>

                </motion.div>


            </div>

            {/* case study end */}

            <div className='w-full flex flex-col items-center justify-center py-[40px] bg-gray-200'>
                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-[22px] font-[800] flex leading-[26px] text-center  w-[90%] 1000px:w-[80%] px-[10px] pt-[50px] '>
                    {
                        aviation.Contents.ContentOne.subheadings.subheading2}
                </motion.div>


                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='grid grid-cols-1 700px:grid-cols-2 900px:grid-cols-3 1000px:grid-cols-3 w-96% 1000px:w-[80%] gap-8 mt-[26px] pb-[50px] text-center px-6'>

                    <div className='flex flex-col gap-[10px] items-center justify-center  rounded-lg border-solid  bg-white pb-[10px] w-full '>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3045/3045647.png"
                            alt=""
                            className='w-[60%] m-auto' />

                        <div className='font-[600] text-[20px] text-black'>
                            Engine Normal Automatic Start (LEAP 1A)

                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] w-full '>
                        <img
                            src="https://img.freepik.com/premium-vector/girl-airport-vector-illustration-flat-style-eps-10_505557-937.jpg?w=2000"
                            alt=""
                            className='w-[60%] m-auto' />

                        <div className='font-[600] text-[20px] text-black'>
                            Checking for Any Abnormalities
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] m-auto '>
                        <img
                            src="https://st4.depositphotos.com/1001599/39056/v/600/depositphotos_390564064-stock-illustration-workplace-safety-abstract-concept-vector.jpg"
                            alt=""
                            className='w-[60%] m-auto' />

                        <div className='font-[600] text-[20px] text-black'>
                            Wheel Chocks Installation Procedures
                        </div>
                    </div>

                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] w-full '>
                        <img
                            src="https://ik.imagekit.io/travelsoftwares/otrams/wp-content/uploads/2020/10/01hotelbooking-06.png"
                            alt=""
                            className='w-[60%] m-auto' />

                        <div className='font-[600] text-[20px] text-black'>
                            External Walk Around, Flight Compartments, Passenger Compartments, Cargo Compartments

                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] w-full '>
                        <img
                            src="https://icon-library.com/images/plane-travel-flight-tourism-travel-icon-png-10.png"
                            alt=""
                            className='w-[60%] m-auto' />

                        <div className='font-[600] text-[20px] text-black'>
                            Engine Oil Servicing, Fuel Tanks, Auxiliary Power Unit (APU),
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px] items-center justify-center rounded-lg border-solid  bg-white pb-[10px] m-auto '>
                        <img
                            src="https://st2.depositphotos.com/6836544/11479/v/450/depositphotos_114792738-stock-illustration-suitcase-on-luggage-carousel-icon.jpg"
                            alt=""
                            className='w-[60%] m-auto' />

                        <div className='font-[600] text-[20px] text-black'>
                            Working, Caution and Safety

                        </div>
                    </div>


                </motion.div>

            </div>

            <LastComponent />

            <Footer />
        </div>
    )
}

export default AviationPage