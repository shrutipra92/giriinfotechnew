import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'


const JobDescription = ({ thisPageDetails }) => {

    const [apply, setApply] = useState(false)

    const handleApplyForm = () => {
        setApply(!apply)
    }

    return (
        <div className='w-full'>
            <div className='text-[16px] leading-[26px] text-justify mt-[20px] w-[100%] 1000px:w-[full] px-[5px] '>

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
                    className='text-[16px] leading-[26px] text-justify mt-[20px] w-[95%] 1000px:w-[full] px-[5px]'>
                    <p className='1000px:text-[20px] font-[600]  my-5'>
                        {thisPageDetails.mainHeading}
                    </p>
                    <p className='1000px:text-[20px] font-[600]  my-5'>
                        {thisPageDetails.subHeading}
                    </p>
                    <p className='1000px:text-[20px] font-[600]  my-5'>
                        Your role
                    </p>
                    <ul className='1000px:text-[20px] px-8 text-justify list-disc'>
                        {thisPageDetails.roleDetails.map((details, index) => {
                            return (
                                <li key={index}>
                                    {details}
                                </li>
                            )
                        })}
                    </ul>
                    <p className='1000px:text-[20px] font-[600]  my-5'>
                    Qualifications
                    </p>
                    <ul className='1000px:text-[20px] px-8 text-justify list-disc'>
                        {thisPageDetails.qualifications.map((details, index) => {
                            return (
                                <li key={index}>
                                    {details}
                                </li>
                            )
                        })}
                    </ul>
                    <p className='1000px:text-[20px] font-[600]  my-5'>
                    Benefits
                    </p>
                    <ul className='1000px:text-[20px] px-8 text-justify list-disc'>
                        {thisPageDetails.benefits.map((details, index) => {
                            return (
                                <li key={index}>
                                    {details}
                                </li>
                            )
                        })}
                    </ul>

                    <p className='1000px:text-[20px] px-8 text-justify my-5'>
                        {thisPageDetails.conclusion}
                    </p>


                    <p className='1000px:text-[20px] font-[600]  my-5'>Essential Competencies</p>
                    <ul className='1000px:text-[20px] px-8 text-justify list-disc'>
                        {thisPageDetails.essentialCompetencies.map((details, index) => {
                            return (
                                <li key={index}>
                                    {details}
                                </li>
                            )
                        })}
                    </ul>

                    <p className='1000px:text-[20px] font-[600]  my-5'>Place</p>
                    <ul className='1000px:text-[20px] px-8 text-justify list-disc'>
                        {thisPageDetails.place.map((details, index) => {
                            return (
                                <li key={index}>
                                    {details}
                                </li>
                            )
                        })}
                    </ul>

                    <p className='1000px:text-[20px] font-[600]  my-5'>Preferred Competencies</p>
                    <ul className='1000px:text-[20px] px-8 text-justify list-disc'>
                        {thisPageDetails.preferedCompetencies.map((details, index) => {
                            return (
                                <li key={index}>
                                    {details}
                                </li>
                            )
                        })}
                    </ul>

                    <p className='1000px:text-[20px] font-[600]  my-5'>
                        Want to get a hike in you application: <span className='text-blue-400'>info@solutionbriz.com</span>
                    </p>

                    <div className=' flex flex-row justify-start gap-10 my-20 text-white'>
                        <Link href={'/career'}>
                            <div className='flex flex-justify text-center '>
                                <button className='bg-green-500 rounded-lg w-[100px] h-[50px] font-[600] text-[22px]'>
                                    BACK
                                </button>
                            </div>
                        </Link>
                        <div className='flex flex-justify text-center ' onClick={handleApplyForm}>
                            <button className='bg-red-500 rounded-lg w-[100px] h-[50px] font-[600] text-[22px]'>
                                APPLY
                            </button>
                        </div>

                    </div>

                </motion.div>



                <hr />

                {/*  */}
                {apply ?
                    <div className='w-full flex flex-col items-center justify-center py-[80px]'>

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
                            className='text-[16px] leading-[26px] text-left flex flex-col mt-[20px] w-[95%] 1000px:w-[full] px-[5px]'>
                            <label>Upload Resume{" "}<span className='text-red-500'> *</span></label><br />
                            <input type='text' className='border-2 border-black  w-[90%] h-10 rounded-lg' /><br />
                            <label>NAME {" "}<span className='text-red-500'> *</span></label><br />
                            <input type='text' className='border-2 border-black  w-[90%] h-10 rounded-lg' /><br />
                            <label>Email Id {" "}<span className='text-red-500'> *</span></label><br />
                            <input type='text' className='border-2 border-black  w-[90%] h-10 rounded-lg' /><br />
                            <label>Mobile Number {" "}<span className='text-red-500'> *</span></label><br />
                            <input type='text' className='border-2 border-black  w-[90%] h-10 rounded-lg' /><br />
                            <label>Experience (in years) {" "}<span className='text-red-500'> *</span></label><br />
                            <input type='text' className='border-2 border-black  w-[90%] h-10 rounded-lg' /><br />
                            <label>Current Location {" "}<span className='text-red-500'> *</span></label><br />
                            <input type='text' className='border-2 border-black  w-[90%] h-10 rounded-lg' /><br /><br />
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
                            className='text-[16px] leading-[26px] text-left flex flex-col mt-[20px] w-[95%] 1000px:w-[full] px-[5px]'>
                            <div className=' flex flex-row justify-center gap-40 my-5 text-white'>
                                <div className='flex flex-justify text-center '>
                                    <button className='bg-red-500 rounded-lg w-[100px] h-[50px] font-[600] text-[22px]'>
                                        Submit
                                        </button>
                                        </div>
                            </div>
                        </motion.div>



                    </div> : ""}
            </div>
        </div>
    )

}

export default JobDescription
