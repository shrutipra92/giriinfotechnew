import React from 'react'
import { useState } from 'react'

const FirstComponent = () => {

    const [activeComponent, setActiveComponent] = useState(0)

    const componentArray = [
        {
            heading: "Policy Management System",
            para: "Simplify and automate policy creation, modification, and renewal processes with our robust Policy Management System. Enhance operational efficiency and reduce manual errors with a centralized platform tailored to your specific needs.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/electronic-health-record.webp"
        },
        {
            heading: "Claims Processing Solutions",
            para: "Accelerate claims processing and improve accuracy through our advanced claims management solutions. Utilize automation and analytics to expedite claims assessment, resulting in faster payouts and increased customer satisfaction.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_info_exchange.webp"
        },
        {
            heading: "Data Security and Compliance",
            para: "Safeguard sensitive customer data and ensure compliance with industry regulations using our cutting-edge cybersecurity solutions. From data encryption to regular security audits, we prioritize the protection of your clients' information.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/telehealth.webp"
        },
        {
            heading: "Customer Relationship Management (CRM)",
            para: "Strengthen your client relationships with our customized CRM solutions. Track interactions, manage client information, and personalize communication to enhance the overall customer experience.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/cyber_health.webp"
        },
        {
            heading: "Digital Transformation Strategies",
            para: "Embrace digital transformation with our strategic guidance. Leverage emerging technologies such as AI, machine learning, and blockchain to drive innovation, optimize processes, and stay ahead in a rapidly evolving market.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_data_analytics.webp"
        },
        {
            heading: "Mobile App Development",
            para: "Engage policyholders on-the-go with intuitive and secure mobile applications. From policy access to claims status updates, our mobile app solutions enhance accessibility and convenience for your customers.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/mobile_health.webp"
        },
    ]

    return (
        <div
            className='w-full bg-black text-white py-[40px] flex flex-col gap-[30px]'>

            <p className='text-[32px] font-bold w-[90%] 1000px:w-[80%] mx-auto'>
                Empowering the Insurance Industry Through Innovative IT Solutions
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                In an era where digital transformation is reshaping industries, the insurance sector is no exception. At Giri Info Tech, we understand the unique challenges faced by insurance companies and offer tailored IT solutions to streamline operations, mitigate risks, and elevate customer satisfaction.
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                Our Comprehensive IT Services for the Insurance Sector.
            </p>

            <div
                className='flex flex-col 1000px:flex-row gap-[20px] w-[90%] 1000px:w-[80%] mx-auto'>

                <div
                    className='flex flex-col text-[20px] gap-[30px] w-full 1000px:w-1/3'>

                    {
                        componentArray.map((componentDetails, index) => {
                            return (
                                <p
                                    key={index}
                                    className={`w-full ${activeComponent === index && 'font-bold'} cursor-pointer transition-all duration-500`}
                                    onClick={() => { setActiveComponent(index) }}>
                                    {componentDetails.heading}
                                </p>
                            )
                        })
                    }

                </div>

                <img
                    src={componentArray[activeComponent].image}
                    alt={componentArray[activeComponent].heading}
                    className='w-full 1000px:w-1/3 h-full object-cover rounded-md' />

                <p className='text-[18px] w-full 1000px:w-1/3'>
                    {componentArray[activeComponent].para}
                </p>

            </div>
        </div>
    )
}

export default FirstComponent