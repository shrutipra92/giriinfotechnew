import React from 'react'

const SecondComponent = () => {
  return (
    <div className='w-[90%] 1000px:w-[80%] mx-auto py-[50px] flex flex-col 1000px:flex-row'>

        <div className='w-full 1000px:w-[50%] flex flex-col justify-center gap-[30px]'>

            <p className='text-[36px] font-[600] leading-[40px]'>
            About Giri Info Tech - AR/VR Excellence, Delivered
            </p>

            <p className='text-[20px] leading-[22px]'>
            Giri Info Tech has the necessary expertise in AR/VR development, including knowledge of platforms like Unity or Unreal Engine, 3D modeling, and experience with AR/VR hardware such as Oculus Rift, HTC Vive, or ARKit/ARCore for mobile devices
            </p>

            {/* <button 
                className='text-white font-[600] px-[30px] py-[10px] w-fit rounded-full'
                style={{
                    backgroundImage: 'linear-gradient(90deg, rgba(236,27,36,1) 0%, rgba(253,117,123,1) 100%)'
                }}>
                    CONTACT US
                </button> */}

        </div>

        <div className='w-full 1000px:w-[50%]'>

            <img 
            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/v7.jfif" 
            alt=""
            className='w-full object-cover rounded-[6px]' />

        </div>

    </div>
  )
}

export default SecondComponent