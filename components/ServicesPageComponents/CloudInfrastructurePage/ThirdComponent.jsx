import React from 'react'

const ThirdComponent = () => {

    const offerArray = [
        {
            id: 1,
            heading: "Cloud Migration Services",
            paraOne: "We facilitate seamless transitions to the cloud, ensuring minimal disruption to your operations.",
            paraTwo: "Our experts assess your current infrastructure, plan migrations, and execute them efficiently."
        },
        {
            id: 2,
            heading: "Scalability and Flexibility",
            paraOne: "Cloud services allow your IT infrastructure to scale up or down as needed, eliminating the need for overprovisioning.",
            paraTwo: "This flexibility ensures you pay only for the resources you use."
        },
        {
            id: 3,
            heading: "Security and Compliance",
            paraOne: "We implement robust security measures and compliance protocols to safeguard your data and meet industry regulations.",
            paraTwo: "Regular audits and updates keep your infrastructure secure."
        },
        {
            id: 4,
            heading: "Hybrid and Multi-Cloud Solutions",
            paraOne: "Tailoring solutions to your needs, we offer hybrid and multi-cloud strategies to optimize performance and cost-effectiveness.",
            paraTwo: "Leverage the best of various cloud providers."
        },
        {
            id: 5,
            heading: "Disaster Recovery and Backup",
            paraOne: "Protect your data with our disaster recovery and backup solutions.",
            paraTwo: "We ensure business continuity by creating resilient data backup and recovery plans."
        },
        {
            id: 6,
            heading: "Cost Optimization",
            paraOne: "Our services help you optimize cloud costs by monitoring resource usage and recommending cost-saving measures.",
            paraTwo: "Avoid unexpected expenses and stay within budget."
        },
        {
            id: 7,
            heading: "Performance Optimization",
            paraOne: "We fine-tune your cloud infrastructure for optimal performance.",
            paraTwo: "This includes optimizing resource allocation, network configurations, and application performance."
        },
        {
            id: 8,
            heading: "Managed Cloud Services",
            paraOne: "Offload the management of your cloud infrastructure to our experts.",
            paraTwo: "We handle routine maintenance, updates, and monitoring, allowing you to focus on your core business."
        },
        {
            id: 9,
            heading: "Containerization and Microservices",
            paraOne: "Embrace modern development practices with containerization and microservices.",
            paraTwo: "We assist in container orchestration and migration for enhanced agility and scalability."
        },
    ]

    return (
        <div className='w-full py-[30px] flex flex-col gap-[26px]'>

            <p className='font-[600] text-[36px] w-fit mx-auto max-w-[90%]'>
            Our solutions
            </p>

            <div className='w-[90%] 1000px:w-[80%] mx-auto grid grid-cols-1 600px:grid-cols-2 1000px:grid-cols-3 gap-6'>

                {
                    offerArray.map((offer) => {
                        return (

                            <div
                                className='flex flex-col p-[16px] gap-[10px] bg-blueBackground text-white rounded-[6px] cursor-pointer'
                                key={offer.id}>

                                {/* <img src={Icon} alt="" className='w-[40px]' /> */}

                                <p className='font-[600] text-[26px]'>
                                    {offer.heading}
                                </p>

                                <p className='text-[18px]'>
                                    {offer.paraOne}
                                </p>
                                <p className='text-[18px]'>
                                    {offer.paraTwo}
                                </p>

                            </div>

                        )
                    })
                }

            </div>

        </div>
    )
}

export default ThirdComponent