import React from 'react'
import { useState } from 'react'

const FirstComponent = () => {

    const [activeComponent, setActiveComponent] = useState(0)

    const componentArray = [
        {
            heading: "Integrated Supply Chain Management",
            para: "Seamlessly manage your supply chain from end to end with our integrated solutions. Optimize inventory control, demand forecasting, and order fulfillment to enhance overall operational efficiency.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/electronic-health-record.webp"
        },
        {
            heading: "Warehouse Management Systems (WMS)",
            para: "Improve warehouse productivity with our advanced Warehouse Management Systems. Real-time inventory tracking, automated order processing, and intelligent routing ensure optimal use of resources and faster order fulfillment.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_info_exchange.webp"
        },
        {
            heading: "Route Optimization and Fleet Management",
            para: "Maximize the efficiency of your transportation network with our route optimization and fleet management solutions. Reduce fuel costs, minimize delivery times, and enhance overall fleet performance.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/telehealth.webp"
        },
        {
            heading: "Real-Time Tracking and Visibility",
            para: "Empower your clients with real-time tracking and visibility into their shipments. Our solutions leverage the latest technologies, including GPS and IoT, to provide accurate, up-to-the-minute information on shipment status.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/cyber_health.webp"
        },
        {
            heading: "Supply Chain Analytics",
            para: "Make data-driven decisions with our supply chain analytics tools. Gain insights into key performance indicators, identify areas for improvement, and optimize your logistics processes for maximum effectiveness.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_data_analytics.webp"
        },
        {
            heading: "Customized Mobile Applications",
            para: "Enhance communication and coordination within your logistics operations through custom mobile applications. From driver communication to inventory management, our apps are tailored to your specific needs.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/mobile_health.webp"
        },
    ]

    return (
        <div
            className='w-full bg-black text-white py-[40px] flex flex-col gap-[30px]'>

            <p className='text-[32px] font-bold w-[90%] 1000px:w-[80%] mx-auto'>
                Revolutionize Logistics with Cutting-Edge IT Solutions
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                In the fast-paced world of logistics, efficiency and precision are paramount. At Giri Info Tech we specialize in providing innovative IT solutions tailored to meet the unique challenges of the logistics industry. From streamlined supply chain management to real-time tracking solutions, we are your trusted partner in transforming logistics operations.
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                Our Logistics IT Services.
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