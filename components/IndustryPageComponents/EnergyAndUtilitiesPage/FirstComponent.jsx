import React from 'react'
import { useState } from 'react'

const FirstComponent = () => {

    const [activeComponent, setActiveComponent] = useState(0)

    const componentArray = [
        {
            heading: "IoT-enabled Asset Management",
            para: "Optimize asset performance and minimize downtime through our IoT-enabled Asset Management solutions. Monitor equipment in real-time, predict maintenance needs, and extend the lifespan of critical assets.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/iot-enabled.webp"
        },
        {
            heading: "Data Analytics for Predictive Maintenance",
            para: "Harness the power of data analytics to implement predictive maintenance strategies. Identify potential equipment failures before they occur, reduce operational disruptions, and improve overall maintenance efficiency.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/data_analyticsss.webp"
        },
        {
            heading: "Cybersecurity for Critical Infrastructure",
            para: "Safeguard your critical infrastructure against cyber threats with our robust cybersecurity solutions. We provide end-to-end protection, ensuring the integrity and availability of your systems and data.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/cybersecurity.webp"
        },
        {
            heading: "SCADA Systems Integration",
            para: "Integrate Supervisory Control and Data Acquisition (SCADA) systems to enhance real-time monitoring and control of your energy and utility operations. Improve decision-making with comprehensive data visualization and control capabilities.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/scada.webp"
        },
        {
            heading: "Energy Trading and Risk Management (ETRM)",
            para: "Streamline your energy trading operations and manage risks effectively with our ETRM solutions. Gain insights into market trends, optimize trading strategies, and ensure compliance with regulatory requirements.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/energy_trading.webp"
        },
        {
            heading: "Mobile Workforce Solutions",
            para: "Empower your workforce with mobile solutions designed for the energy and utilities sector. Enhance field operations, improve communication, and enable real-time data access for technicians in the field.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/mobile_workforce.webp"
        },
    ]

    return (
        <div
            className='w-full bg-black text-white py-[40px] flex flex-col gap-[30px]'>

            <p className='text-[32px] font-bold w-[90%] 1000px:w-[80%] mx-auto'>
                Powering the Future: IT Solutions for Energy and Utilities
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                In the dynamic landscape of the Energy and Utilities industries, leveraging cutting-edge technology is imperative for staying competitive, efficient, and sustainable. At Giri Info Tech, we specialize in delivering innovative IT solutions designed to empower your business in the energy and utilities sectors.
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                Our IT Services for the Energy and Utilities Industries.
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