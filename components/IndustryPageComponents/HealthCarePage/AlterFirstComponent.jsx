import React from 'react'
import { useState } from 'react'

const AlterFirstComponent = () => {

    const [activeComponent, setActiveComponent] = useState(0)

    const componentArray = [
        {
            heading: "Electronic Health Records (EHR) Implementation",
            para: "Streamline your clinical workflows and enhance patient care with our EHR implementation services. We tailor solutions to meet the unique needs of your healthcare facility, ensuring secure and efficient management of patient records.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/electronic-health-record.webp"
        },
        {
            heading: "Health Information Exchange (HIE)",
            para: "Facilitate seamless information sharing among healthcare providers with our Health Information Exchange solutions. Improve care coordination, reduce redundancy, and enhance patient outcomes through integrated data exchange.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_info_exchange.webp"
        },
        {
            heading: "Telehealth Solutions",
            para: "Embrace the future of healthcare with our Telehealth solutions. Enable remote patient monitoring, virtual consultations, and telemedicine services to extend the reach of healthcare beyond traditional boundaries.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/telehealth.webp"
        },
        {
            heading: "Cybersecurity and Compliance",
            para: "Safeguard patient data and ensure compliance with healthcare regulations through our robust cybersecurity solutions. We prioritize the security and privacy of sensitive information to build trust among patients and healthcare professionals.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/cyber_health.webp"
        },
        {
            heading: "Data Analytics and Business Intelligence",
            para: "Leverage the power of data to make informed decisions and improve healthcare outcomes. Our analytics and business intelligence solutions provide actionable insights, helping you enhance operational efficiency and patient care.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_data_analytics.webp"
        },
        {
            heading: "Mobile Health Applications",
            para: "Enhance patient engagement and empower healthcare providers with custom mobile health applications. From appointment scheduling to medication reminders, we create user-friendly apps that elevate the healthcare experience.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/mobile_health.webp"
        },
    ]

    return (
        <div
            className='w-full bg-black text-white py-[40px] flex flex-col gap-[30px]'>

            <p className='text-[32px] font-bold w-[90%] 1000px:w-[80%] mx-auto'>
                Our Healthcare IT Services
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                In the dynamic landscape of healthcare, staying ahead requires not just expertise but innovation. At Giri Info Tech we specialize in delivering top-notch Healthcare IT services that streamline operations, enhance patient care, and elevate your organization to new heights.
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

export default AlterFirstComponent