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
            heading: 'Our Core GCP Services',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/gcp_cloud.jfif',
            explanationAraay: [
                {
                    list: 'Compute Engine',
                    listContent: 'Scalable and flexible virtual machines.'
                },
                {
                    list: 'App Engine',
                    listContent: 'Platform for building scalable web applications.'
                },
                {
                    list: 'Kubernetes Engine',
                    listContent: 'Managed Kubernetes for containerized applications.'
                },
                {
                    list: 'Cloud Storage',
                    listContent: 'Secure and scalable object storage.'
                },
                {
                    list: 'BigQuery',
                    listContent: 'Serverless, highly scalable, and cost-effective multi-cloud data warehouse.'
                },
            ]
        },
        {
            heading: 'Our GCP Security Features',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/cloud_security.jfif',
            explanationAraay: [
                {
                    list: 'Identity and Access Management (IAM)',
                    listContent: 'Fine-grained access control.'
                },
                {
                    list: 'Security Command Center',
                    listContent: 'Security and data risk platform.'
                },
                {
                    list: 'VPC Service Controls',
                    listContent: 'Security perimeters around GCP resources.'
                },
            ]
        },
        {
            heading: 'Data Management and Analytics',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/gcp_analytics.jfif',
            explanationAraay: [
                {
                    list: 'Bigtable',
                    listContent: 'NoSQL database for large analytical and operational workloads.'
                },
                {
                    list: 'Pub/Sub',
                    listContent: 'Scalable messaging service for event-driven systems.'
                },
                {
                    list: 'Dataflow',
                    listContent: 'Stream and batch processing for big data pipelines.'
                },
            ]
        },
        {
            heading: 'AI and Machine Learning',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/gcp_ai.jfif',
            explanationAraay: [
                {
                    list: 'AI Platform',
                    listContent: 'Build, deploy, and scale ML models.'
                },
                {
                    list: 'Vision AI',
                    listContent: 'Derive insights from images and videos.'
                },
                {
                    list: 'Natural Language AI',
                    listContent: 'Analyze text and extract insights.'
                },
            ]
        },
        {
            heading: 'DevOps and Tools',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/gcp_devops.jfif',
            explanationAraay: [
                {
                    list: 'Cloud Build',
                    listContent: 'Continuous integration and delivery platform.'
                },
                {
                    list: 'Cloud Source Repositories',
                    listContent: 'Private Git repositories hosted on GCP.'
                },
                {
                    list: 'Monitoring and Logging',
                    listContent: 'Monitor, troubleshoot, and optimize performance.'
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