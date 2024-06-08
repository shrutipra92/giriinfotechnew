import React from 'react'
import { motion } from 'framer-motion'

const SecondComponent = () => {

    const componentArray = [
        {
            heading: "Industry Expertise",
            para: "Our team comprises professionals with deep knowledge of both IT and manufacturing. We understand the intricacies of your industry, allowing us to tailor solutions that address your unique challenges.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/expert_health.webp"
        },
        {
            heading: "Scalability and Flexibility",
            para: "We offer scalable solutions that grow with your business. Whether you're a small-scale manufacturer or an industry giant, our services adapt to your evolving needs.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/scalable_health.webp"
        },
        {
            heading: "Cost-Effective Solutions",
            para: "We believe in delivering value. Our solutions are designed to optimize costs while maximizing the benefits of IT integration in manufacturing.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_security_comp.webp"
        },
        {
            heading: "Proven Track Record",
            para: "Giri Info Tech has a proven track record of successfully implementing IT solutions in manufacturing environments. Our satisfied clients testify to the positive impact of our services on their operations.",
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