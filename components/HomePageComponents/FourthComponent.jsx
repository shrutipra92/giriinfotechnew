import React, { useEffect, useRef, useState } from 'react'

const FourthComponent = () => {
    let scrl = useRef(null);
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
  
    const certificationsArray = [
      {
        id: 1,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech1.png'
      },
      {
        id: 2,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech2.png'
      },
      {
        id: 3,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech3.png'
      },
      {
        id: 4,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech4.png'
      },
      {
        id: 6,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech6.png'
      },
      {
        id: 7,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech7.png'
      },
      {
        id: 8,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech8.png'
      },
      {
        id: 9,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech9.png'
      },
      {
        id: 10,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech10.png'
      },
      {
        id: 11,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech11.png'
      },
      {
        id: 12,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech12.png'
      },
      {
        id: 13,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech13.png'
      },
      {
        id: 14,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech14.png'
      },
      {
        id: 15,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech15.png'
      },
      {
        id: 16,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech16.png'
      },
      {
        id: 17,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech17.png'
      },
      {
        id: 18,
        img: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Technologies/tech18.png'
      },
    ]
  
    return (
      <div className='w-full h-[260px] 500px:h-[400px] bg-white flex flex-col items-center justify-center gap-[50px]'>
  
        <div className='text-[20px] 500px:text-[40px] font-[600] text-primaryColor w-fit'>Technologies</div>
  
        <div 
        className='w-full flex items-center overflow-scroll NoScrollBar scroll-smooth' 
        ref={scrl} 
        onScroll={scrollCheck} 
        style={{
            scrollbarWidth: 'none'
        }}>
  
          {
            certificationsArray.map((certificate) => {
              return (
                <img
                  src={certificate.img}
                  alt="b"
                  className='h-[100px] mx-[10px] p-[20px] bg-gray-100'
                  key={certificate.id}
                />
              )
            })
          }
  
        </div>
  
      </div>
    )
}

export default FourthComponent