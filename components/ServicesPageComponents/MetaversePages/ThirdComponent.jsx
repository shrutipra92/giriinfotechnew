import React, { useState } from 'react'

const ThirdComponent = () => {

  const [showAllServices, setShowAllServices] = useState(false)

  const serviceArray = [
    {
      heading: 'Virtual Worlds',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/virtual-reality-g.png',
      para: 'We can create and manage virtual worlds where users can explore, interact, and engage with digital environments. These virtual worlds can be diverse, ranging from fantasy realms and futuristic cities to historical recreations and educational simulations.',
      link: ''
    },
    {
      heading: 'Avatars',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/man.png',
      para: 'Users typically have customizable avatars that represent them in the virtual environment. We often offer tools and options for users to create unique avatars, allowing for self-expression and personalization.',
      link: ''
    },
    {
      heading: 'Social Interaction',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/interaction.png',
      para: 'Central to the Metaverse is the ability for users to socialize and interact with others. This includes features such as text chat, voice chat, video conferencing, and even gesture-based communication to make interactions more lifelike.',
      link: ''
    },
    {
      heading: 'Entertainment',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/popcorn.png',
      para: 'The Metaverse offers various forms of entertainment, including live events, concerts, movie screenings, virtual sports, and interactive games. we may host or facilitate these events and experiences.',
      link: ''
    },
    {
      heading: 'Economy and Commerce',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/cash.png',
      para: 'Virtual economies within the Metaverse allow users to buy, sell, and trade digital assets, virtual real estate, clothing for avatars, and more. We  develop and maintain these economic systems.',
      link: ''
    },
    {
      heading: 'User-Created Content',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/content-marketing.png',
      para: 'Users often have the ability to create and upload content, such as virtual objects, environments, clothing, or even entire experiences. We provide the infrastructure for content creation and sharing.',
      link: ''
    },
    {
      heading: 'Education and Training',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/presentation.png',
      para: 'The Metaverse can be used for educational purposes, including virtual classrooms, training simulations, and immersive learning experiences. we offer tools and services for educational institutions and businesses.',
      link: ''
    },
    {
      heading: 'Healthcare and Therapy',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/healthcare.png',
      para: 'Some Metaverse applications are designed for telehealth services, therapy sessions, and mental health support. We can facilitate secure and private virtual healthcare experiences.',
      link: ''
    },
    {
      heading: 'Virtual Real Estate',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/building.png',
      para: 'We sell or lease virtual land and properties within the Metaverse, allowing users and organizations to establish a presence and create unique experiences.',
      link: ''
    },
    {
      heading: 'Content Moderation and Safety',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/website.png',
      para: 'Ensuring a safe and welcoming environment is crucial in the Metaverse. We  implement content moderation and safety measures to prevent harassment, hate speech, and other harmful behavior.',
      link: ''
    },
    {
      heading: 'Integration with Real World',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/integration.png',
      para: 'We offer solutions for integrating the Metaverse with the physical world, such as augmented reality (AR) and mixed reality (MR) experiences, bridging the gap between the digital and physical realms.',
      link: ''
    },
    {
      heading: 'Cross-Platform Compatibility',
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/platforms.png',
      para: 'To maximize accessibility, Metaverse services are often designed to work across various devices and platforms, including PCs, consoles, smartphones, and VR headsets.',
      link: ''
    },
  ]

  return (
    <div className='w-[90%] 1000px:w-[80%] mx-auto py-[30px] flex flex-col items-center justify-center gap-[30px]'>

      <p className='font-[700] text-[42px]'>
        Metaverse Solutions
      </p>

      <div className='w-full grid-cols-1 grid 600px:grid-cols-2 900px:grid-cols-3 gap-x-6 gap-y-8'>

        {
          serviceArray.map((service, index)=>{
            if (!showAllServices){
              return (
                <div 
              className={`w-full px-[16px] py-[25px] border border-primaryColor h-[500px] flex-col items-center justify-evenly hover:shadow-bannerButton transition-all duration-500 ${index>5 ? 'hidden' : 'flex'}`}
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
            }
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

      <button 
      className='text-secondaryColor text-[20px] font-[600]' 
      onClick={()=>setShowAllServices(prev=>!prev)}>
        View {showAllServices? 'Less': 'All'} Services
      </button>

    </div>
  )
}

export default ThirdComponent