import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const ThirdComponent = () => {

    const [activeHeadingIndex, setActiveHeadingIndex] = useState(0)
    const [hover, setHover] = useState(false)

    const headingArray = [
        {
            // icon: <AcUnitIcon className='text-blue-400' />,
            heading: "IT Consulting",
            contentArray: [
                "Strategic IT planning and consulting.",
                "Technology assessments and recommendations.",
                "IT project management.",
            ],
            imageLink: "https://websiteimagessb.s3.us-west-2.amazonaws.com/home/consulting.webp",
            route: "/ContactUs"
        },
        {
            // icon: <AcUnitIcon className='text-blue-400' />,
            heading: "Software Development",
            contentArray: [
                "Custom software development.",
                "Application design and maintenance.",
                "Mobile app development.",
                "Integration with existing systems.",
            ],
            imageLink: "https://websiteimagessb.s3.us-west-2.amazonaws.com/home/software_dev.webp",
            route: "/ContactUs"
        },
        {
            // icon: <AcUnitIcon className='text-blue-400' />,
            heading: "Cloud Services",
            contentArray: [
                "Cloud infrastructure setup and management.",
                "Migration of on-premise systems to the cloud.",
                "Cloud security and compliance services.",
                "Integration with popular cloud platforms like AWS, Azure, or Google Cloud.",
            ],
            imageLink: "https://websiteimagessb.s3.us-west-2.amazonaws.com/home/cloud_service.webp",
            route: "/Services/Cloud_Infrastructure"
        },
        {
            // icon: <AcUnitIcon className='text-blue-400' />,
            heading: "Business Intelligence and Analytics",
            contentArray: [
                "Data analysis and reporting.",
                "Business intelligence solutions.",
                "Data warehousing.",
            ],
            imageLink: "https://websiteimagessb.s3.us-west-2.amazonaws.com/home/analysis.webp",
            route: "/ContactUs"
        },
        {
            // icon: <AcUnitIcon className='text-blue-400' />,
            heading: "IT Infrastructure Planning",
            contentArray: [
                "Design and planning for scalable and efficient IT infrastructure.",
                "Technology refresh planning.",
            ],
            imageLink: "https://websiteimagessb.s3.us-west-2.amazonaws.com/home/it_infra.webp",
            route: "/ContactUs"
        },
        {
            // icon: <AcUnitIcon className='text-blue-400' />,
            heading: "AI/ML Services",
            contentArray: [
                "Assessing clients' business needs and identifying opportunities for AI/ML integration.",
                "Developing a roadmap for implementing AI/ML solutions.",
                "Building custom machine learning models tailored to specific business requirements.",
                "Developing algorithms for predictive analytics, natural language processing, and computer vision.",
                "Data collection, cleaning, and preprocessing for AI model training.",
                "Implementing data analytics solutions for insights and decision-making.",
                "Developing neural networks for tasks such as image recognition, speech recognition, and natural language understanding.",
                "Integrating AI solutions into existing business processes and systems.",
                "Developing APIs and interfaces for seamless integration.",
            ],
            imageLink: "https://websiteimagessb.s3.us-west-2.amazonaws.com/home/ai_ml.webp",
            route: "/Services/MachineLearningAndArtificialIntelligence"
        },
        {
            // icon: <AcUnitIcon className='text-blue-400' />,
            heading: "AR/VR Services",
            contentArray: [
                "Creating immersive virtual reality experiences for training, simulation, or entertainment purposes.",
                "Developing augmented reality applications for enhancing real-world experiences.",
                "Designing 3D models, animations, and interactive content for virtual and augmented reality environments.",
                "Creating AR applications for mobile devices, smart glasses, and other AR-enabled devices.",
                "Integrating AR/VR solutions with compatible hardware, such as headsets, motion controllers, and haptic feedback devices.",
                "Developing VR-based training modules for industries like healthcare, manufacturing, and aviation.",
                "Simulating real-world scenarios for training purposes.",
                "Providing ongoing support, updates, and maintenance for AR/VR applications.",
                "Troubleshooting and resolving issues related to hardware or software components.",
                "Designing intuitive and user-friendly interfaces for AR/VR applications.",
                "Optimizing user experience to ensure seamless interaction.",
            ],
            imageLink: "https://websiteimagessb.s3.us-west-2.amazonaws.com/home/ARVRMETA.webp",
            route: "/Services/Argument_Reality_And_Virtual_Reality"
        },
    ]

    const [activeHeading, setActiveHeading] = useState(headingArray[activeHeadingIndex])

    useEffect(() => {
        setActiveHeading(headingArray[activeHeadingIndex])
    }, [activeHeadingIndex])

    return (
        <div className='w-full py-[40px] bg-gray-200'>

            <div
                className='w-[90%] 1000px:w-[80%] mx-auto flex flex-col items-center justify-center gap-[30px]'>

                <p className='text-[20px] 500px:text-[40px] font-[600] text-primaryColor'>
                    Our Services
                </p>

                <p className='text-[20px] text-center'>
                    Our services may be tailored to meet the specific needs of clients in various industries, and IT service companies often work closely with their clients to understand their unique challenges and provide customized solutions.
                </p>

                <div
                    className='w-full flex gap-[10px] flex-col 1000px:flex-row'>

                    <div className='w-full 1000px:w-[30%] flex flex-col gap-[16px]'>

                        {
                            headingArray.map((headingContents, index) => {
                                return (
                                    <div
                                        className={`flex gap-[6px] items-center ${activeHeadingIndex === index && 'border-[#005f82] border-b-[2px] bg-white rounded-[4px]'} h-[60px] cursor-pointer`}
                                        key={index}
                                        onClick={() => { setActiveHeadingIndex(index) }}>

                                        {/* <div className='w-[40px] h-[40px] bg-blue-200 rounded-full flex items-center justify-center ml-[6px]'>
                                            {headingContents.icon}
                                        </div> */}

                                        <p className='text-[#005f82] font-bold ml-[10px]'>
                                            {headingContents.heading}
                                        </p>

                                    </div>
                                )
                            })
                        }

                    </div>

                    <div
                        className='w-full 1000px:w-[70%] overflow-hidden rounded-[10px] border-[#005f82] border-[2px] p-[30px] flex flex-col gap-[16px] bg-white'>

                        {/* <p className='text-[20px] font-bold'>
                            Lorem, ipsum dolor.
                        </p> */}

                        <ul className='list-disc pl-[20px]'>
                            {
                                activeHeading.contentArray.map((listContent) => {
                                    return (
                                        <li key={listContent}>
                                            {listContent}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div
                            className='w-full bg-[#005f82] p-[20px] rounded-[10px]'>

                            <img
                                src={activeHeading.imageLink}
                                alt="top image component"
                                className='w-full rounded-[10px]' />

                        </div>

                        <Link href={`${activeHeading.route}`}>
                            <button
                                className={`relative uppercase tracking-[0.25em] text-[16px] 1000px:text-lg w-[180px] 1000px:w-[260px] h-[60px] rounded-[5px] transition-all duration-300 cursor-pointer before:absolute before:right-0 before:top-0 before:bg-[#fb4b02] before:transition-all before:duration-300 before:shadow-bannerButton before:h-0 before:w-[2px] after:absolute after:right-0 after:top-0 after:bg-[#fb4b02] after:transition-all after:duration-300 after:shadow-bannerButton after:w-0 after:h-[2px] hover:before:h-full hover:after:w-full `}
                                onMouseEnter={() => { setHover(true) }}
                                onMouseLeave={() => { setHover(false) }}
                                style={{
                                    boxShadow: 'inset 2px 2px 2px 0px rgba(255,255,255,.5),7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1)',
                                    background: !hover ? 'linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%)' : 'white'
                                }}>

                                <div
                                    className={`w-[180px] 1000px:w-[260px] h-[60px] relative before:absolute after:absolute before:left-0 after:left-0 before:bottom-0 after:bottom-0 before:bg-[#fb4b02] after:bg-[#fb4b02] before:transition-all after:transition-all before:duration-300 after:duration-300 before:shadow-bannerButton after:shadow-bannerButton before:w-[2px] before:h-0 after:h-[2px] after:w-0 hover:before:h-[60px] hover:after:w-[180px] hover:after:1000px:w-[260px] flex items-center justify-center text-white hover:text-[#fb4b02]`}>
                                    Know More
                                </div>

                            </button>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ThirdComponent