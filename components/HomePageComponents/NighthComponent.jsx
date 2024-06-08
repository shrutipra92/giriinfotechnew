import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const NighthComponent = () => {
    let scrl = useRef(null);
    const [swiper, setSwiper] = useState()
    const [scrollX, setScrollX] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  
    const slide = (deltaX) => {
      scrl.current.scrollLeft += deltaX;
      setScrollX(scrl.current.scrollLeft);
    };
  
    const scrollCheck = () => {
      setScrollX(scrl.current.scrollLeft);
      if (scrl.current.scrollLeft === 0) {
        setScrollDirection(1);
      } else if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setScrollDirection(-1);
      }
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        slide(scrollDirection * 300);
      }, 2000);
  
      return () => {
        clearInterval(interval);
      };
    }, [scrollDirection]);

    function handleNext() {
        swiper.slideNext();
    }
    function handlePrev() {
        swiper.slidePrev();
    }

    const partnerArray = [
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/1.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/2.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/5555.jpeg",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/Air_Botswana_logo.svg.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/mediaaaa.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/appinnnn.svg",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/noidainternational.jpeg",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/indigo.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/1591171753344.jpeg",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/1200px-BHEL_logo.svg.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/576.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/kalpataru.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/ersrs.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/pi.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/vistara.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/45.jpeg",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/56.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/295219712_o.jpg",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/nec.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/dhgdh.png",
        "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/aarav-solutions-logo-1.png",
        // "https://websiteimagessb.s3.us-west-2.amazonaws.com/Logos/airindia.png",
    ]

    return (
        <div
            className='w-full py-[50px]'>

            <p className='text-[20px] 500px:text-[40px] font-[600] text-primaryColor w-fit mx-auto mb-[40px]'>
                Our Partners
            </p>

            {/* <div className='w-full flex justify-center gap-[20px] flex-col 700px:flex-row'>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    autoplay={{ delay: 2000 }}
                    onSwiper={(swiper) => {
                        setSwiper(swiper)
                    }}>

                    {
                        partnerArray.map((imageLink, index) => {
                            return (
                                <SwiperSlide
                                    className='w-[200px] bg-gray-200 shadow-xl p-[20px] box-content rounded'
                                    key={index}>
                                    <div
                                        className='w-full h-[150px] flex items-center justify-center'>
                                        <img
                                            src={imageLink}
                                            alt=""
                                            className='w-[200px]' />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

            </div> */}

            <div 
        className='w-full flex items-center overflow-scroll NoScrollBar scroll-smooth' 
        ref={scrl} 
        onScroll={scrollCheck} 
        style={{
            scrollbarWidth: 'none'
        }}>
  
          {
            partnerArray.map((certificate, index) => {
              return (
                <img
                  src={certificate}
                  alt="b"
                  className='h-[100px] mx-[10px] p-[20px] bg-gray-100'
                  key={index}
                />
              )
            })
          }
  
        </div>

            {/* <div
                className='w-full p-[40px] flex items-center justify-end gap-[20px]'>

                <div
                    className='w-[40px] h-[40px] flex items-center justify-center border-[2px] border-black rounded-full cursor-pointer'
                    onClick={()=>{ handlePrev() }}>
                    <KeyboardArrowLeftIcon />
                </div>

                <div
                    className='w-[40px] h-[40px] flex items-center justify-center border-[2px] border-black rounded-full cursor-pointer'
                    onClick={()=>{ handleNext() }}>
                    <KeyboardArrowRightIcon />
                </div>

            </div> */}

        </div>
    )
}

export default NighthComponent