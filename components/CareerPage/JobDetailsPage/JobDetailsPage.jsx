import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import careerdata from '../Career.json'
import JobStaticFiles from '../JobStaticFile.json'
import { useRouter } from 'next/router'
import Loader from '@/components/Loader/Loader'
import Footer from '@/components/Footer/Footer'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Navbar from '@/components/Navbar/Navbar'
import JobDescription from './JobDescription'
import axios from 'axios'

const JobDetailsPage = () => {
    const [ThisPageDetails, setThisPageDetails] = useState([])
    const [loading, setLoading] = useState(true)

    const router = useRouter()
    const { slug } = router.query

    useEffect(() => {
        axios.post('/api/GetSpecificMessage',{slug})
            .then((res) => {
                console.log(res.data.message)
                setThisPageDetails(res.data.message)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(()=>{
        if(ThisPageDetails.length !== 0){
            setLoading(false)
        }
    },[ThisPageDetails])

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <Loader />
            </div>
        )
    }

    return (
        <div className='w-full'>
    <Navbar/>
    <WhatsAppIcon/>
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
             <div className='px-20 my-20'>
             <JobDescription thisPageDetails={ThisPageDetails}/>
             </div>
            <Footer/>
         </div>
    )
}

export default JobDetailsPage