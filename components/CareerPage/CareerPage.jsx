import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import careerdata from './Career.json'
import Navbar from '../Navbar/Navbar'
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon'
import Footer from '../Footer/Footer'
import WhybrizSolution from './WhybrizSolution'
import CareerStrip from './CareerStrip'
import JobSearch from './JobSearch'
import ResumeUpload from './ResumeUpload'
import axios from 'axios'
import Loader from '../Loader/Loader'

const CareerPage = () => {
    const [loading, setLoading] = useState(true)
    const [allJobs, setAllJobs] = useState([])
    useEffect(() => {
        axios.get('/api/GetAllJobs')
            .then((res) => {
                setAllJobs(res.data.job)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        if (allJobs.length > 0) {
            setLoading(false)
        }
    }, [allJobs])
    if (loading) {
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
            <div className='w-full h-[70vh] relative flex items-center justify-center flex-col gap-[12px]'>
                <img
                    src={"https://websiteimagessb.s3.us-west-2.amazonaws.com/home/careers.webp"}
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
                    className='text-black font-[700] text-[32px] 700px:text-[42px] text-left w-[90%] 1000px:w-[80%]'>
                    {careerdata.PageHeading}
                </motion.div>
            </div>
            <WhybrizSolution />
            <CareerStrip />
            <JobSearch allJobs={allJobs} />
            <ResumeUpload />
            <Footer />
        </div>
    )
}

export default CareerPage