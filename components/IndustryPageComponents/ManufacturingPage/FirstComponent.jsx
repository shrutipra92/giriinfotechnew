import React from 'react'
import { useState } from 'react'

const FirstComponent = () => {

    const [activeComponent, setActiveComponent] = useState(0)

    const componentArray = [
        {
            heading: "Industrial IoT Integration",
            para: "Connect, monitor, and optimize your manufacturing equipment through Industrial Internet of Things (IIoT) solutions. Our expertise in IoT integration enhances real-time data visibility, enabling predictive maintenance, reducing downtime, and improving overall equipment efficiency.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/electronic-health-record.webp"
        },
        {
            heading: "Smart Manufacturing Analytics",
            para: "Leverage the power of data with our advanced analytics solutions. Gain actionable insights into production processes, quality control, and supply chain management. Make informed decisions that drive efficiency, reduce costs, and enhance overall productivity.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_info_exchange.webp"
        },
        {
            heading: "Supply Chain Optimization",
            para: "Streamline your supply chain from end to end. Our IT solutions optimize inventory management, demand forecasting, and supplier collaboration, ensuring that your manufacturing processes are always aligned with market demands.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/telehealth.webp"
        },
        {
            heading: "Robotic Process Automation (RPA)",
            para: "Boost operational efficiency and accuracy by implementing RPA in your manufacturing workflows. From routine data entry tasks to complex process automation, our solutions empower your workforce to focus on high-value activities.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/cyber_health.webp"
        },
        {
            heading: "Cybersecurity for Manufacturing",
            para: "Safeguard your critical manufacturing data and systems with our robust cybersecurity solutions. We understand the unique challenges of the manufacturing industry and provide tailored security measures to protect against cyber threats.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/health_data_analytics.webp"
        },
        {
            heading: "Cloud Manufacturing Solutions",
            para: "Embrace the flexibility and scalability of cloud computing. Our cloud solutions enhance collaboration, facilitate data storage and access, and provide a foundation for digital transformation within your manufacturing operations.",
            image: "https://websiteimagessb.s3.us-west-2.amazonaws.com/mobile_health.webp"
        },
    ]

    return (
        <div
            className='w-full bg-black text-white py-[40px] flex flex-col gap-[30px]'>

            <p className='text-[32px] font-bold w-[90%] 1000px:w-[80%] mx-auto'>
                Revolutionizing Manufacturing Through Smart IT Solutions
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                In the dynamic landscape of manufacturing, embracing innovative IT solutions is no longer a choice; it's a necessity for staying competitive and agile. At Giri Info Tech, we are dedicated to transforming traditional manufacturing processes through our cutting-edge IT services. Explore how our solutions can propel your manufacturing operations into the future.
            </p>

            <p className='text-[26px] w-[90%] 1000px:w-[80%] mx-auto'>
                Our Manufacturing IT Services.
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