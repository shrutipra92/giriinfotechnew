import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FirstComponent = () => {

    const [showFullDetailsContent, setShowFullDetailsContent] = useState('Hardware and Software Solutions')

    const solutionArray = [
        {
            heading: 'Point-of-Sale (POS) Systems',
            // para: 'To effectively serve the banking industry, We must first understand its unique challenges and opportunities. i.e',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/pos.jfif',
            explanationAraay: [
                {
                    list: 'Hardware and Software Solutions',
                    listContent: 'We provide robust, user-friendly POS hardware and software tailored to the unique needs of retail operations.'
                },
                {
                    list: 'Inventory Management Integration',
                    listContent: 'We integrate POS systems with inventory management software for real-time stock tracking and streamlined sales processes.'
                },
                {
                    list: 'Payment Processing',
                    listContent: 'Ensure secure and efficient payment processing, including support for various payment methods, EMV compliance, and contactless payments.'
                },
            ]
        },
        {
            heading: 'E-commerce Integration',
            // para: 'Customized IT solutions are essential for addressing the specific needs of banks. Giri Info Tech can provide value by offering',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/ecommerce.jfif',
            explanationAraay: [
                {
                    list: 'Website Development',
                    listContent: 'We design and develop customized e-commerce websites that are user-friendly, responsive, and optimized for search engines.'
                },
                {
                    list: 'Online Payment Solutions',
                    listContent: 'we implement secure online payment gateways to facilitate seamless online transactions.'
                },
                {
                    list: 'Inventory Sync',
                    listContent: 'We synchronize online and offline inventory systems for accurate product availability and order fulfillment.'
                },
                {
                    list: 'Customer Experience Enhancement',
                    listContent: 'Enhance the online shopping experience with features like product recommendations, reviews, and easy navigation.'
                },
            ]
        },
        {
            heading: 'Inventory Management',
            // para: 'Banks face strict regulatory requirements. Giri Info Tech can excel by providing expertise in',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/inventory.jfif',
            explanationAraay: [
                {
                    list: 'Inventory Tracking',
                    listContent: 'We implement automated inventory tracking systems to prevent overstocking or understocking, reducing carrying costs and lost sales.'
                },
                {
                    list: 'Reorder Management',
                    listContent: 'We set up automated reorder points and alerts to optimize inventory levels and ensure products are always available.'
                },
                {
                    list: 'Multi-Location Management',
                    listContent: 'Enable retail chains to manage inventory across multiple locations efficiently.'
                },
                {
                    list: 'Barcode and RFID Solutions',
                    listContent: 'We implement barcode and RFID technologies for accurate inventory tracking and theft prevention.'
                },
            ]
        },
        {
            heading: 'Data Analytics and Business Intelligence',
            // para: 'In an age of increasing cyber threats, cybersecurity is non-negotiable for banks. Giri Info Tech can differentiate themselves by',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/dataanlytics.jfif',
            explanationAraay: [
                {
                    list: 'Sales Analytics',
                    listContent: 'We provide data-driven insights into sales trends, customer behavior, and product performance to inform pricing and marketing strategies.'
                },
                {
                    list: 'Customer Segmentation',
                    listContent: 'Segment customer data to create targeted marketing campaigns and personalized shopping experiences.'
                },
                {
                    list: 'Predictive Analytics',
                    listContent: 'Use predictive models to forecast demand, optimize inventory, and plan promotions effectively.'
                },
            ]
        },
        {
            heading: 'Cybersecurity and Data Protection',
            // para: 'Banks are actively pursuing digital transformation initiatives. Giri Info Tech can be instrumental in',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/cybersecurity.jfif',
            explanationAraay: [
                {
                    list: 'Data Encryption',
                    listContent: 'We implement data encryption protocols to safeguard customer and transaction data.'
                },
                {
                    list: 'Security Audits',
                    listContent: 'We conduct regular security audits and vulnerability assessments to identify and mitigate potential threats.'
                },
                {
                    list: 'Payment Card Industry Data Security Standard (PCI DSS) Compliance',
                    listContent: 'Ensure compliance with PCI DSS standards to protect payment card data.'
                },
                {
                    list: 'Employee Training',
                    listContent: 'we train retail staff to recognize and respond to cybersecurity threats.'
                },
            ]
        },
        {
            heading: 'IT Support and Maintenance',
            // para: 'Establishing trust is paramount in the banking industry. Giri Info Tech focused on',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/support.jfif',
            explanationAraay: [
                {
                    list: '24/7 Technical Support',
                    listContent: 'We offer round-the-clock technical support to address any IT issues promptly.'
                },
                {
                    list: 'System Upgrades',
                    listContent: 'Keep retail systems up to date with software updates and hardware maintenance to minimize downtime.'
                },
                {
                    list: 'Remote Monitoring',
                    listContent: 'We implement remote monitoring solutions to proactively identify and resolve IT issues before they impact operations.'
                },
            ]
        },
        {
            heading: 'Cloud Solutions',
            // para: 'Establishing trust is paramount in the banking industry. Giri Info Tech focused on',
            img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/cloud.jfif',
            explanationAraay: [
                {
                    list: 'Cloud-Based POS',
                    listContent: 'We offer cloud-based POS systems for scalability, data accessibility, and remote management.'
                },
                {
                    list: 'Data Backup and Recovery',
                    listContent: 'We implement cloud-based data backup and disaster recovery solutions to protect critical business data.'
                },
                {
                    list: 'E-commerce Hosting',
                    listContent: 'We provide reliable and secure cloud hosting for e-commerce websites.'
                },
            ]
        },
    ]

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
                                    {/* <p>{solution.para}</p> */}

                                    <div className='mt-[12px] flex flex-col gap-[40px]'>
                                        {
                                            solution.explanationAraay.map((explanation) => {
                                                return (
                                                    <div key={explanation.list} className='flex flex-col relative before:absolute before:bottom-[-18px] before:left-0 before:w-full before:h-[1px] before:bg-gray-500'>

                                                        <span 
                                                        className={`font-[600] text-[24px] cursor-pointer ${showFullDetailsContent === explanation.list ? 'text-white' : 'text-gray-500'} hover:text-white`}
                                                        onClick={()=>{ setShowFullDetailsContent(explanation.list) }}>
                                                            {explanation.list} 
                                                        </span>
                                                        {/* <span 
                                                        className={`ml-[20px] my-[10px] ${showFullDetailsContent === explanation.list ? 'block' : 'hidden'}`}>
                                                            {explanation.listContent}
                                                        </span> */}
                                                        <span 
                                                        className={`ml-[20px] my-[10px] text-[18px] leading-[30px] ${showFullDetailsContent === explanation.list ? 'block' : 'hidden'}`}>
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