import React from 'react'

const FourthComponent = () => {

    const contentArray = [
        {
            heading: "Our Azure Cloud DevOps Automation Services",
            gridArray: [
                {
                    heading: "Automated Deployment and Configuration:",
                    listArray: [
                        {
                            heading: "Infrastructure as Code (IaC):",
                            description: "Implement IaC principles for scalable, version-controlled infrastructure, ensuring consistent deployments and rapid provisioning."
                        },
                        {
                            heading: "Configuration Management:",
                            description: "Automate configuration tasks for servers, ensuring uniformity across various environments."
                        },
                    ]
                },
                {
                    heading: "Continuous Integration and Delivery (CI/CD):",
                    listArray: [
                        {
                            heading: "Automated Testing:",
                            description: "Implement comprehensive automated testing suites, covering unit tests, integration tests, and performance tests to validate code changes."
                        },
                        {
                            heading: "Continuous Deployment Pipelines:",
                            description: "Design and automate deployment pipelines, ensuring code changes seamlessly move from development to production."
                        },
                    ]
                },
                {
                    heading: "Monitoring and Incident Response:",
                    listArray: [
                        {
                            heading: "Real-time Monitoring:",
                            description: "Set up automated monitoring tools to detect issues instantly and trigger automated responses, minimizing downtime and ensuring system stability."
                        },
                        {
                            heading: "Incident Response Automation:",
                            description: "Automate incident response protocols, enabling rapid identification and resolution of security and operational incidents."
                        },
                    ]
                },
                {
                    heading: "Security and Compliance Automation:",
                    listArray: [
                        {
                            heading: "Automated Security Scans:",
                            description: "Implement automated security scans and compliance checks, identifying vulnerabilities and ensuring adherence to security policies."
                        },
                        {
                            heading: "Policy Enforcement Automation:",
                            description: "Automate the enforcement of security policies, guaranteeing a secure Azure environment that meets industry standards."
                        },
                    ]
                },
            ]
        },
    ]

    return (
        <div className='w-full py-[40px] bg-gray-200'>

            <div
                className='w-[90%] 1000px:w-[80%] mx-auto flex flex-col items-center justify-center gap-[20px]'>

                {
                    contentArray.map((contents, index) => {
                        return (
                            <div className='w-full flex flex-col items-center justify-center gap-[20px]' key={index}>

                                <p className='text-[26px] 700px:text-[32px] font-bold text-center'>
                                    {contents.heading}
                                </p>

                                <div
                                    className='w-full grid grid-cols-1 900px:grid-cols-2 gap-8'>

                                    {
                                        contents.gridArray.map((gridContent) => {
                                            return (
                                                <div className='w-full bg-white p-[16px] rounded-[8px]' key={gridContent.heading}>

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
                        )
                    })
                }

            </div>

        </div>
    )
}

export default FourthComponent