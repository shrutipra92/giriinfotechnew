import React from 'react'
import { useState } from 'react'

const ThirdComponent = () => {

    const [activeIndexContent, setActiveIndexContent] = useState(0)

    const contentArray = [
        {
            heading: "Why Azure Cloud Migration Matters",
            gridArray: [
                {
                    heading: "Scalability and Flexibility:",
                    listArray: [
                        {
                            heading: "Grow Without Limits:",
                            description: "Azure's scalable architecture allows your business to grow without constraints, accommodating increased workloads and customer demands effortlessly."
                        },
                        {
                            heading: "Flexibility:",
                            description: "Azure offers a wide range of services and deployment options, providing the flexibility needed to tailor solutions to your specific business needs."
                        },
                    ]
                },
                {
                    heading: "Cost Efficiency:",
                    listArray: [
                        {
                            heading: "Pay-as-you-go:",
                            description: "Azure's pay-as-you-go model ensures you only pay for the resources you use, optimizing costs and maximizing ROI."
                        },
                        {
                            heading: "Resource Optimization:",
                            description: "We analyze your infrastructure and optimize resources, ensuring cost efficiency without compromising performance."
                        },
                    ]
                },
                {
                    heading: "Innovation and Collaboration:",
                    listArray: [
                        {
                            heading: "Innovative Services:",
                            description: "Azure offers a plethora of cutting-edge services, from AI and IoT to advanced analytics, enabling your business to innovate and stay ahead of the curve."
                        },
                        {
                            heading: "Collaboration Tools:",
                            description: "Enhance teamwork and productivity with Azure's collaboration tools, fostering communication and knowledge sharing within your organization."
                        },
                    ]
                },
                {
                    heading: "Security and Compliance:",
                    listArray: [
                        {
                            heading: "Robust Security:",
                            description: "Azure's advanced security features and compliance certifications ensure your data is protected against threats and vulnerabilities."
                        },
                        {
                            heading: "Compliance Assurance:",
                            description: "We implement strict compliance measures, ensuring your Azure environment adheres to industry standards and regulations."
                        },
                    ]
                },
            ]
        },
        {
            heading: "Our Azure Cloud Migration Services",
            gridArray: [
                {
                    heading: "Comprehensive Assessment:",
                    listArray: [
                        {
                            heading: "Infrastructure Audit:",
                            description: "We conduct a detailed analysis of your existing infrastructure, identifying workloads suitable for Azure and devising a migration strategy tailored to your business goals."
                        },
                        {
                            heading: "Risk Mitigation:",
                            description: "Our experts assess potential risks and challenges, developing proactive mitigation strategies to ensure a smooth migration process."
                        },
                    ]
                },
                {
                    heading: "Data Migration and Optimization:",
                    listArray: [
                        {
                            heading: "Secure Data Transfer:",
                            description: "We employ secure migration techniques, ensuring your data is seamlessly transferred to Azure without compromising security or integrity."
                        },
                        {
                            heading: "Data Optimization:",
                            description: "We optimize your data structures, ensuring efficient storage and retrieval in Azure, reducing latency and enhancing performance."
                        },
                    ]
                },
                {
                    heading: "Application Refactoring and Modernization:",
                    listArray: [
                        {
                            heading: "Application Assessment:",
                            description: "We assess your applications, identifying opportunities for refactoring and modernization to leverage Azure's cloud-native capabilities."
                        },
                        {
                            heading: "Performance Enhancement:",
                            description: "By optimizing applications for Azure, we enhance their performance, responsiveness, and user experience."
                        },
                    ]
                },
                {
                    heading: "Post-Migration Support:",
                    listArray: [
                        {
                            heading: "24/7 Monitoring:",
                            description: "We provide continuous monitoring and support post-migration, ensuring your Azure environment operates at peak efficiency, and swiftly addressing any issues that may arise."
                        },
                        {
                            heading: "Ongoing Optimization:",
                            description: "Our experts continuously optimize your Azure setup, ensuring cost-efficiency and performance as your business evolves."
                        },
                    ]
                },
            ]
        },
    ]

    return (
        <div className='w-full pb-[40px]'>

            <div
                className='w-full bg-cover bg-no-repeat min-h-[40vh] max-h-fit p-[30px] bg-blend-multiply bg-gray-400'
                style={{
                    backgroundImage: `url('https://wallpapercave.com/wp/wp7337781.jpg')`
                }}>

                <div
                    className='w-[90%] 1000px:w-[80%] mx-auto flex items-center justify-center flex-col gap-[20px]'>

                    <p
                        className='text-[26px] 700px:text-[32px] font-bold text-center text-white'>
                        Seamless Azure Cloud Migration
                    </p>

                    <p className='text-[20px] text-center text-white'>
                        Azure Cloud, with its robust infrastructure and innovative services, offers the ideal platform for businesses looking to embark on their digital transformation journey. At Brizsolution Technology, we specialize in Azure Cloud Migration Services, ensuring a smooth and seamless transition to the cloud.
                    </p>

                    <div
                        className='w-full flex items-center justify-center gap-[16px] flex-col 1000px:flex-row'>

                        {
                            contentArray.map((contents, index) => {
                                return (
                                    <div
                                        className={`px-[20px] py-[10px] cursor-pointer rounded-[4px] ${activeIndexContent === index ? ' bg-white text-black ' : ' bg-white/10 text-white '}`}
                                        key={index}
                                        onClick={() => { setActiveIndexContent(index) }}>

                                        {
                                            contents.heading
                                        }

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

            <div
                className='w-[90%] 1000px:w-[80%] mx-auto pt-[30px]'>

                <div className='w-full grid grid-cols-1 800px:grid-cols-2 1200px:grid-cols-3 gap-8'>

                    {
                        contentArray[activeIndexContent].gridArray.map((gridContent, index) => {
                            return (
                                <div className='w-full bg-gray-200 p-[16px] rounded-[8px]' key={index}>

                                    <p className='text-[18px] font-bold'>
                                        {gridContent.heading}
                                    </p>

                                    <ul className='text-[18px] list-disc pl-[20px]'>

                                        {
                                            gridContent.listArray.map((listContent) => {
                                                return (
                                                    <li className='mt-[10px]' key={listContent}>
                                                        <span className='font-bold mr-[6px]'>
                                                            {listContent.heading}
                                                        </span>
                                                        <span>
                                                            {listContent.description}
                                                        </span>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>

                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default ThirdComponent