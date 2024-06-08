import React, { useState } from 'react'

const ThisdComponent = () => {

  const [showAllServices, setShowAllServices] = useState(false)

  const serviceArray = [
    {
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/virtual-reality.png',
      heading: 'Application Development',
      para: 'We develop custom AR/VR applications for customer based on their specific requirements. This could include creating immersive gaming experiences, interactive training modules, virtual tours, or simulations for various industries.',
      link: ''
    },
    {
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/conversation.png',
      heading: 'Consulting Services',
      para: 'We offer consulting services to help businesses understand how AR/VR can benefit . Assess their needs, provide recommendations, and create a roadmap for integrating AR/VR into their operations.',
      link: ''
    },
    {
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/user.png',
      heading: 'Platform Development',
      para: 'We build AR/VR platforms or solutions that can be used across different devices and operating systems. This could include developing for popular AR/VR hardware like Oculus Rift, HTC Vive, or mobile AR platforms like ARKit and ARCore.',
      link: ''
    },
    {
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/platform.png',
      heading: 'Integration Services',
      para: 'We help customers integrate AR/VR solutions with their existing systems and technologies. This may involve connecting AR/VR applications to databases, content management systems, or e-commerce platforms and many more.',
      link: ''
    },
    {
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/front-development.png',
      heading: 'User Experience (UX) Design',
      para: 'We give special attention to UX design for AR/VR applications. Ensuring an intuitive and user-friendly interface is essential for creating enjoyable and effective experiences.',
      link: ''
    },
    {
      img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/online-education.png',
      heading: 'Training and Education',
      para: 'We offer training programs and workshops for clients to help them understand how to use AR/VR applications effectively. This can be especially valuable for industries like healthcare, Aviation and education.',
      link: ''
    },
  ]

  return (
    <div className='w-[90%] 1000px:w-[80%] mx-auto py-[30px] flex flex-col items-center justify-center gap-[30px]'>

      <p className='font-[700] text-[42px]'>
        VR, AR Solutions
      </p>

      <p className='font-[500] text-[24px] leading-[26px] text-gray-600 text-center'>
      Giri Info Tech, we are trailblazers in the virtual reality realm, dedicated to creating highly interactive, immersive, and enlightening industry experiences. Our team of in-house experts, coupled with our relentless pursuit of cutting-edge technology, sets us apart from the rest of the virtual reality landscape.
      </p>

      <p className='font-[500] text-[24px] leading-[26px] text-gray-600 text-center'>
      Giri Info Tech: Crafting Virtual Realities, Elevating Experiences
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

                <a className='cursor-pointer text-secondaryColor text-[20px] font-[600]'>
                  Know More
                </a>

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

                <a className='cursor-pointer text-secondaryColor text-[20px] font-[600]'>
                  Know More
                </a>

              </div>
            )
          })
        }

      </div>

      {/* <button 
      className='text-secondaryColor text-[20px] font-[600]' 
      onClick={()=>setShowAllServices(prev=>!prev)}>
        View {showAllServices? 'Less': 'All'} Services
      </button> */}

    </div>
  )
}

export default ThisdComponent