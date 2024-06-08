import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SecondComponent = () => {

    const [showFullDetails, setShowFullDetails] = useState([])

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
            heading: 'Precision Agriculture Solutions',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/pre-ag.webp',
            explanationAraay: [
                {
                    list: 'Maximizing Yield with Data-Driven Insights',
                    listContent: "Our precision agriculture solutions leverage advanced technologies like IoT, sensors, and data analytics to provide farmers with real-time insights into soil health, crop conditions, and weather patterns. This data empowers farmers to make informed decisions, optimize resource usage, and maximize crop yield."
                },
                {
                    list: 'Smart Farming Infrastructure',
                    listContent: 'We design and implement smart farming infrastructure, including automated irrigation systems, drone technology for crop monitoring, and connected machinery. These innovations not only reduce manual labor but also enhance overall farm efficiency.'
                },
            ]
        },
        {
            heading: 'Farm Management Software',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/farmmanagement.webp',
            explanationAraay: [
                {
                    list: 'Seamless Control at Your FingertipsUse Case Scenario',
                    listContent: "Our farm management software streamlines administrative tasks, from crop planning and inventory management to workforce scheduling. With an intuitive interface, farmers can monitor and control various aspects of their operation with ease."
                },
                {
                    list: 'Integration with IoT Devices',
                    listContent: 'Our software seamlessly integrates with IoT devices, allowing for real-time monitoring of equipment, crop health, and environmental conditions. This integration ensures that farmers have instant access to critical information, enabling proactive decision-making.'
                },
            ]
        },
        {
            heading: 'Supply Chain Optimization',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/supplychain.webp',
            explanationAraay: [
                {
                    list: 'Efficient and Transparent Supply Chains',
                    listContent: "We optimize the agricultural supply chain by implementing blockchain technology and advanced logistics solutions. This ensures transparency, traceability, and efficiency from farm to table, fostering trust among consumers and stakeholders."
                },
                {
                    list: 'Marketplace Platforms',
                    listContent: 'Facilitate direct connections between farmers and buyers through our marketplace platforms. By eliminating unnecessary intermediaries, we empower farmers to negotiate fair prices and establish a direct link with consumers.'
                },
            ]
        },
        {
            heading: 'Customized IT Consultancy',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/cutomizedagri.webp',
            explanationAraay: [
                {
                    list: 'Tailored Solutions for Your Unique Needs',
                    listContent: "Every farm is unique, and so are its IT requirements. Our experienced consultants work closely with farmers to understand their specific challenges and goals, developing customized IT strategies that align with their vision for success."
                },
                {
                    list: 'Scalable Solutions for Growth',
                    listContent: "Whether you're a small family farm or a large agribusiness, our solutions are scalable to accommodate your growth. As your operations expand, our IT services grow with you, ensuring a seamless and efficient transition."
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

export default SecondComponent