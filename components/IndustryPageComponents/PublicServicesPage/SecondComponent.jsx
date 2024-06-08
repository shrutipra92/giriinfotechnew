import React from 'react'
import { motion } from 'framer-motion'

const SecondComponent = () => {

    const componentArray = [
        {
            heading: "Industry Expertise",
            para: "Benefit from our in-depth understanding of Public Services industries. Our team brings valuable insights into the challenges and opportunities specific to government operations.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/expert_health.webp"
        },
        {
            heading: "Comprehensive Solutions",
            para: "We offer end-to-end solutions that cover every aspect of IT for Public Services. From strategy and planning to implementation and support, we are your trusted partner throughout the digital transformation journey.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/scalable_health.webp"
        },
        {
            heading: "Security-First Approach",
            para: "Security is paramount in the public sector. Our solutions prioritize the highest standards of cybersecurity, ensuring that sensitive information remains protected against evolving threats.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_security_comp.webp"
        },
        {
            heading: "Proven Track Record",
            para: "With a history of successful implementations, we have a proven track record of helping government agencies achieve their IT goals. Our client-centric approach ensures that every solution is tailored to meet specific requirements.",
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