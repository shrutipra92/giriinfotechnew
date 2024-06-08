import React from 'react'

const ExpertiseComponent = () => {

    const serviceArray = [
        {
          heading: 'Tailored Solutions for Retail',
          img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/store.png',
          para: "We don't believe in one-size-fits-all. Every retailer has its unique identity, and we create bespoke IT solutions that align with your brand's ethos and goals. Whether you're a boutique store or a global retail giant, our expertise scales to meet your needs.",
        },
        {
          heading: 'End-to-End Retail Expertise',
          img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/experience.png',
          para: "Our comprehensive suite of services covers every facet of retail IT. From intuitive point-of-sale (POS) systems and robust inventory management to seamless e-commerce integration, we're your trusted partner at every touchpoint of the customer journey.",
        },
        {
          heading: 'Data-Driven Retail Intelligence',
          img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/brain.png',
          para: 'In the data-driven age, insights are gold. We harness the power of data analytics to provide you with actionable intelligence that helps you make informed decisions, optimize operations, and craft personalized customer experiences.',
        },
        {
          heading: 'Fortified Data Security',
          img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/retail/personal.png',
          para: "With cyber threats evolving daily, your business's security is our top priority. We implement state-of-the-art cybersecurity measures to safeguard your data and customer trust.",
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