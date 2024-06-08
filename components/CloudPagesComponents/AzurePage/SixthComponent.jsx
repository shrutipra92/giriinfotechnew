import React, { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const SixthComponent = () => {

    const arrayContents = [
        {
            heading: "Agile Development:",
            paragraph: [
                {
                    heading: "Rapid Prototyping:",
                    description: "DevOps Automation facilitates rapid prototyping and iterative development, allowing for quick adaptation to changing market demands."
                },
                {
                    heading: "Continuous Feedback:",
                    description: "Instant feedback loops foster continuous improvement, resulting in applications that evolve alongside user needs."
                },
            ],
            icons: <AcUnitIcon />
        },
        {
            heading: "Collaborative Efficiency:",
            paragraph: [
                {
                    heading: "Unified Teams:",
                    description: "DevOps brings development, operations, and quality assurance teams together, promoting collaboration, shared goals, and enhanced productivity."
                },
                {
                    heading: "Real-time Communication:",
                    description: "Seamless communication among team members ensures everyone is on the same page, expediting decision-making processes."
                },
            ],
            icons: <AcUnitIcon />
        },
        {
            heading: "Automated Workflows:",
            paragraph: [
                {
                    heading: "Effortless Integration:",
                    description: "Automation of repetitive tasks and integration processes accelerates development cycles, reducing manual errors and enhancing efficiency."
                },
                {
                    heading: "Continuous Deployment:",
                    description: "Automated deployment pipelines ensure a continuous flow of code from development to production, enabling swift releases."
                },
            ],
            icons: <AcUnitIcon />
        },
        {
            heading: "Enhanced Quality:",
            paragraph: [
                {
                    heading: "Comprehensive Testing:",
                    description: "DevOps Automation encourages rigorous automated testing, ensuring the highest quality standards and reducing post-release issues."
                },
                {
                    heading: "Predictable Performance:",
                    description: "Consistent testing and deployment practices lead to predictable performance, enhancing user experience and customer satisfaction."
                },
            ],
            icons: <AcUnitIcon />
        },
    ]

    return (
        <div className='w-full py-[40px] bg-black text-white'>

            <div
                className='w-[90%] 1000px:w-[80%] mx-auto flex items-center justify-center flex-col 1000px:flex-row gap-[20px]'>

                <div 
                className='w-full 1000px:w-[50%] flex flex-col gap-[30px] h-fit 1000px:sticky 1000px:top-1/2 1000px:-translate-y-1/2'>

                    <p className='text-[32px] font-bold'>
                        Accelerate Innovation with Azure Cloud DevOps Automation
                    </p>

                    <p className='text-[18px]'>
                        We recognize the vital role that Azure Cloud DevOps Automation plays in driving businesses forward. Our expert services ensure that your development processes are not only streamlined but also optimized for agility, collaboration, and innovation. Azure Cloud DevOps Automation is at the heart of modern software development, enabling businesses to innovate faster, collaborate efficiently, and maintain high-quality products.
                    </p>

                    {/* <Link
                        to={'/contact-us'}>
                        <button
                            name='Contact us button'
                            className='px-[20px] py-[8px] border-[2px] border-white rounded-[10px]'>
                            Let's discuss your project
                        </button>
                    </Link> */}

                </div>

                <div className='w-full 1000px:w-[50%]'>

                    {
                        arrayContents.map((arrayContent, index) => {
                            return (
                                <div
                                    className='w-full'
                                    key={index}>

                                    <div className='cursor-pointer w-full flex items-center gap-[20px]'>

                                        <div
                                            className='w-[30px] h-[30px] bg-gradient-to-r from-[rgba(103,102,103,1)] to-[rgba(178,175,178,1)] rounded-[6px] flex items-center justify-center'>
                                            {arrayContent.icons}
                                        </div>

                                        <p
                                            className='text-[24px] font-bold'>
                                            {arrayContent.heading}
                                        </p>

                                    </div>

                                    {
                                        arrayContent.paragraph.map((paragraphContent, i) => {
                                            return (
                                                <p
                                                    className={`py-[10px] transition-all duration-500 cursor-pointer`} key={i}>
                                                    <span className='font-bold mr-[4px]'>
                                                        {paragraphContent.heading}
                                                    </span>
                                                    <span>
                                                        {paragraphContent.description}
                                                    </span>
                                                </p>
                                            )
                                        })
                                    }

                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default SixthComponent