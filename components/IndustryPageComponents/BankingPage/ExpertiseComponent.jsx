import React from 'react'

const ExpertiseComponent = () => {

    const serviceArray = [
        {
          heading: 'Strategic IT Consulting',
          img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/service.png',
          para: 'We provide strategic IT consulting services to help banks develop and implement technology strategies aligned with their business goals. Our team of experts can assess your current IT infrastructure, identify areas for improvement, and create a roadmap for success.',
        },
        {
          heading: 'Cybersecurity Solutions',
          img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/cyber-security.png',
          para: 'Protecting sensitive financial data is paramount. We offer robust cybersecurity solutions, including threat detection, vulnerability assessments, and proactive incident response to safeguard your bank from cyber threats.',
        },
        {
          heading: 'Data Management',
          img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/data-science.png',
          para: 'Banks deal with vast amounts of data daily. Our data management solutions ensure data accuracy, availability, and compliance with industry regulations. We help banks harness the power of data analytics for informed decision-making.',
        },
        {
          heading: 'Cloud Integration',
          img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/data-integration.png',
          para: 'Embrace the scalability and efficiency of cloud computing. We assist banks in migrating to cloud platforms securely, enabling them to reduce costs and enhance operational agility.',
        },
        {
          heading: 'Digital Transformation',
          img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/manufacturing.png',
          para: 'Stay ahead of the curve by embracing digital transformation. We help banks streamline their operations, improve customer experiences, and launch innovative digital services.',
        },
        {
          heading: 'IT Infrastructure Optimization',
          img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/infrastructure.png',
          para: 'Ensure your IT infrastructure is reliable and high-performing. We offer infrastructure optimization services to minimize downtime and maximize efficiency.',
        },
      ]

  return (
    <div className='w-[90%] 1000px:w-[80%] mx-auto py-[30px] flex flex-col items-center justify-center gap-[30px]'>

      <p className='text-[36px] font-[600] leading-[40px]'>
        Our experties
      </p>

      <div className='w-full grid-cols-1 grid 600px:grid-cols-2 900px:grid-cols-3 gap-x-6 gap-y-8'>

        {
          serviceArray.map((service, index)=>{
            return (
              <div 
              className={`w-full px-[16px] py-[25px] border border-primaryColor h-[500px] flex flex-col items-center justify-evenly hover:shadow-bannerButton transition-all duration-500`}
              key={index}>

                <img src={service.img} alt="" className='w-[100px]' />

                <p className='font-[600] text-[32px] text-center'>
                  {service.heading}
                </p>

                <p className='text-[18px] leading-[20px] text-gray-600 text-center'>
                  {service.para}
                </p>

              </div>
            )
          })
        }

      </div>

    </div>
  )
}

export default ExpertiseComponent