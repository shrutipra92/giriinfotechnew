import React from 'react'

const SeventhComponent = () => {

    const gridArray = [
        {
            heading: "Automated Deployment:",
            listArray: [
                {
                    heading: "Effortless Rollouts:",
                    description: "We automate deployment processes, enabling effortless and error-free rollouts of new features, updates, and patches."
                },
                {
                    heading: "Continuous Integration:",
                    description: "Our continuous integration pipelines ensure code changes are automatically integrated, tested, and validated, promoting collaboration among development teams."
                },
            ]
        },
        {
            heading: "Infrastructure as Code (IaC):",
            listArray: [
                {
                    heading: "Scalable Architecture:",
                    description: "We implement Infrastructure as Code principles, allowing for the creation of scalable and reproducible infrastructure on AWS."
                },
                {
                    heading: "Version Control:",
                    description: "IaC enables version-controlled infrastructure, ensuring consistency and traceability in your AWS environment configurations."
                },
            ]
        },
        {
            heading: "Monitoring and Feedback Loops:",
            listArray: [
                {
                    heading: "Real-time Monitoring:",
                    description: "We integrate robust monitoring tools to provide real-time insights into application performance, enabling proactive issue resolution."
                },
                {
                    heading: "Feedback Loops:",
                    description: "Continuous feedback loops facilitate iterative improvements, ensuring your applications evolve in response to changing user needs and market demands."
                },
            ]
        },
        {
            heading: "Security and Compliance Automation:",
            listArray: [
                {
                    heading: "Automated Security Checks:",
                    description: "We automate security scans and compliance checks, identifying vulnerabilities and ensuring your AWS environment adheres to security best practices."
                },
                {
                    heading: "Security Policy Automation:",
                    description: "Automated enforcement of security policies guarantees a secure AWS architecture, protecting your data and applications."
                },
            ]
        },
        {
            heading: "Automated Testing:",
            listArray: [
                {
                    heading: "Comprehensive Testing:",
                    description: "Our automated testing frameworks cover unit tests, integration tests, and performance tests, ensuring the reliability and functionality of your applications."
                },
                {
                    heading: "Regression Testing:",
                    description: "Automated regression tests verify new code changes, ensuring they do not adversely impact existing features."
                },
            ]
        },
    ]

    return (
        <div
            className='w-full mx-auto py-[40px] bg-cover bg-no-repeat min-h-[90vh] max-h-fit bg-blend-normal'
            style={{
                // backgroundImage: `url('https://websiteimagessb.s3.us-west-2.amazonaws.com/c9.jfif')`
            }}>

            <div
                className='w-[90%] 1000px:w-[80%] flex flex-col items-center justify-center gap-[20px] mx-auto'>

                {/* <div
                className='text-[12px] font-bold text-primaryColor border border-primaryColor rounded-full px-[10px] py-[6px] w-fit'>
                    CLOUD MIGRATION
                </div> */}

                <p
                    className='font-bold text-[26px] 700px:text-[32px] text-center'>
                    AWS Cloud DevOps Automation
                </p>

                <p
                    className='text-[18px] text-center'>
                    We empower businesses with AWS Cloud DevOps Automation, a transformative approach that streamlines development, fosters collaboration, and ensures the continuous delivery of high-quality applications.
                </p>

                <div className='w-full grid grid-cols-1 800px:grid-cols-2 1200px:grid-cols-3 gap-8'>

                    {
                        gridArray.map((gridContent, index) => {
                            return (
                                <div 
                                className='w-full p-[20px] rounded-[8px] border-[2px] border-primaryColor cursor-pointer hover:shadow-bannerButton transition-all duration-500' 
                                key={index}>

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

export default SeventhComponent