import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FirstComponent = () => {

    const [showFullDetails, setShowFullDetails] = useState([])
    // const [showFullDetailsContent, setShowFullDetailsContent] = useState('')
    // const [showFullDetailsContent, setShowFullDetailsContent] = useState([])

    useEffect(() => {
        const headings = solutionArray.map((solution) => solution.heading);
        setShowFullDetails(headings);

        const intervalId = setInterval(() => {
            handleChangeContent(); // Call the function here
          }, 3000);
        
          return () => clearInterval(intervalId);

    }, []);

    function handleChangeContent() {
        setShowFullDetailsContent((prevContent) => {
          return solutionArray.map((solution, index) => {
            const totalContents = solution.explanationAraay.length;
            const presentContentHeading = prevContent[index];
            const indexOfPresentContentHeading = solution.explanationAraay.findIndex(
              (explanation) => explanation.list === presentContentHeading
            );
            const nextHeading =
              indexOfPresentContentHeading + 1 === totalContents
                ? 0
                : indexOfPresentContentHeading + 1;
            return solution.explanationAraay[nextHeading].list;
          });
        });
      }

    const solutionArray = [
        {
            heading: 'Banking Landscape',
            para: 'To effectively serve the banking industry, We must first understand its unique challenges and opportunities. i.e',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/bankinglandscape.jfif',
            explanationAraay: [
                {
                    list: 'Regulatory Compliance',
                    listContent: 'Banks are heavily regulated, and compliance with financial regulations is paramount.'
                },
                {
                    list: 'Data Security',
                    listContent: 'Protecting sensitive customer data is a top priority for banks, requiring robust cybersecurity measures.'
                },
                {
                    list: 'Digital Transformation',
                    listContent: 'Banks are investing in digital technologies to enhance customer experiences and streamline operations.'
                },
            ]
        },
        {
            heading: 'Tailoring IT Solutions for Banks',
            para: 'Customized IT solutions are essential for addressing the specific needs of banks. Giri Info Tech can provide value by offering',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/trailoringit.jfif',
            explanationAraay: [
                {
                    list: 'Core Banking Systems',
                    listContent: 'Developing and maintaining core banking software that ensures reliability and scalability.'
                },
                {
                    list: 'Security Solutions',
                    listContent: 'Implementing cutting-edge cyber security measures to safeguard against cyber threats.'
                },
                {
                    list: 'Data Analytics',
                    listContent: 'Leveraging data analytics to provide insights that help banks make informed decisions and personalize services for customers.'
                },
                {
                    list: 'Mobile Banking Apps',
                    listContent: 'Designing user-friendly mobile apps that enhance the customer experience.'
                },
                {
                    list: 'Cloud Services',
                    listContent: 'Enabling banks to leverage the cloud for cost-effective and scalable infrastructure solutions.'
                },
            ]
        },
        {
            heading: 'Compliance Expertise',
            para: 'Banks face strict regulatory requirements. Giri Info Tech can excel by providing expertise in',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/complience.jfif',
            explanationAraay: [
                {
                    list: 'Regulatory Compliance Solutions',
                    listContent: 'Offering software and services that automate compliance tasks, reducing manual efforts.'
                },
                {
                    list: 'Audit Support',
                    listContent: 'Assisting banks in preparing for regulatory audits and ensuring they meet compliance standards.'
                },
            ]
        },
        {
            heading: 'Cybersecurity Excellence',
            para: 'In an age of increasing cyber threats, cybersecurity is non-negotiable for banks. Giri Info Tech can differentiate themselves by',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/cyber.jfif',
            explanationAraay: [
                {
                    list: 'Providing Comprehensive Security Solutions',
                    listContent: 'Offering a holistic approach to cybersecurity, including threat detection, incident response, and employee training.'
                },
                {
                    list: 'Staying Ahead of Emerging Threats',
                    listContent: 'Keeping up with the latest cybersecurity trends and adapting to new challenges.'
                },
            ]
        },
        {
            heading: 'Digital Transformation Support',
            para: 'Banks are actively pursuing digital transformation initiatives. Giri Info Tech can be instrumental in',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/digital.jfif',
            explanationAraay: [
                {
                    list: 'Modernizing Legacy Systems',
                    listContent: 'Assisting banks in upgrading their outdated infrastructure and applications.'
                },
                {
                    list: 'Fostering Innovation',
                    listContent: 'Collaborating on innovative projects such as blockchain, AI, and fintech partnerships.'
                },
            ]
        },
        {
            heading: 'Building Trust and Reputation',
            para: 'Establishing trust is paramount in the banking industry. Giri Info Tech focused on',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/trust.jfif',
            explanationAraay: [
                {
                    list: 'Reliability',
                    listContent: 'Consistently delivering high-quality services and solutions.'
                },
                {
                    list: 'Data Privacy',
                    listContent: 'Prioritizing data privacy and adhering to data protection regulations.'
                },
                {
                    list: 'Case Studies and Success Stories',
                    listContent: 'Showcasing past successes in the banking sector to build credibility.'
                },
            ]
        },
    ]
    
    // const [showFullDetailsContent, setShowFullDetailsContent] = useState([solutionArray[0].explanationAraay[0].list,solutionArray[1].explanationAraay[1].list])
    const [showFullDetailsContent, setShowFullDetailsContent] = useState(solutionArray.map((solution,index)=> solutionArray[index].explanationAraay[0].list))
    // console.log(showFullDetailsContent)

    return (
        <div className='w-full bg-black text-white'>
            {
                solutionArray.map((solution, index) => {
                    return (
                        <motion.div
                            className={`w-[90%] 1000px:w-[80%] mx-auto py-[40px] flex ${index % 2 === 0 ? 'flex-col 1000px:flex-row' : 'flex-col-reverse 1000px:flex-row-reverse'} gap-[20px]`}
                            key={index}
                            initial={{
                                opacity: 0,
                                x: -100
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 1
                            }}>

                            <div className='w-full 1000px:w-[50%] h-auto py-[20px] 1000px:py-0 flex flex-col justify-center gap-[30px]'>

                                <p className='text-[36px] font-[600] leading-[40px]'>
                                    {solution.heading}
                                </p>

                                <div className='text-[20px] leading-[30px]'>
                                    <p>{solution.para}</p>

                                    <div className='mt-[12px] flex flex-col gap-[40px]'>
                                        {
                                            solution.explanationAraay.map((explanation) => {
                                                return (
                                                    <div key={explanation.list} className='flex flex-col relative before:absolute before:bottom-[-18px] before:left-0 before:w-full before:h-[1px] before:bg-gray-500'>

                                                        <span 
                                                        className={`font-[600] text-[24px] cursor-pointer ${showFullDetailsContent.includes(explanation.list) ? 'text-white' : 'text-gray-500'} hover:text-white`}>
                                                            {explanation.list} 
                                                        </span>
                                                        {/* <span 
                                                        className={`ml-[20px] my-[10px] ${showFullDetailsContent === explanation.list ? 'block' : 'hidden'}`}>
                                                            {explanation.listContent}
                                                        </span> */}
                                                        <span 
                                                        className={`ml-[20px] my-[10px] text-[18px] leading-[30px] ${showFullDetailsContent.includes(explanation.list) ? 'block' : 'hidden'}`}>
                                                            {explanation.listContent}
                                                        </span>

                                                        <div className={`absolute bottom-[-18px] left-0 h-[1px] bg-primaryColor transition-all duration-[3s] ${showFullDetailsContent.includes(explanation.list) ? 'w-full' : 'w-0'}`} />

                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>


                            </div>

                            <div className='w-full 1000px:w-[50%] flex items-center justify-center'>

                                <img
                                    src={solution.img}
                                    alt=""
                                    className='w-full rounded-[10px]'
                                    style={{
                                        boxShadow: '2px 2px 10px 0px rgba(0,0,0,0.75)'
                                    }} />

                            </div>

                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default FirstComponent