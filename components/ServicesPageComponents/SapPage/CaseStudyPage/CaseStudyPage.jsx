import React from 'react'
import { motion } from 'framer-motion'
import Deliverables from './Deliverables'
import CaseStudyJson from '../CaseStudy.json'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer/Footer'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'
import Loader from '@/components/Loader/Loader'

const CaseStudyPage = () => {

    const router = useRouter()
    const { slug } = router.query

    if (!slug) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <Loader />
            </div>
        )
    }

    return (
        <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />

            <div 
            className='w-full relative h-[70vh] flex items-center'>

                <img
                    src={CaseStudyJson[slug].image}
                    alt=""
                    className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'
                />

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
                    className='text-white fonr-[600] text-[22px] 700px:text-[28px] w-[90%] 1000px:w-[80%] mx-auto'>
                    {slug}
                </motion.div>

            </div>

            {
                CaseStudyJson[slug].Objective &&

                <div className='w-full py-[30px]'>

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
                        className='w-[90%] 1000px:w-[80%] mx-auto font-[600] text-[18px] 900px:text-[20px] leading-[30px] 900px:leading-[40px]'>

                        Objective: <span className='italic'>{CaseStudyJson[slug].Objective}</span>

                    </motion.div>

                </div>
            }

            <Deliverables solutions={CaseStudyJson[slug].Deliverables} />

            <Footer />

        </div>
    )
}

export default CaseStudyPage