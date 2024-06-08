import React from 'react'
import { motion } from 'framer-motion'

const SecondComponent = () => {

    const componentArray = [
        {
            heading: "Expertise in Healthcare Domain",
            para: "Our team of IT professionals has extensive experience in the healthcare sector, understanding the unique challenges and requirements specific to the industry.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/expert_health.webp"
        },
        {
            heading: "Scalable and Flexible Solutions",
            para: "We offer scalable solutions that can adapt to the evolving needs of your healthcare organization. Whether you're a small clinic or a large hospital, our services grow with you.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/scalable_health.webp"
        },
        {
            heading: "Compliance and Security Focus",
            para: "Compliance with healthcare regulations and ensuring the highest standards of security are at the core of our IT solutions. Trust us to protect your patient data and maintain regulatory compliance.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_security_comp.webp"
        },
        {
            heading: "Continuous Support and Training",
            para: "We provide ongoing support and training to ensure that your team is well-equipped to make the most of our healthcare IT solutions. Our commitment extends beyond implementation to guarantee long-term success.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_training.webp"
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