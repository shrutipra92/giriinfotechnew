import React from 'react'
import { motion } from 'framer-motion'

const SecondComponent = () => {

    const componentArray = [
        {
            heading: "Industry Expertise",
            para: "Benefit from our in-depth knowledge of the insurance sector. We understand the nuances of your industry and provide solutions that align with your unique requirements.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/expert_health.webp"
        },
        {
            heading: "Scalability and Flexibility",
            para: "Our IT solutions are designed to scale alongside your business. Whether you're a small agency or a large insurance corporation, our services adapt to your evolving needs.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/scalable_health.webp"
        },
        {
            heading: "Customization and Integration",
            para: "Enjoy tailor-made solutions that seamlessly integrate with your existing systems. We work closely with your team to understand your workflow and deliver solutions that enhance, not disrupt, your operations.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_security_comp.webp"
        },
        {
            heading: "24/7 Support",
            para: "Rely on our round-the-clock support to ensure the continuous operation of your IT systems. Our dedicated team is ready to address any issues promptly and keep your business running smoothly.",
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