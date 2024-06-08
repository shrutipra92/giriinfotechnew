import React, { useState } from 'react'

const SeventhComponent = () => {
    const [hover, setHover] = useState(false)

    return (
        <div className='w-full 1200px:h-[400px] 900px:h-[500px] 700px:h-[700px] h-[800px] relative flex flex-col gap-[20px] justify-center'>

            <img
                src="https://websiteimagessb.s3.us-west-2.amazonaws.com/home/ar_home.webp"
                alt=""
                className='w-full h-full object-cover absolute top-0 left-0 z-[-1] opacity-75'
            />

            <p className='font-[700] 500px:text-[40px] text-[26px] text-white 500px:leading-[44px] leading-[28px] 1000px:w-[80%] w-[90%] mx-auto'>
            AR/VR Metaverse Services for Unparalleled Digital Experiences
            </p>

            <p className='1000px:w-[80%] w-[90%] text-white 500px:text-[22px] text-[18px] leading-[24px] mx-auto'>
            The AR/VR metaverse represents an exciting frontier for businesses and individuals seeking immersive digital experiences. We are offering AR/VR metaverse services play a pivotal role in shaping this transformative landscape. Whether it's enhancing education, reimagining commerce, or revolutionizing collaboration, the metaverse presents boundless opportunities.
            </p>

            <div className="mx-auto w-[90%] 1000px:w-[80%]">
                <button
                    className={`relative uppercase tracking-[0.25em] text-[16px] 1000px:text-lg w-[180px] 1000px:w-[260px] h-[60px] rounded-[5px] transition-all duration-300 cursor-pointer before:absolute before:right-0 before:top-0 before:bg-[#fb4b02] before:transition-all before:duration-300 before:shadow-bannerButton before:h-0 before:w-[2px] after:absolute after:right-0 after:top-0 after:bg-[#fb4b02] after:transition-all after:duration-300 after:shadow-bannerButton after:w-0 after:h-[2px] hover:before:h-full hover:after:w-full `}
                    onMouseEnter={() => { setHover(true) }}
                    onMouseLeave={() => { setHover(false) }}
                    style={{
                        boxShadow: 'inset 2px 2px 2px 0px rgba(255,255,255,.5),7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1)',
                        background: !hover ? 'linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%)' : 'white'
                    }}>

                    <div
                        className={`w-[180px] 1000px:w-[260px] h-[60px] relative before:absolute after:absolute before:left-0 after:left-0 before:bottom-0 after:bottom-0 before:bg-[#fb4b02] after:bg-[#fb4b02] before:transition-all after:transition-all before:duration-300 after:duration-300 before:shadow-bannerButton after:shadow-bannerButton before:w-[2px] before:h-0 after:h-[2px] after:w-0 hover:before:h-[60px] hover:after:w-[180px] hover:after:1000px:w-[260px] flex items-center justify-center text-white hover:text-[#fb4b02]`}>
                        Know More
                    </div>

                </button>
            </div>

        </div>
    )
}

export default SeventhComponent