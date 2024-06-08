import React from 'react'
import CaseStudies from '../FourthComponentData.json'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer/Footer'
import Ambition from './Ambition'
import Impact from './Impact'
import Solutions from './Solutions'
import Relevance from './Relevance'
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
                    src={CaseStudies[slug].base.images[0]}
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
                    {CaseStudies[slug].base.heading}
                </motion.div>

            </div>

            <Ambition paragraph={CaseStudies[slug].base.Ambition} />

            <Solutions solutions={CaseStudies[slug].base.solution} />

            <Impact impacts={CaseStudies[slug].base.Impact} />

            <Relevance relevances={CaseStudies[slug].base.Relevance} />

            <Footer />

        </div>
  )
}

export default CaseStudyPage