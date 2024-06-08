import React from 'react'
import { useState } from 'react'

const FirstComponent = () => {

    const [activeComponent, setActiveComponent] = useState(0)

    const componentArray = [
        {
            heading: "Project Management",
            para: [
                "Planning and executing IT projects.",
                "Defining project scope, goals, and deliverables.",
                "Resource allocation and scheduling.",
                "Risk management and mitigation.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Vendor Management",
            para: [
                "Identifying and selecting appropriate vendors.",
                "Negotiating contracts and agreements.",
                "Ensuring vendor compliance with project requirements.",
                "Managing relationships with vendors.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Consulting Services",
            para: [
                "Offering expertise and advice on IT strategies.",
                "Assessing current systems and recommending improvements.",
                "Providing guidance on technology trends and best practices.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Software Development",
            para: [
                "Custom software development.",
                "Application design and programming.",
                "Quality assurance and testing.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Hardware Solutions",
            para: [
                "Assessing hardware needs for projects.",
                "Sourcing and implementing hardware solutions.",
                "Managing hardware vendors.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Network Infrastructure",
            para: [
                "Designing and implementing network solutions.",
                "Security assessments and implementation.",
                "Network optimization and troubleshooting.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Data Management",
            para: [
                "Database design and management.",
                "Data migration and integration.",
                "Data security and compliance.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Support and Maintenance",
            para: [
                "Providing ongoing support for implemented solutions.",
                "Maintenance and updates.",
                "Helpdesk services.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Training",
            para: [
                "Training for end-users and IT staff.",
                "Documentation of systems and processes.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Cloud Services",
            para: [
                "Cloud strategy and migration.",
                "Cloud infrastructure management.",
                "Cloud security and compliance.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
        {
            heading: "Quality Assurance",
            para: [
                "Ensuring the quality of deliverables.",
                "Testing and validation processes.",
                "Continuous improvement methodologies.",
            ],
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/travel/integrated_reservation.webp"
        },
    ]

    return (
        <div
            className='w-full bg-black text-white py-[40px] flex flex-col gap-[30px]'>

            <p className='text-[32px] font-bold w-[90%] 1000px:w-[80%] mx-auto'>
                Giri Info Tech provides independent vendor services for large scale projects.
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

                <ul className='text-[18px] w-full 1000px:w-1/3 pl-[20px] list-disc'>
                    {
                        componentArray[activeComponent].para.map((paraLines, index) => {
                            return (
                                <li key={index}>
                                    {paraLines}
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export default FirstComponent