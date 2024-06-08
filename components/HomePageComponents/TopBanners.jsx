import React, { useState } from 'react'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Image from 'next/image';

const TopBanners = () => {
    const [hover, setHover] = useState(false)

    const [slider, setSlider] = useState(3)

    function handleSlider() {
        if (slider !== 4) {
            setSlider(slider + 1)
        } else {
            setSlider(0)
        }
    }

    const swiperSlides = [
        {
            id: 0,
            pageHeading: 'Elevating Businesses through Digital Evolution',
            bgImage: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/digital_transdormation.webp',
            pageSubHeading: 'Digital Transformation',
            routes: 'Services/DigitalTransformation',
            videoBanner: "https://websiteimagessb.s3.us-west-2.amazonaws.com/video/digital.mp4"
        },
        {
            id: 1,
            pageHeading: 'Elevating Businesses: Your Gateway to Seamless Cloud Solutions',
            bgImage: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/cloud.jfif',
            pageSubHeading: 'Cloud Services',
            routes: 'Services/Cloud_Infrastructure'
        },
        {
            id: 2,
            pageHeading: 'Bringing Your Imagination to Life: Virtual Reality Redefined',
            bgImage: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/arvr.webp',
            pageSubHeading: 'Virtual Reality',
            routes: 'Services/Argument_Reality_And_Virtual_Reality',
            videoBanner: "https://websiteimagessb.s3.us-west-2.amazonaws.com/video/ar-vr-2-vid.mp4"
        },
        {
            id: 3,
            pageHeading: 'Bridging the Physical and Digital Worlds',
            bgImage: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/iot_banner.webp',
            pageSubHeading: 'Internet of Things',
            routes: 'Services/InternetOfThings'
        },
        {
            id: 4,
            pageHeading: 'Transforming Data into Intelligent Insights: Your AI Data Engineering Partner',
            bgImage: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/ai.webp',
            pageSubHeading: 'AI Data Engineering',
            routes: 'Services/MachineLearningAndArtificialIntelligence',
            videoBanner: "https://websiteimagessb.s3.us-west-2.amazonaws.com/video/ai.mp4"
        },
    ]

    return (
        <main className='1000px:h-[90vh] h-[95vh] w-full relative'>

            <Swiper
                className={`Swiper h-full w-full relative`}
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                // autoplay={true}
                autoplay={{ delay: 7000 }}
                onSlideChange={(e) => { handleSlider() }}

            // onSlideNextTransitionStart={(e)=>{console.log()}}
            >

                {
                    swiperSlides.map((slides) => {
                        return (

                            <SwiperSlide
                                key={slides.id}
                                className={`w-full h-full bg-cover bg-no-repeat flex items-center 1000px:items-center relative `}
                                style={{
                                    backgroundImage: `url('${slides.bgImage}')`
                                }}>

                                {
                                    slides.videoBanner &&
                                    <video autoPlay={true} loop={true} muted={true} playsInline={true} className='absolute w-full h-full object-cover top-0 left-0 z-[1]'>
                                        <source src={slides.videoBanner} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                }

                                <div className='absolute left-[5vw] top-1/2 -translate-y-1/2 z-10'>

                                    <p className='500px:w-[50vw] w-[80vw] text-[26px] 1000px:text-[36px] font-[600] text-[white]'>
                                        {slides.pageHeading}
                                    </p>
                                    {/* <Link to={`/${slides.routes}`}> */}
                                        <div className="flex justify-center w-fit items-center mt-5">
                                            <Link href={`/${slides.routes}`}
                                                className={`relative uppercase tracking-[0.25em] text-[16px] 1000px:text-lg w-[180px] 1000px:w-[260px] h-[60px] rounded-[5px] transition-all duration-300 cursor-pointer before:absolute before:right-0 before:top-0 before:bg-[#fb4b02] before:transition-all before:duration-300 before:shadow-bannerButton before:h-0 before:w-[2px] after:absolute after:right-0 after:top-0 after:bg-[#fb4b02] after:transition-all after:duration-300 after:shadow-bannerButton after:w-0 after:h-[2px] hover:before:h-full hover:after:w-full `}
                                                onMouseEnter={() => { setHover(true) }}
                                                onMouseLeave={() => { setHover(false) }}
                                                style={{
                                                    boxShadow: 'inset 2px 2px 2px 0px rgba(255,255,255,.5),7px 7px 20px 0px rgba(0,0,0,.1),4px 4px 5px 0px rgba(0,0,0,.1)',
                                                    background: !hover ? 'linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%)' : 'white'
                                                }}>

                                                <div
                                                    className={`w-[180px] 1000px:w-[260px] h-[60px] relative before:absolute after:absolute before:left-0 after:left-0 before:bottom-0 after:bottom-0 before:bg-[#fb4b02] after:bg-[#fb4b02] before:transition-all after:transition-all before:duration-300 after:duration-300 before:shadow-bannerButton after:shadow-bannerButton before:w-[2px] before:h-0 after:h-[2px] after:w-0 hover:before:h-[60px] hover:after:w-[180px] hover:after:1000px:w-[260px] flex items-center justify-center text-white hover:text-[#fb4b02]`}>
                                                    Know more
                                                </div>

                                            </Link>
                                        </div>
                                    {/* </Link> */}

                                </div>

                                <img
                                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/aws_batch.jpg"
                                    alt=""
                                    className={`absolute right-[20px] 500px:right-[100px] bottom-[50px] 500px:bottom-[100px] z-10 w-[100px] 500px:w-[120px] ${slides.id !== 1 && "hidden"}`} />

                            </SwiperSlide>

                        )
                    })
                }

            </Swiper>

            <div className='slider h-[40px] 1000px:h-[100px] absolute bottom-0 left-0 right-0 m-auto z-10 flex items-center justify-center gap-[30px] '>

                {
                    swiperSlides.map((slideStatus) => {
                        return (
                            <div
                                className='h-full w-[60px] 500px:w-[100px] 900px:w-[200px] flex flex-col items-center justify-evenly cursor-pointer'
                                key={slideStatus.id}>
                                <div className='text-white 900px:text-[14px] text-[8px] hidden 500px:block'>{slideStatus.pageSubHeading}</div>
                                <div className={`w-full relative bg-gray-500 h-1 rounded-lg before:content-[''] before:w-full before:h-1 before:bg-white before:absolute before:top-0 before:left-0 before:transition-all ${slider === slideStatus.id ? "before:scale-x-1 before:duration-[7000ms]" : "before:scale-x-0 before:duration-0"} before:origin-left ease-linear`} />
                            </div>
                        )
                    })
                }

            </div>

        </main>
    )
}

export default TopBanners