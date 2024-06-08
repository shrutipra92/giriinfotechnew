import React from 'react'
import { motion } from 'framer-motion'

const SecondComponent = () => {

    const componentArray = [
        {
            heading: "Industry Expertise",
            para: "We understand the intricacies of the logistics industry. Our team combines IT expertise with a deep understanding of logistics, ensuring that our solutions address the unique challenges faced by your business.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/expert_health.webp"
        },
        {
            heading: "Scalability and Flexibility",
            para: "Our solutions are designed to grow with your business. Whether you're a small logistics firm or a large multinational corporation, our scalable solutions can be tailored to fit your evolving needs.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/scalable_health.webp"
        },
        {
            heading: "Reliability and Security",
            para: "Trust is the foundation of logistics. Our solutions prioritize reliability and security, ensuring that your data is protected and your operations run smoothly without disruptions.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_security_comp.webp"
        },
        {
            heading: "Continuous Support and Training",
            para: "We provide ongoing support and training to ensure that your team can maximize the benefits of our logistics IT solutions. Your success is our priority, and we are committed to helping you achieve it.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_training.webp"
        },
    ]

    return (
        <div
            className='w-full py-[40px] text-[18px] flex flex-col items-center gap-[30px]'>

            <p className='text-[26px] font-bold text-center w-[90%] 1000px:w-[80%]'>
                Why Choose Giri Info Tech for Logistics Solutions?
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