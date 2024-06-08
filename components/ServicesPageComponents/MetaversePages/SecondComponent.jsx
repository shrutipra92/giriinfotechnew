import React from 'react'

const SecondComponent = () => {
  return (
    <div className='w-[90%] 1000px:w-[80%] mx-auto py-[50px] flex flex-col 1000px:flex-row'>

        <div className='w-full 1000px:w-[50%] h-[340px] flex justify-center items-center'>

            <p className='text-[20px] leading-[22px]'>
            We are offerings and experiences within a virtual, interconnected, and immersive world. Metaverse refers to a collective virtual shared space, often facilitated by the internet, where users can interact with each other and digital objects in real-time.
            </p>

        </div>

        <div className='w-full 1000px:w-[50%]'>

            <img 
            src="https://websiteimagessb.s3.us-west-2.amazonaws.com/meta1.jfif" 
            alt=""
            className='w-full object-cover rounded-[6px]' />

        </div>

    </div>
  )
}

export default SecondComponent