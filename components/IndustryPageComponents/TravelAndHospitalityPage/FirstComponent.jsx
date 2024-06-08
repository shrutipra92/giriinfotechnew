import React from 'react'
import { useState } from 'react'

const FirstComponent = () => {

    const [activeComponent, setActiveComponent] = useState(0)

    const componentArray = [
        {
            heading: "Integrated Reservation Systems",
            para: "Simplify booking processes and enhance customer satisfaction with our advanced reservation systems. From hotels and airlines to car rentals and tour packages, our solutions streamline the entire reservation workflow.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Mobile App Development",
            para: "Stay connected with your customers on the go. Our mobile app development services enable you to create intuitive and feature-rich applications, providing travelers with seamless booking, check-in/check-out, and real-time updates.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/mobile_app_travel.webp"
        },
        {
            heading: "Customer Relationship Management (CRM)",
            para: "Build lasting relationships with your customers through effective CRM solutions. Understand customer preferences, personalize interactions, and drive loyalty in a highly competitive industry.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/crm_travel.webp"
        },
        {
            heading: "Data Analytics for Business Intelligence",
            para: "Harness the power of data to make informed decisions. Our analytics solutions provide actionable insights into customer behavior, market trends, and operational efficiency, allowing you to stay ahead of the competition.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/data_analytics_travel.webp"
        },
        {
            heading: "Cybersecurity and Data Protection",
            para: "Safeguard sensitive customer data and protect your business from cyber threats. Our cybersecurity services ensure a robust defense against potential risks, securing your reputation and customer trust.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/cybersecurity_travel.webp"
        },
        {
            heading: "Cloud-Based Solutions",
            para: "Embrace the flexibility and scalability of cloud technology. Our cloud solutions enhance collaboration, improve accessibility, and provide a reliable infrastructure for your critical business applications.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/cloud_solution_travel.webp"
        },
    ]

    return (
        <div
            className='w-full bg-black text-white py-[40px] flex flex-col gap-[30px]'>

            <p className='text-[32px] font-bold w-[90%] 1000px:w-[80%] mx-auto'>
                Elevate Your Travel and Hospitality Business with Cutting-Edge IT Solutions
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                In the fast-paced world of travel and hospitality, delivering exceptional customer experiences while maintaining operational efficiency is key to success. At Giri Info Tech, we specialize in providing tailored IT solutions that empower businesses in the travel and hospitality sectors to stay ahead in a competitive landscape.
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
            Our Comprehensive IT Services for Travel and Hospitality.
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