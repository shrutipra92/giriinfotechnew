import React from 'react'
import { motion } from 'framer-motion'

const SecondComponent = () => {

    const componentArray = [
        {
            heading: "Industry Expertise",
            para: "Benefit from our in-depth understanding of the energy and utilities sectors. We combine IT expertise with industry knowledge to deliver solutions tailored to your specific challenges and opportunities.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/industry_expert.webp"
        },
        {
            heading: "Innovation and Agility",
            para: "Stay ahead in a rapidly evolving industry with our commitment to innovation and agility. Our solutions are designed to adapt to changing technology landscapes and evolving business needs.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/innovation.webp"
        },
        {
            heading: "Reliability and Security",
            para: "Rely on our secure and reliable IT solutions to ensure the continuous and safe operation of your critical energy and utility systems. We prioritize the integrity and confidentiality of your data.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/security_and_reliable.webp"
        },
        {
            heading: "Scalable Solutions",
            para: "Whether you are a small utility company or a large-scale energy provider, our scalable solutions can grow with your business. Scale up your IT infrastructure without compromising performance.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/scalable_sol.webp"
        },
    ]

    return (
        <div
            className='w-full py-[40px] text-[18px] flex flex-col items-center gap-[30px]'>

            <p className='text-[26px] font-bold text-center w-[90%] 1000px:w-[80%]'>
                Why Choose Giri Info Tech?
            </p>

            {
                componentArray.map((component, index) => {
                    return (
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
                            key={index}
                            className={`w-[90%] 1000px:w-[80%] mx-auto flex items-center gap-[30px] ${index % 2 !== 0 ? 'flex-col 1000px:flex-row-reverse' : 'flex-col 1000px:flex-row'}`}>

                            <div
                                className='w-full 1000px:w-1/2'>

                                <p className='text-[22px] font-bold'>
                                    {component.heading}
                                </p>

                                <p className='mt-[16px]'>
                                    {component.para}
                                </p>

                            </div>

                            <img
                                src={component.image}
                                alt={component.heading}
                                className='w-full 1000px:w-1/2 h-auto object-cover rounded-md' />

                        </motion.div>
                    )
                })
            }

        </div>
    )
}

export default SecondComponent