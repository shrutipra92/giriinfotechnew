import React from 'react'
import { motion } from 'framer-motion'

const ThirdComponent = () => {

    const contentArray = [
        {
            heading: "Meet Our Retail Experts",
            para: "Behind every successful solution is a team of experts who live and breathe retail. Our professionals have an in-depth understanding of the industry's nuances and are constantly innovating to keep you ahead of the curve.",
            img: "https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/retailexpert.jfif"
        },
        {
            heading: "Join the Retail Revolution",
            para: "Retail isn't just about selling products; it's about forging connections and building brand loyalty. At [Your Company Name], we are passionate about creating the future of retail, one technology solution at a time.",
            img: "https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/retail-revolution.jfif"
        },
        {
            heading: "Our Mission",
            para: "At Giri Info Tech, our mission is to revolutionize the retail landscape through innovative IT solutions. We are committed to empowering retail businesses of all sizes, from local boutiques to global brands, with the technology they need to thrive in an ever-evolving digital world. Our mission is to be the trusted partner that retailers turn to for tailored, cutting-edge IT solutions that drive growth, enhance customer experiences, and ensure lasting success.",
            img: "https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/mission.jfif"
        },
        {
            heading: "Our Vision",
            para: "Our vision is to be the driving force behind the retail industry's transformation into a seamless, data-driven, and customer-centric ecosystem. We envision a future where every retail business, regardless of its scale or specialization, harnesses the power of technology to maximize efficiency, delight customers, and create lasting brand loyalty. By pioneering innovative solutions and staying at the forefront of technological advancements, we aim to make the retail experience more engaging, convenient, and profitable for businesses while exceeding the expectations of their customers.",
            img: "https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/vision.jfif"
        },
    ]

    return (
        <div>
            {/* 
        <div className='max-w-[100%] overflow-auto py-[50px] ThirdComponentSlider'>
        <div className='w-fit flex slider'>
             */}
        {
            contentArray.map((content, index) => {
                return (
                    <div className='w-full p-[50px] flex items-center 1000px:justify-evenly flex-col 700px:flex-row gap-[20px] duration-200 transition-all' key={index}>

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

                            <div className='text-[36px] font-[600] text-primaryColor leading-[40px]'>
                                {content.heading}
                            </div>

                            <div className='text-[20px] leading-[30px]  pt-[20px]'>
                                {content.para}
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
                                src={content.img}
                                alt=""
                                className='w-full object-cover rounded-[6px]'
                            />

                        </motion.div>

                    </div>
                )
            })
        }
        {/*
        </div>
    */}
{/* <div className='w-full p-[50px] flex items-center 1000px:justify-evenly flex-col 700px:flex-row gap-[20px]'>

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

                    <div className='text-[36px] font-[600] text-primaryColor leading-[40px]'>
                    Meet Our Retail Experts
                    </div>

                    <div className='text-[20px] leading-[30px]  pt-[20px]'>
                    Behind every successful solution is a team of experts who live and breathe retail. Our professionals have an in-depth understanding of the industry's nuances and are constantly innovating to keep you ahead of the curve.
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
                    className='h-[260px] 1000px:h-[320px] w-[96%] 700px:w-1/2'>

                    <img
                        src="https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/retailexpert.jfif"
                        alt=""
                        className='h-full object-cover mx-auto'
                    />

                </motion.div>

            // </div>
            </div> 
        */}
        </div>
  )
}

export default ThirdComponent