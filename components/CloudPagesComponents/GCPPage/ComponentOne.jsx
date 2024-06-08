import React from 'react'

const ComponentOne = () => {
    return (
        <div className='w-[90%] 1000px:w-[80%] mx-auto py-[40px]'>

            <div className='w-full flex items-center justify-center gap-[20px] flex-col 1000px:flex-row mt-[40px]'>

                <div className='w-full 1000px:w-[50%] flex flex-col '>

                    <p className='font-bold text-[22px] w-fit'>
                        Scalability
                    </p>

                    <p className='py-[10px]'>
                        <span>GCP provides unparalleled scalability, allowing businesses to expand their resources as their needs grow. Whether it's computing power, storage, or data processing capabilities, GCP's services can scale up or down in real-time. This flexibility ensures that businesses can handle varying workloads without overprovisioning resources, leading to cost savings and improved efficiency.</span>
                    </p>

                </div>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/scalability.jfif"
                    alt=""
                    className='object-cover w-full 1000px:w-1/2 h-auto rounded-[8px]' />

            </div>

            <div className='w-full flex items-center justify-center gap-[20px] mt-[40px] flex-col 1000px:flex-row'>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/security.jfif"
                    alt=""
                    className='object-cover w-full 1000px:w-1/2 h-auto rounded-[8px]' />

                <div className='w-full 1000px:w-[50%] flex flex-col '>

                    <p className='font-bold text-[22px] w-fit'>
                        Security
                    </p>

                    <p className='py-[10px]'>
                        Google has a strong focus on security and invests heavily in ensuring the protection of customer data. GCP offers a comprehensive set of security features, including:
                    </p>

                    <ul className='mt-[10px] list-disc ml-[20px]'>
                        <li>
                            <span className='font-bold'>Identity and Access Management (IAM): </span>
                            <span>Fine-grained control over who can access resources</span>
                        </li>
                        <li>
                            <span className='font-bold'>Encryption: </span>
                            <span>Data in transit and at rest is encrypted by default.</span>
                        </li>
                        <li>
                            <span className='font-bold'>DDoS Protection: </span>
                            <span>GCP's global network infrastructure provides robust DDoS protection, ensuring uptime and availability.</span>
                        </li>
                        <li>
                            <span className='font-bold'>Security Key Enforcement: </span>
                            <span>Multi-factor authentication for an added layer of security.</span>
                        </li>
                        <li>
                            <span className='font-bold'>VPC Service Controls: </span>
                            <span>Allows creation of security perimeters around GCP resources, limiting data exfiltration risks.</span>
                        </li>
                    </ul>

                </div>

            </div>

            <div className='w-full flex items-center justify-center gap-[20px] flex-col 1000px:flex-row mt-[40px]'>

                <div className='w-full 1000px:w-[50%] flex flex-col '>

                    <p className='font-bold text-[22px] w-fit'>
                        Flexibility
                    </p>

                    <p className='py-[10px]'>
                        <span>GCP offers flexibility in terms of services, operating systems, and programming languages. Businesses can choose from a wide array of services like Compute Engine, App Engine, Kubernetes Engine, and more, tailored to meet specific requirements. Additionally, GCP supports various operating systems and provides support for popular programming languages, enabling businesses to run their applications in a familiar environment.</span>
                    </p>

                </div>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/flexibility.jfif"
                    alt=""
                    className='object-cover w-full 1000px:w-1/2 h-auto rounded-[8px]' />

            </div>

            <div className='w-full flex items-center justify-center gap-[20px] flex-col 1000px:flex-row mt-[40px]'>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/cloud_infra.jfif"
                    alt=""
                    className='object-cover w-full 1000px:w-1/2 h-auto rounded-[8px]' />

                <div className='w-full 1000px:w-[50%] flex flex-col '>

                    <p className='font-bold text-[22px] w-fit'>
                    Google's Global Infrastructure
                    </p>

                    <p className='py-[10px]'>
                        <span>Google's extensive global network infrastructure is a standout feature of GCP. With data centers strategically located around the world, GCP offers low-latency access to services from anywhere. This global footprint ensures that businesses can deliver their applications and services to customers and users across the globe with minimal delays, enhancing user experience.</span>
                    </p>

                </div>

            </div>

            <div className='w-full flex items-center justify-center gap-[20px] flex-col 1000px:flex-row mt-[40px]'>

                <div className='w-full 1000px:w-[50%] flex flex-col '>

                    <p className='font-bold text-[22px] w-fit'>
                    Reliability
                    </p>

                    <p className='py-[10px]'>
                        <span>GCP is known for its high reliability and availability. Google's infrastructure is designed for redundancy and fault tolerance, minimizing the risk of service disruptions. GCP services are backed by Service Level Agreements (SLAs) that guarantee a certain level of uptime, providing businesses with confidence in the reliability of their applications and data.</span>
                    </p>

                </div>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/reliability.jfif"
                    alt=""
                    className='object-cover w-full 1000px:w-1/2 h-auto rounded-[8px]' />

            </div>

            <div className='w-full flex items-center justify-center gap-[20px] flex-col 1000px:flex-row mt-[40px]'>

                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/gcp/innovation.jfif"
                    alt=""
                    className='object-cover w-full 1000px:w-1/2 h-auto rounded-[8px]' />

                <div className='w-full 1000px:w-[50%] flex flex-col '>

                    <p className='font-bold text-[22px] w-fit'>
                    Innovation and Integration
                    </p>

                    <p className='py-[10px]'>
                        <span>GCP constantly evolves, integrating cutting-edge technologies like machine learning, artificial intelligence, and big data analytics. Businesses can leverage these innovations to gain actionable insights, enhance customer experiences, and stay ahead of the competition.</span>
                    </p>

                </div>

            </div>

        </div>
    )
}

export default ComponentOne