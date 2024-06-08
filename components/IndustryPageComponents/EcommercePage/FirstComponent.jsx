import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FirstComponent = () => {

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
            heading: 'Managed IT Services',
            para: 'Our Managed IT Services provide proactive, round-the-clock monitoring and maintenance of your IT infrastructure. From servers and networks to devices, we ensure optimal performance and security. With 24/7 helpdesk support, your business stays operational, and issues are resolved swiftly, reducing downtime and enhancing productivity.',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ecom/managed.jfif',
            explanationAraay: [
                {
                    list: 'Use Case Scenario',
                    listContent: "A local retail chain was facing constant disruptions due to IT issues. Our Managed IT Services provided them with 24/7 monitoring and instant support. Result? Downtime reduced by 70%, leading to increased sales and customer satisfaction."
                },
                {
                    list: 'Problem',
                    listContent: 'Downtime and Technical Issues'
                },
                {
                    list: 'Solution',
                    listContent: 'Managed IT Services offer 24/7 monitoring and instant support. By proactively identifying and resolving technical issues, businesses experience minimal downtime. This ensures uninterrupted e-commerce operations, leading to higher customer satisfaction and increased revenue.'
                },
            ]
        },
        {
            heading: 'Cloud Computing Solutions',
            para: 'Experience the flexibility and efficiency of our Cloud Computing Solutions. We offer secure cloud migration, scalable infrastructure, and data management services. Whether you need private, public, or hybrid cloud solutions, we tailor them to fit your business needs, ensuring seamless collaboration and accessibility from anywhere.',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ecom/cloud.jfif',
            explanationAraay: [
                {
                    list: 'Use Case Scenario',
                    listContent: "A growing startup needed scalable infrastructure. Our Cloud Computing Solutions enabled them to expand without heavy upfront costs. By migrating to the cloud, they achieved 50% cost savings and experienced a 30% increase in application performance."
                },
                {
                    list: 'Problem',
                    listContent: 'Scalability and Storage Limitations'
                },
                {
                    list: 'Solution',
                    listContent: 'Cloud Computing provides scalable infrastructure. Businesses can easily scale resources up or down based on demand, ensuring optimal performance during high traffic periods. Additionally, cloud storage eliminates data limitations, allowing businesses to store vast amounts of customer data and product information securely.'
                },
            ]
        },
        {
            heading: 'Cybersecurity Services',
            para: 'Safeguard your digital assets with our comprehensive Cybersecurity Services. We conduct vulnerability assessments, implement robust firewalls, and provide real-time threat detection. Our experts offer employee training to prevent social engineering attacks, ensuring your business data is protected from evolving cyber threats.',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ecom/cybersecurity.jfif',
            explanationAraay: [
                {
                    list: 'Use Case Scenario',
                    listContent: "A medium-sized law firm was concerned about data breaches. Our Cybersecurity Services implemented multi-layered security protocols. As a result, they thwarted a potential cyber attack, safeguarding sensitive client data and preserving their reputation."
                },
                {
                    list: 'Problem',
                    listContent: 'Data Breaches and Customer Trust'
                },
                {
                    list: 'Solution',
                    listContent: 'Cybersecurity Services implement robust security measures, protecting customer data from breaches. By ensuring secure payment gateways, encrypting sensitive information, and conducting regular security audits, businesses build customer trust. A secure e-commerce platform enhances reputation, encouraging more transactions.'
                },
            ]
        },
        {
            heading: 'Network Infrastructure Setup and Optimization',
            para: 'Optimize your network for peak performance. Our Network Infrastructure services include design, setup, and optimization. We analyze your business requirements, recommend hardware and software, and implement secure configurations. Enjoy seamless connectivity, reduced latency, and enhanced data transfer speeds.',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ecom/network.jfif',
            explanationAraay: [
                {
                    list: 'Use Case Scenario',
                    listContent: "A multinational corporation struggled with network congestion. We optimized their network infrastructure, improving data transfer speeds by 40%. Employees experienced seamless collaboration, leading to a 25% increase in project completion rates."
                },
                {
                    list: 'Problem',
                    listContent: 'Slow Website Loading and Connectivity Issues'
                },
                {
                    list: 'Solution',
                    listContent: 'Network optimization enhances website speed and reliability. Fast-loading pages improve user experience, reducing bounce rates and increasing conversions. A well-optimized network also ensures seamless connectivity for employees, enabling efficient management of online orders and customer inquiries.'
                },
            ]
        },
        {
            heading: 'Database Development and Management',
            para: 'Maximize the power of your data with our Database Development and Management services. We design and develop custom databases, ensuring efficient data storage, retrieval, and analysis. Our experts optimize queries, perform regular backups, and implement security protocols, guaranteeing data integrity and compliance.',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ecom/database.jfif',
            explanationAraay: [
                {
                    list: 'Use Case Scenario',
                    listContent: "An e-commerce giant needed a robust database. Our Database Development services created a scalable system. This allowed them to handle a 300% increase in customer data during holiday sales, ensuring uninterrupted online shopping experiences."
                },
                {
                    list: 'Problem',
                    listContent: 'Inefficient Data Handling and Retrieval'
                },
                {
                    list: 'Solution',
                    listContent: 'Custom databases streamline data management. Businesses can efficiently handle customer profiles, purchase histories, and inventory information. Quick data retrieval ensures personalized customer experiences, leading to higher customer satisfaction and repeat purchases.'
                },
            ]
        },
        {
            heading: 'Custom Software Development',
            para: 'Transform your unique ideas into powerful software solutions. Our Custom Software Development services cover the entire development lifecycle. From concept and design to coding, testing, and deployment, we create user-friendly, scalable, and secure applications tailored to your business processes and goals.',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ecom/customsoftware.jfif',
            explanationAraay: [
                {
                    list: 'Use Case Scenario',
                    listContent: "A healthcare provider needed a tailored patient management system. Our Custom Software Development team created an intuitive solution. The result? Streamlined operations, reduced administrative errors by 60%, and improved patient satisfaction scores."
                },
                {
                    list: 'Problem',
                    listContent: 'Limited Functionality and Poor User Experience'
                },
                {
                    list: 'Solution',
                    listContent: 'Custom software addresses unique business needs. Tailored e-commerce solutions offer specific features like personalized product recommendations, easy checkout processes, and interactive interfaces. Enhanced functionality and user experience lead to higher engagement and customer loyalty.'
                },
            ]
        },
        {
            heading: 'IT Consultancy and Strategic Planning',
            para: 'Gain a competitive edge with our IT Consultancy and Strategic Planning services. Our experienced consultants analyze your existing IT infrastructure, identify areas for improvement, and develop a roadmap for technology adoption. Stay ahead of the curve with strategic planning that aligns your IT investments with business objectives.',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ecom/consultancy.jfif',
            explanationAraay: [
                {
                    list: 'Use Case Scenario',
                    listContent: "A struggling startup needed direction. Our IT Consultancy services provided strategic planning. By aligning their technology with business goals, they achieved a 200% increase in customer acquisition and secured funding for their next growth phase."
                },
                {
                    list: 'Problem',
                    listContent: 'Lack of Technological Alignment with Business Goals'
                },
                {
                    list: 'Solution',
                    listContent: 'IT Consultancy aligns technology with business objectives. Strategic planning ensures IT investments support e-commerce growth. Whether it’s integrating CRM systems for better customer management or implementing analytics tools for data-driven decisions, businesses achieve sustainable growth aligned with their vision.'
                },
            ]
        },
        {
            heading: 'Mobile App Development',
            para: 'Extend your reach with our Mobile App Development services. We design and develop cross-platform mobile applications for iOS and Android devices. Our apps are intuitive, visually appealing, and functionally robust. Whether you need customer-facing apps or internal tools, we bring your mobile vision to life.',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ecom/mobileapp.jfif',
            explanationAraay: [
                {
                    list: 'Use Case Scenario',
                    listContent: "A restaurant chain wanted to enhance customer engagement. Our Mobile App Development team built a loyalty app. With features like online ordering and personalized offers, customer retention rates increased by 35%, leading to higher revenue."
                },
                {
                    list: 'Problem',
                    listContent: 'Limited Mobile Accessibility and Engagement'
                },
                {
                    list: 'Solution',
                    listContent: 'Mobile apps enhance accessibility. Customers can browse products, place orders, and receive personalized notifications, fostering engagement. A well-designed app provides a seamless shopping experience, increasing user retention and sales. It caters to the growing mobile consumer base, boosting revenue potential.'
                },
            ]
        },
        {
            heading: 'E-commerce Platform Development',
            para: 'Launch your online store with our E-commerce Platform Development services. We create secure, user-friendly e-commerce websites with intuitive navigation, seamless checkout processes, and responsive design. Our solutions integrate payment gateways, inventory management, and analytics, driving sales and enhancing customer experience.',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ecom/ecommerce_platform.jfif',
            explanationAraay: [
                {
                    list: 'Use Case Scenario',
                    listContent: "A niche online retailer needed a competitive edge. Our E-commerce Platform Development created a seamless shopping experience. They saw a 45% rise in sales due to improved user experience, and their customer base expanded globally."
                },
                {
                    list: 'Problem',
                    listContent: 'Outdated or Inefficient E-commerce Platforms'
                },
                {
                    list: 'Solution',
                    listContent: 'E-commerce Platform Development creates modern, user-friendly platforms. Responsive designs ensure compatibility with various devices, enhancing user experience. Integration of secure payment gateways, intuitive navigation, and robust inventory management systems optimizes the entire sales process, resulting in increased conversions.'
                },
            ]
        },
        {
            heading: 'Search Engine Optimization (SEO) and Digital Marketing',
            para: 'Boost your online visibility and attract organic traffic with our SEO and Digital Marketing services. We conduct in-depth keyword research, optimize on-page and off-page elements, and create compelling content. Our digital marketing strategies encompass social media management, email campaigns, and PPC advertising, driving targeted traffic and increasing conversions.',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ecom/seo.jfif',
            explanationAraay: [
                {
                    list: 'Use Case Scenario',
                    listContent: "A struggling online store needed visibility. Our SEO and Digital Marketing strategies improved their online presence. Organic traffic increased by 70%, and targeted ad campaigns led to a 50% boost in conversions, revitalizing their business."
                },
                {
                    list: 'Problem',
                    listContent: 'Low Online Visibility and Traffic'
                },
                {
                    list: 'Solution',
                    listContent: 'SEO and Digital Marketing increase online visibility. Optimized content and targeted keywords improve search engine rankings, driving organic traffic. Strategic digital marketing campaigns, including social media and PPC advertising, attract a wider audience. Increased visibility leads to higher website traffic, expanding the customer base and boosting sales.'
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