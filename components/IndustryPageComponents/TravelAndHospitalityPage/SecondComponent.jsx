import React from 'react'
import { motion } from 'framer-motion'

const SecondComponent = () => {

    const componentArray = [
        {
            heading: "Industry Expertise",
            para: "We understand the unique challenges and opportunities in the travel and hospitality sectors. Our team brings industry-specific knowledge to deliver solutions tailored to your business needs.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/industry_expert_travel.webp"
        },
        {
            heading: "Innovation and Customization",
            para: "We thrive on innovation. Our solutions are not one-size-fits-all; they are customized to meet the specific requirements of your business, ensuring a competitive edge.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/innovation_travel.webp"
        },
        {
            heading: "Scalability and Future-Proofing",
            para: "As your business grows, our solutions grow with you. Our scalable IT services are designed to adapt to the evolving needs of the travel and hospitality industries.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/scalability_travel.webp"
        },
        {
            heading: "24/7 Support and Maintenance",
            para: "Our commitment to your success goes beyond implementation. Benefit from our round-the-clock support and proactive maintenance to ensure the continuous smooth operation of your IT systems.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/support_travel.webp"
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