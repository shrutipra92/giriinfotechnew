import React from 'react'
import { useState } from 'react'

const FirstComponent = () => {

    const [activeComponent, setActiveComponent] = useState(0)

    const componentArray = [
        {
            heading: "Digital Transformation",
            para: "Empower government agencies to evolve digitally with our comprehensive transformation services. From legacy system modernization to cloud adoption, we facilitate a smooth transition towards a more agile and responsive public sector.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/electronic-health-record.webp"
        },
        {
            heading: "Citizen Engagement Platforms",
            para: "Enhance citizen experiences through user-friendly and accessible digital platforms. Our solutions include citizen portals, mobile apps, and interactive websites that foster transparency, accessibility, and engagement.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_info_exchange.webp"
        },
        {
            heading: "Data Analytics and Business Intelligence",
            para: "Harness the power of data to make informed decisions. Our analytics and business intelligence solutions enable government agencies to derive actionable insights, optimize resource allocation, and enhance strategic planning.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/telehealth.webp"
        },
        {
            heading: "Cybersecurity and Compliance",
            para: "Safeguard sensitive government data and ensure compliance with industry regulations. Our robust cybersecurity solutions protect against cyber threats, ensuring the integrity and confidentiality of critical information.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/cyber_health.webp"
        },
        {
            heading: "Cloud Services and Infrastructure",
            para: "Transition to a more scalable and cost-effective IT infrastructure with our cloud services. From cloud migration to ongoing management, we tailor solutions that align with the unique needs of Public Services organizations.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_data_analytics.webp"
        },
        {
            heading: "Collaboration and Communication Solutions",
            para: "Facilitate seamless communication and collaboration among government entities. Our solutions include secure email systems, unified communication platforms, and document management systems to enhance workflow efficiency.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/mobile_health.webp"
        },
    ]

    return (
        <div
            className='w-full bg-black text-white py-[40px] flex flex-col gap-[30px]'>

            <p className='text-[32px] font-bold w-[90%] 1000px:w-[80%] mx-auto'>
                Elevate Public Services with Cutting-Edge IT Solutions
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                In the dynamic landscape of Public Services, leveraging innovative technology is not just an option—it's a necessity. At Giri Info Tech, we specialize in delivering transformative IT solutions tailored for the unique needs of Public Services industries. Our comprehensive suite of services is designed to enhance efficiency, improve citizen experiences, and enable seamless collaboration across government entities.
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                Our IT Solutions for Public Services.
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