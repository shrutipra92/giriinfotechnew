import React, { useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FifthComponent = () => {

    const [activeArrayConetnt, setActiveArrayContent] = useState(-1)

    const arrayContents = [
        {
            heading: "Comprehensive Management:",
            paragraph: [
                {
                    heading: "24/7 Monitoring:",
                    description: "Our dedicated team provides round-the-clock monitoring, ensuring your Azure resources are operating at their best, and swiftly resolving issues as they arise."
                },
                {
                    heading: "Performance Optimization:",
                    description: "We continuously fine-tune your Azure environment, optimizing resources, and configurations to enhance application performance."
                },
            ]
        },
        {
            heading: "Security and Compliance:",
            paragraph: [
                {
                    heading: "Advanced Security:",
                    description: "From threat detection to data encryption, we implement robust security measures, safeguarding your data and applications against cyber threats."
                },
                {
                    heading: "Compliance Management:",
                    description: "We ensure your Azure infrastructure adheres to industry regulations, providing peace of mind and ensuring your business stays compliant."
                },
            ]
        },
        {
            heading: "Cost Management:",
            paragraph: [
                {
                    heading: "Cost Optimization:",
                    description: "Our experts analyze your usage patterns, identifying opportunities for cost savings without compromising performance, ensuring you get the most value out of your Azure investment."
                },
                {
                    heading: "Billing Transparency:",
                    description: "We provide detailed billing insights, allowing you to have complete visibility into your Azure spending, enabling effective budget management."
                },
            ]
        },
        {
            heading: "Backup and Disaster Recovery:",
            paragraph: [
                {
                    heading: "Automated Backups:",
                    description: "We set up automated, reliable backup solutions to protect your data, ensuring quick recovery in case of unexpected incidents."
                },
                {
                    heading: "Disaster Recovery Planning:",
                    description: "Our disaster recovery plans guarantee minimal downtime, keeping your business operational even in the face of disasters."
                },
            ]
        },
        {
            heading: "Scalability and Innovation:",
            paragraph: [
                {
                    heading: "Scalable Architecture:",
                    description: "We design your Azure infrastructure to be scalable, ensuring it can grow seamlessly with your business needs."
                },
                {
                    heading: "Innovation Integration:",
                    description: "We stay abreast of the latest Azure innovations, integrating new technologies to enhance your services and drive digital transformation."
                },
            ]
        },
    ]

    return (
        <div className='w-full py-[40px] bg-black text-white'>

            <div
                className='w-[90%] 1000px:w-[80%] mx-auto flex items-center justify-center flex-col 1000px:flex-row gap-[20px]'>

                <div className='w-full 1000px:w-[50%] flex flex-col gap-[30px]'>

                    <p className='text-[32px] font-bold'>
                        Azure Cloud Managed Services
                    </p>

                    <p className='text-[18px]'>
                        We understand the complexity of managing Azure infrastructure. That’s why we offer Azure Cloud Managed Services, ensuring your cloud environment is not just operational, but optimized for peak performance, security, and scalability.
                    </p>

                </div>

                <div className='w-full 1000px:w-[50%] flex flex-col gap-[40px]'>

                    {
                        arrayContents.map((arrayContent, index) => {
                            return (
                                <div
                                    className='w-full'
                                    key={index}>

                                    <div className='py-[8px] cursor-pointer w-full flex items-center justify-between'>
                                        <p
                                            className='text-[24px] font-bold'
                                            onClick={() => { setActiveArrayContent(prev => prev === index ? -1 : index) }}>
                                            {arrayContent.heading}
                                        </p>
                                        <div
                                        className='w-[30px] h-[30px] bg-gray-800 flex items-center justify-center'>
                                            {
                                                activeArrayConetnt === index ?
                                                    <ArrowUpwardIcon
                                                        onClick={() => { setActiveArrayContent(prev => prev === index ? -1 : index) }} />
                                                    :
                                                    <ArrowDownwardIcon
                                                        onClick={() => { setActiveArrayContent(prev => prev === index ? -1 : index) }} />
                                            }
                                        </div>
                                    </div>

                                    {
                                        activeArrayConetnt === index &&
                                        arrayContent.paragraph.map((paragraphContent, i) => {
                                            return (
                                                <p
                                                    className={`px-[20px] transition-all duration-500 cursor-pointer mt-[6px]`} key={i}>
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

export default FifthComponent