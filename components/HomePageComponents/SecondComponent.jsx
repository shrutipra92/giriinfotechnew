import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

const SecondComponent = () => {

    const [hover, setHover] = useState(false)
    const [value, setValue] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(prevValue => (prevValue === 2 ? 1 : prevValue + 1));
        }, 7000); // 3000 milliseconds = 3 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

  return (
    <div className='w-full h-[95vh] relative overflow-hidden'>

            {
                value === 1 &&

                <motion.div
                    className='w-full h-full flex items-center justify-center bg-[#005f82] flex-col-reverse 500px:flex-row pb-[50px] 500px:pb-0'>

                    <motion.div
                        initial={{ opacity: 0, y: -200 }} // Initial state
                        whileInView={{ opacity: 1, y: 0 }}    // Final state
                        transition={{ duration: 2 }}     // Animation duration
                        className='500px:w-1/2 w-full h-full text-white flex flex-col  justify-center gap-[25px] 1000px:pl-[100px] pl-[20px]'>

                        <div className='text-[24px] 1000px:text-[34px] font-[600] 1000px:w-[75%] w-[96%]'>
                            <p>Our AI services can help </p>
                            <span className='Span'>transform your business</span>
                        </div>

                        <p className='1000px:text-[16px] text-[14px] font-[500] 1000px:w-[75%] w-[96%]'> Artificial Intelligence (AI) has emerged as a trans-formative force that can revolutionize the way companies operate, enabling them to make data-driven decisions, enhance customer experiences, automate processes, and achieve unprecedented levels of efficiency. To harness the full potential of AI, many businesses turn to AI service companies that offer specialized expertise and solutions.</p>
                        <div className="flex justify-center w-fit items-center">

                            <button
                                className={`relative uppercase tracking-[0.25em] text-lg 1000px:w-[260px] w-[180px] h-[60px] rounded-[5px] transition-all duration-300 cursor-pointer before:absolute before:right-0 before:top-0 before:bg-[#fb4b02] before:transition-all before:duration-300 before:shadow-bannerButton before:h-0 before:w-[2px] after:absolute after:right-0 after:top-0 after:bg-[#fb4b02] after:transition-all after:duration-300 after:shadow-bannerButton after:w-0 after:h-[2px] hover:before:h-full hover:after:w-full `}
                                onMouseEnter={() => { setHover(true) }}
                                onMouseLeave={() => { setHover(false) }}
                                style={{
                                    boxShadow: 'inset 2px 2px 2px 0px rgba(255,255,255,.5),7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1)',
                                    background: !hover ? 'linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%)' : 'white'
                                }}>

                                <Link href={'/Services/MachineLearningAndArtificialIntelligence'}>
                                    <div
                                        className={`1000px:w-[260px] w-[180px] h-[60px] relative before:absolute after:absolute before:left-0 after:left-0 before:bottom-0 after:bottom-0 before:bg-[#fb4b02] after:bg-[#fb4b02] before:transition-all after:transition-all before:duration-300 after:duration-300 before:shadow-bannerButton after:shadow-bannerButton before:w-[2px] before:h-0 after:h-[2px] after:w-0 hover:before:h-[60px] hover:after:1080px:w-[260px] hover:after:w-[180px] flex items-center justify-center text-black hover:text-[#fb4b02]`}>
                                        Know More
                                    </div>
                                </Link>

                            </button>

                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }} // Initial state
                        whileInView={{ opacity: 1 }}    // Final state
                        transition={{ duration: 1 }}     // Animation duration
                        className='500px:w-1/2 w-full h-full bg-cover bg-no-repeat bg-blend-multiply bg-gray-400 InnerShadow'
                        style={{
                            backgroundImage: `url('https://websiteimagessb.s3.us-west-2.amazonaws.com/9aa3fedadc.jpeg')`
                        }}>

                    </motion.div>

                </motion.div>
            }
            {
                value === 2 &&

                <motion.div
                    className='w-full h-full flex items-center justify-center bg-[#005f82] flex-col 500px:flex-row'>

                    <motion.div
                        initial={{ opacity: 0 }} // Initial state
                        whileInView={{ opacity: 1 }}    // Final state
                        transition={{ duration: 1 }}     // Animation duration
                        className='500px:w-1/2 w-full h-full bg-cover bg-no-repeat bg-blend-multiply bg-gray-400 InnerShadow'
                        style={{
                            backgroundImage: `url('https://websiteimagessb.s3.us-west-2.amazonaws.com/6acba0c988.jpeg')`
                        }}>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -200 }} // Initial state
                        whileInView={{ opacity: 1, y: 0 }}    // Final state
                        transition={{ duration: 2 }}     // Animation duration
                        className='500px:w-1/2 w-full h-full text-white flex flex-col  justify-center gap-[25px] 1000px:pl-[100px] pl-[20px]'>

                        <div className='text-[24px] 1000px:text-[34px] font-[600] 1000px:w-[75%] w-[96%]'>
                            <p> Salesforce Professional Services:</p>
                            <span className='Span'> Elevating Customer Engagement and Efficiency</span>
                        </div>

                        <p className='1000px:text-[16px] text-[14px] font-[500] 1000px:w-[75%] w-[96%]'>Our salesforce professional services offer a comprehensive solution for companies to elevate their customer engagement and operational efficiency. By harnessing the power of Salesforce, your company can streamline processes, deliver exceptional customer experiences, and stay ahead of the competition in the ever-evolving any industry. Whether you're looking to optimize sales, enhance customer support, or drive marketing initiatives, Salesforce can be the catalyst for your company's success.</p>

                        <div className="flex justify-center w-fit items-center">

                            <button
                                className={`relative uppercase tracking-[0.25em] text-lg 1000px:w-[260px] w-[180px] h-[60px] rounded-[5px] transition-all duration-300 cursor-pointer before:absolute before:right-0 before:top-0 before:bg-[#fb4b02] before:transition-all before:duration-300 before:shadow-bannerButton before:h-0 before:w-[2px] after:absolute after:right-0 after:top-0 after:bg-[#fb4b02] after:transition-all after:duration-300 after:shadow-bannerButton after:w-0 after:h-[2px] hover:before:h-full hover:after:w-full `}
                                onMouseEnter={() => { setHover(true) }}
                                onMouseLeave={() => { setHover(false) }}
                                style={{
                                    boxShadow: 'inset 2px 2px 2px 0px rgba(255,255,255,.5),7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1)',
                                    background: !hover ? 'linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%)' : 'white'
                                }}>

                                <Link href={'/Services/Salesforce'}>
                                    <div
                                        className={`1000px:w-[260px] w-[180px] h-[60px] relative before:absolute after:absolute before:left-0 after:left-0 before:bottom-0 after:bottom-0 before:bg-[#fb4b02] after:bg-[#fb4b02] before:transition-all after:transition-all before:duration-300 after:duration-300 before:shadow-bannerButton after:shadow-bannerButton before:w-[2px] before:h-0 after:h-[2px] after:w-0 hover:before:h-[60px] hover:after:1080px:w-[260px] hover:after:w-[180px] flex items-center justify-center text-black hover:text-[#fb4b02]`}>
                                        Know go
                                    </div>
                                </Link>

                            </button>

                        </div>

                    </motion.div>

                </motion.div>
            }

            <div className='absolute bottom-[1vh] left-1/2 -translate-x-1/2 flex items-center gap-[10px]'>

                <div className='w-[12px] h-[12px] border-solid border-2 border-white rounded-full flex items-center justify-center'>

                    {value === 1 && <div className='w-[6px] h-[6px] bg-white rounded-full' />}

                </div>

                <div className='w-[12px] h-[12px] border-solid border-2 border-white rounded-full flex items-center justify-center'>

                    {value === 2 && <div className='w-[6px] h-[6px] bg-white rounded-full ' />}

                </div>
            </div>

        </div>
  )
}

export default SecondComponent