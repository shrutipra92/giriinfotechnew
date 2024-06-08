import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import { useCaseArrayContent, trustedCompanyArray, MLAISolutions, advantagesArray, companyServeArrays, useCaseArray, extendedCapabilities } from './MLandAIResources';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '@/components/Footer/Footer';
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon';
import Navbar from '@/components/Navbar/Navbar';

const MlAndAiPage = () => {
    const [expandMore, setExpandMore] = useState(0)
    const [activeUseCaseArrayId, setActiveUseCaseArrayId] = useState(0)
    const [useCaseArrayContentData, setUseCaseArrayContentData] = useState(useCaseArrayContent[activeUseCaseArrayId])

    useEffect(() => {
        setUseCaseArrayContentData(useCaseArrayContent[activeUseCaseArrayId])
    }, [activeUseCaseArrayId])

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />

            <div 
            className='w-full h-[70vh] relative flex items-center text-white'>

                <img
                    src="https://www.bacancytechnology.com/main-boot-5/images/aiml-img/banner-2.webp"
                    alt=""
                    className='absolute top-0 left-0 z-[-1] w-full h-full object-cover'
                />

                <div className='flex flex-col ml-[20px] 500px:ml-[60px] 1000px:ml-[160px] gap-[30px] w-[500px]'>

                    <p className='font-[600] text-[30px] 900px:text-[38px]'>
                        AI and ML Services
                    </p>

                    <p className='font-[500] text-[16px]'>
                    We empower machines to see, hear, and learn. Our AI engineers combine artificial and natural intelligence to create real-world AI solutions. Meanwhile, our ML developers merge data science with modern engineering, going beyond numbers to build innovative machine learning systems.
                    </p>

                    <p className='bg-primaryColor px-[30px] py-[10px] w-fit font-[500] text-[18px]'>
                        Learn More
                    </p>

                </div>

            </div>

            <div className='w-full flex items-center justify-center flex-col py-[50px]'>

                <div className='w-[90%] 1000px:w-[80%] 1600px:w-[60%] flex flex-col py-[50px]'>

                    <p className='font-[500] text-[30px] 700px:text-[38px] w-full mx-auto'>
                    Collaborate with the Leading AI ML Development Company
                    </p>

                    <p className='mt-[20px] text-[18px] w-full mx-auto'>
                    We are a highly trusted and dependable AI and ML company, dedicated to delivering AI and ML services that prioritize human-centricity, tangible outcomes, and practical solutions. Our expertise is accessible to businesses of all sizes and industries. Our team of AI engineers and ML developers excels at identifying AI opportunities and removing obstacles, enabling the creation of forward-thinking, innovation-powered, and exceptionally intelligent business solutions.

                    </p>

                    <p className='mt-[26px] text-[18px] w-full mx-auto'>
                    We harness the most cutting-edge tools and technologies to craft tailored ML models that align with your preferences and objectives. Our mission is to guide you in the creation and implementation of ML models and algorithms that elevate your decision-making processes. Through our AI and ML services, we are committed to equipping our clients with the capabilities needed to navigate the challenges of disruption and enhance resilience in adapting to the evolving business landscape. If you have a vision for an AI/ML project, we are here to collaborate with you and transform it into a tangible reality."


                    </p>

                    <button className='text-primaryColor border-primaryColor border-[1px] w-fit px-[30px] py-[10px] mt-[26px]'>
                        CONNECT WITH US
                    </button>

                </div>

                <div className='flex items-center justify-evenly flex-col gap-[20px] 1200px:flex-row w-[90%] 1000px:w-[80%] 1600px:w-[60%] mx-auto'>

                    <div className='w-full 1200px:w-1/2'>

                        <p className='font-[500] text-[26px] leading-[42px]'>
                            AI and ML Services
                        </p>

                        <div className='mt-[20px] flex w-full items-center justify-left'>

                            <button className='w-fit px-[30px] py-[10px] border-[1px] border-primaryColor text-primaryColor ml-[20px]'>
                            PROFICIENCY
                            </button>

                            <button className='text-white bg-primaryColor px-[30px] py-[10px] w-fit border-[1px] border-primaryColor ml-[20px]'>
                                CASE STUDIES
                            </button>

                        </div>

                    </div>

                    <div className='w-full 1200px:w-1/2 flex flex-col gap-[20px]'>

                        {
                            MLAISolutions.map((box) => {
                                return (
                                    <div key={box.id} className='bg-[#f1f2fd] p-[20px] rounded-[10px]'>

                                        <div
                                            className='cursor-pointer w-full flex items-center justify-between font-[600] text-[26px]'
                                            onClick={() => { setExpandMore(box.id) }}
                                            onDoubleClick={()=>{ setExpandMore(0) }}>

                                            <span>{box.heading}</span>
                                            <ExpandMoreIcon className={`${expandMore === box.id && 'rotate-180'}`} />

                                        </div>

                                        <div className={`transition-all duration-500 ${expandMore === box.id ? 'h-fit opacity-1' : 'h-0 opacity-0'} px-[15px] text-[18px] mt-[10px]`}>
                                        We offer comprehensive machine learning solutions to harness the power of data for informed decision-making. Our services encompass data analysis, model development, and implementation, helping businesses leverage predictive analytics, recommendation systems, and automation to achieve their goals efficiently
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

            <div className='w-full flex flex-col gap-[20px] items-center justify-center py-[50px] bg-gray-200'>

                <p className='text-[32px] 700px:text-[42px] font-[600]'>
                    Our Capabilities
                </p>

                <div className='flex items-center flex-col 1200px:flex-row gap-[20px] justify-between w-[90%] 700px:w-[80%] 1600px:w-[60%]'>

                    {
                        extendedCapabilities.map((capability) => {
                            return (
                                <div
                                    className='w-[300px] flex items-center justify-between px-[14px] py-[26px] text-primaryColor bg-white hover:text-white hover:bg-primaryColor transition-all duration-500 text-[18px] cursor-pointer'
                                    key={capability.id}>

                                    <p>
                                        {capability.tag}
                                    </p>

                                    <ArrowForwardIcon />

                                </div>
                            )
                        })
                    }

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default MlAndAiPage