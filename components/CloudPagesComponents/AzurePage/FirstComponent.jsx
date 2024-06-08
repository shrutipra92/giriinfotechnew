import React from 'react'

const FirstComponent = () => {

    const gridArray = [
        {
            heading: "Proactive Threat Detection:",
            listArray: [
                {
                    heading: "Real-time Monitoring:",
                    description: "Our advanced monitoring tools keep a vigilant eye on your Azure environment 24/7, detecting any suspicious activities and potential vulnerabilities."
                },
                {
                    heading: "Threat Intelligence:",
                    description: "We leverage cutting-edge threat intelligence to stay ahead of cybercriminals, enabling proactive measures to thwart attacks before they happen."
                },
            ]
        },
        {
            heading: "Access Control and Identity Management:",
            listArray: [
                {
                    heading: "IAM Configuration:",
                    description: "We fine-tune Identity and Access Management (IAM) policies, ensuring the right individuals have the right level of access, enhancing overall security posture."
                },
                {
                    heading: "Multi-Factor Authentication:",
                    description: "Implementing multi-factor authentication adds an extra layer of security, making unauthorized access nearly impossible."
                },
            ]
        },

        {
            heading: "Data Encryption and Privacy:",
            listArray: [
                {
                    heading: "Data Encryption:",
                    description: "All data, both in transit and at rest, is encrypted using the latest encryption standards, ensuring confidentiality and data integrity."
                },
                {
                    heading: "Privacy Compliance:",
                    description: "We ensure your AWS infrastructure adheres to international privacy regulations, safeguarding customer data and building trust."
                },
            ]
        },
        {
            heading: "Compliance and Governance:",
            listArray: [
                {
                    heading: "Compliance Checks:",
                    description: "We conduct regular compliance assessments, ensuring your AWS environment complies with industry standards and regulations."
                },
                {
                    heading: "Governance Policies:",
                    description: "Implementing strict governance policies ensures that your cloud resources are utilized securely and efficiently."
                },
            ]
        },
        {
            heading: "Incident Response and Disaster Recovery:",
            listArray: [
                {
                    heading: "Rapid Response:",
                    description: "In the event of a security incident, our expert incident response team acts swiftly, minimizing damage and restoring normalcy."
                },
                {
                    heading: "Disaster Recovery Planning:",
                    description: "We create comprehensive disaster recovery plans, ensuring business continuity even in the face of catastrophic events."
                },
            ]
        },
    ]

    return (
        <div className='w-full py-[40px]'>

            <div className='w-[90%] 1000px:w-[80%] mx-auto'>

                <p className='font-bold text-[26px] 700px:text-[32px] w-fit mx-auto'>
                    Azure Cloud Security Services
                </p>

                <p className='text-[18px] text-gray-600 mt-[20px]'>
                    We understand the critical importance of securing your Azure cloud infrastructure. Our Azure Cloud Security Services are meticulously crafted to shield your digital assets, ensuring robust defenses against evolving cyber threats.
                </p>

                <div className='w-full grid grid-cols-1 800px:grid-cols-2 1200px:grid-cols-3 gap-8 mt-[20px]'>

                    {
                        gridArray.map((gridContent, index) => {
                            return (
                                <div className='w-full bg-gray-200 p-[16px] rounded-[8px]' key={index}>

                                    <p className='text-[18px] font-bold'>
                                        {gridContent.heading}
                                    </p>

                                    <ul className='text-[18px] list-disc pl-[20px]'>

                                        {
                                            gridContent.listArray.map((listContent) => {
                                                return (
                                                    <li className='mt-[10px]' key={listContent}>
                                                        <span className='font-bold mr-[6px]'>
                                                            {listContent.heading}
                                                        </span>
                                                        <span>
                                                            {listContent.description}
                                                        </span>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>

                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default FirstComponent