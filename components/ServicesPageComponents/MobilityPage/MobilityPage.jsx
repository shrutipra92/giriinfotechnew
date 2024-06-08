import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import MobilityData from './Mobility.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '@/components/Footer/Footer';
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon';
import Navbar from '@/components/Navbar/Navbar';

const MobilityPage = () => {
    const [expandState, setExpandState] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const strategyArray = [
        {
            heading: "Assessment and Needs Analysis:",
            content: "Begin by assessing the organization's current mobile capabilities and identifying specific mobility needs. Understand how mobile technology can improve workflow, communication, and productivity."
        },
        {
            heading: "Define Clear Objectives:",
            content: "Establish well-defined objectives for mobilizing the workforce. These objectives should align with overall business goals. Common objectives include improving employee efficiency, enhancing customer interactions, and reducing operational costs."
        },
        {
            heading: "Select Appropriate Mobile Solutions:",
            content: "Choose the right mobile devices and applications that align with the organization's needs. This may include smartphones, tablets, mobile apps, and collaboration tools. Ensure that these solutions are user-friendly and compatible with existing systems."
        },
        {
            heading: "Security and Compliance:",
            content: "Develop a comprehensive security strategy to protect sensitive data on mobile devices. Implement encryption, secure authentication methods, and mobile device management (MDM) solutions. Ensure compliance with relevant data protection regulations."
        },
        {
            heading: "Training and Skill Development:",
            content: "Provide training and resources to help employees adapt to mobile technology effectively. Ensure that they understand the benefits and best practices for mobile device usage."
        },
        {
            heading: "Integration with Existing Systems:",
            content: "Integrate mobile solutions with existing IT infrastructure, including legacy systems, CRM software, and databases. This seamless integration ensures data consistency and accessibility."
        },
        {
            heading: "Pilot Testing:",
            content: "Conduct pilot tests with a small group of employees to identify potential challenges and gather feedback. Use this feedback to refine the mobile strategy."
        },
        {
            heading: "Scalability and Flexibility:",
            content: "Build a mobile strategy that is scalable and adaptable to changing business needs. Consider future technologies and trends to ensure long-term relevance."
        },
        {
            heading: "Continuous Improvement:",
            content: "Establish a process for continuous improvement. Regularly evaluate the effectiveness of mobile solutions and make necessary adjustments. Stay updated with advancements in mobile technology."
        },
        {
            heading: "Monitoring and Analytics:",
            content: "Implement monitoring tools and analytics to track the performance and usage of mobile solutions. Use data-driven insights to make informed decisions and optimize the strategy."
        },
        {
            heading: "User Support and Helpdesk:",
            content: "Offer ongoing user support through a dedicated helpdesk or support team. Ensure that employees have access to assistance when they encounter issues with mobile devices or applications."
        },
        {
            heading: "Communication and Change Management:",
            content: "Communicate the benefits of mobile technology and the overall strategy to all employees. Implement change management practices to facilitate a smooth transition to the mobile workforce."
        },
    ]

    const workforceArray = [
        {
            heading: "Identify Inefficient Processes:",
            content: "Start by conducting a thorough analysis of your existing processes. Identify bottlenecks, redundancies, and areas where efficiency can be improved. Engage employees at all levels to gather insights into their day-to-day work and pain points."
        },
        {
            heading: "Set Clear Objectives:",
            content: "Define specific, measurable, and achievable objectives for process improvement. Determine what you aim to achieve through increased efficiency, such as reducing turnaround times, minimizing errors, or optimizing resource allocation."
        },
        {
            heading: "Establish a Cross-Functional Team:",
            content: "Create a dedicated team comprising members from different departments or areas of expertise. This cross-functional team should be responsible for evaluating, redesigning, and implementing process improvements."
        },
        {
            heading: "Map Current Processes:",
            content: "Document your current processes through flowcharts, diagrams, or process mapping software. This visual representation will help identify areas for improvement and provide a clear baseline for measurement."
        },
        {
            heading: "Analyze Data:",
            content: "Gather data related to the processes you're looking to improve. Analyze this data to identify trends, patterns, and performance metrics. Use data-driven insights to make informed decisions about where to focus your efforts."
        },
        {
            heading: "Brainstorm Solutions:",
            content: "Encourage team members to brainstorm potential solutions and innovations. Consider both incremental improvements and more radical changes that could lead to significant productivity gains."
        },
        {
            heading: "Implement Technology Solutions:",
            content: "Leverage technology to support process improvements. Implement software, tools, or automation solutions that can enhance efficiency, such as workflow management systems or task automation software."
        },
        {
            heading: "Training and Change Management:",
            content: "Provide training and resources to employees to help them adapt to new processes and technologies. Effective change management is crucial to ensure that employees embrace and successfully implement the changes."
        },
    ]

    return (
        <div className='w-full'>

            <Navbar />

            <WhatsAppIcon />

            <div
                className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>

                <img
                    src="https://s6.imgcdn.dev/2gkdl.jpg"
                    alt=""
                    className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                />

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-white font-[700] text-[32px] 700px:text-[42px] text-center w-[60%]'>
                    {MobilityData.Contents.heading.heading1}
                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row'>

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='w-[96%] 700px:w-1/2'>

                    <div className='text-[20px] font-[400] leading-[22px] pt-[20px] w-full'>

                        {
                            MobilityData.Contents.ContentOne.description
                        }

                    </div>

                </motion.div>

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='w-[96%] 700px:w-1/2'>

                    <img
                        src={MobilityData.Contents.ContentOne.image}
                        alt=""
                        className='w-full object-cover rounded-[6px]'
                    />

                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center justify-center 1000px:justify-evenly flex-col 700px:flex-row gap-[20px] bg-gray-200'>

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='w-[96%] 700px:w-1/2'>

                    <img
                        src={MobilityData.Contents.ContentTwo.image}
                        alt=""
                        className='w-full object-cover rounded-[6px]'
                    />

                </motion.div>

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='w-[96%] 700px:w-1/2'>

                    <div className='text-[26px] font-[700] leading-[20px] pt-[20px] text-primaryColor'>
                        {
                            MobilityData.Contents.ContentTwo.description1
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentTwo.description2.list1
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentTwo.description2.list2
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentTwo.description2.list3
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentTwo.description2.list4
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentTwo.description2.list5
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentTwo.description2.list6
                        }
                    </div>

                </motion.div>

            </div>

            <div className='w-full p-[50px] flex items-center 1000px:justify-evenly flex-col 700px:flex-row gap-[20px] bg-gray-200'>

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='w-[96%] 700px:w-1/2'>

                    <div className='text-[26px] font-[700] text-primaryColor leading-[34px]'>
                        {
                            MobilityData.Contents.ContentThree.Title
                        }
                    </div>

                    <div className='text-[18px] font-[600] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentThree.description1
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentThree.description2.list1
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentThree.description2.list2
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentThree.description2.list3
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentThree.description2.list4
                        }
                    </div>
                    <div className='text-[18px] font-[400] leading-[20px] pt-[20px]'>
                        {
                            MobilityData.Contents.ContentThree.description2.list5
                        }
                    </div>

                </motion.div>

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='w-[96%] 700px:w-1/2'>

                    <img
                        src={MobilityData.Contents.ContentThree.image}
                        alt=""
                        className='w-full object-cover rounded-[6px]'
                    />

                </motion.div>

            </div>

            <div className='w-full p-[50px]'>

                {/* <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-[22px] 700px:text-[32px] font-[500] mb-[20px]'>

                    Our Strategy to Mobilize Workforce

                </motion.div> */}

                <div className='flex items-center justify-center gap-[20px] flex-col 1000px:flex-row'>

                    <div className='w-full 1000px:w-[50%] flex items-center justify-center'>

                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/mobility/m6.jfif"
                            alt=""
                            className='w-full 1000px:w-[90%] rounded-[6px]' />

                    </div>

                    <div className='w-full 1000px:w-[50%]'>

                    <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-[22px] 700px:text-[32px] font-[500] mb-[20px]'>

                    Our Strategy to Mobilize Workforce

                </motion.div>

                        {
                            strategyArray.map((strategy, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => { setExpandState(strategy.heading) }}
                                        onDoubleClick={() => { setExpandState('') }}>
                                        <motion.div
                                            initial={{
                                                y: 100,
                                                opacity: 0
                                            }}
                                            whileInView={{
                                                y: 0,
                                                opacity: 1
                                            }}
                                            transition={{
                                                duration: 1
                                            }}
                                            className='text-[18px] 700px:text-[26px] font-[500] mb-[10px] w-full py-[8px] bg-gray-200 px-[10px] flex items-center justify-between cursor-pointer'
                                            style={{
                                                borderRadius: '10px 10px 0px 0px'
                                            }}>

                                            <span>
                                                {strategy.heading}
                                            </span>
                                            <ExpandMoreIcon className={`${expandState === strategy.heading && 'rotate-180'} transition-all duration-500`} />

                                        </motion.div>

                                        {/* <motion.div
                                            className={`text-[16px] 700px:text-[20px] font-[500] mb-[10px] w-full py-[8px] px-[10px] flex items-center justify-between cursor-pointer ${expandState === strategy.heading ? 'h-[100px] opacity-1' : 'h-0 opacity-0'} transition-all duration-500`}>

                                            {strategy.content}

                                        </motion.div> */}
                                        {
                                            expandState === strategy.heading &&
                                            <motion.div
                                                className={`text-[16px] 700px:text-[20px] font-[500] mb-[10px] w-full py-[8px] px-[10px] flex items-center justify-between cursor-pointer h-[100px] opacity-1 transition-all duration-500`}>

                                                {strategy.content}

                                            </motion.div>
                                        }
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

            <div className='w-full bg-[#131315] py-[80px] flex items-center justify-center 700px:justify-evenly gap-[20px] flex-col 700px:flex-row'>

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='w-[96%] 700px:w-1/2 flex flex-col gap-[20px] ml-[10px] 1000px:ml-[100px]'>

                    <p className='text-[22px] text-blue-400'>
                        {
                            MobilityData.Contents.ContentFive.Title
                        }
                    </p>

                    <p className='font-[600] text-white text-[20px]'>
                        {
                            MobilityData.Contents.ContentFive.description
                        }
                    </p>

                </motion.div>

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='mr-[10px] w-[96%] 700px:w-1/2'>

                    <img src={MobilityData.Contents.ContentFive.image} alt="" className='h-[400px]' />

                </motion.div>

            </div>

            <div className='w-full p-[50px]'>

                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-[22px] 700px:text-[32px] font-[500] mb-[20px] w-fit mx-auto'>

                    Elevate Workforce Efficiency through Process Enhancement and Streamlining.

                </motion.div>

                <div className='flex items-center justify-center gap-[20px] flex-col 1000px:flex-row'>

                    <div className='w-full 1000px:w-[50%] flex items-center justify-center'>

                        <img
                            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/mobility/m7.jfif"
                            alt=""
                            className='w-full 1000px:w-[90%] rounded-[6px]' />

                    </div>

                    <div className='w-full 1000px:w-[50%]'>

                    {/* <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-[22px] 700px:text-[32px] font-[500] mb-[20px]'>

                    Elevate Workforce Efficiency through Process Enhancement and Streamlining.

                </motion.div> */}

                        {
                            workforceArray.map((strategy, index) => {
                                return (
                                    <div 
                                    key={index} 
                                    onClick={() => { setExpandState(strategy.heading) }}
                                    onDoubleClick={() => { setExpandState('') }}>
                                        <motion.div
                                            initial={{
                                                y: 100,
                                                opacity: 0
                                            }}
                                            whileInView={{
                                                y: 0,
                                                opacity: 1
                                            }}
                                            transition={{
                                                duration: 1
                                            }}
                                            className='text-[18px] 700px:text-[26px] font-[500] mb-[10px] w-full py-[8px] bg-gray-200 px-[10px] flex items-center justify-between cursor-pointer'
                                            style={{
                                                borderRadius: '10px 10px 0px 0px'
                                            }}>

                                            <span>
                                                {strategy.heading}
                                            </span>
                                            <ExpandMoreIcon className={`${expandState === strategy.heading && 'rotate-180'} transition-all duration-500`} />

                                        </motion.div>

                                        <motion.div
                                            className={`text-[16px] 700px:text-[20px] font-[500] mb-[10px] w-full py-[8px] px-[10px] flex items-center justify-between cursor-pointer ${expandState === strategy.heading ? 'h-[100px] opacity-1' : 'h-0 opacity-0'} transition-all duration-500`}>

                                            {strategy.content}

                                        </motion.div>

                                        {
                                            expandState === strategy.heading &&
                                            <motion.div
                                            className={`text-[16px] 700px:text-[20px] font-[500] mb-[10px] w-full py-[8px] px-[10px] flex items-center justify-between cursor-pointer h-[100px] opacity-1 transition-all duration-500`}>

                                            {strategy.content}

                                        </motion.div>
                                        }
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default MobilityPage