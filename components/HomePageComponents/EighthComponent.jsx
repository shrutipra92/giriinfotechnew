import React from 'react'

const EighthComponent = () => {
    const background = 'https://websiteimagessb.s3.us-west-2.amazonaws.com/d51faf548f.jpeg'

    return (
      <div className='py-[50px] w-full '>
  
          <div 
          className='w-[96%] 1000px:w-[80%] mx-auto bg-cover bg-no-repeat bg-blend-multiply bg-[#005f82] text-white px-[20px] 900px:px-[50px] py-[80px] rounded-[50px] flex flex-col items-center gap-[50px]'
          style={{
              backgroundImage: `url(${background})`
          }}>
  
              <div className='font-[600] text-[26px] 500px:text-[32px] 900px:text-[42px]'>
              Power of Giri Info Tech people and technology
              </div>
  
              <div className='w-full grid grid-cols-1 500px:grid-cols-2 1000px:grid-cols-3 gap-8'>
  
                  <div className='w-full flex flex-col items-center justify-center'>
  
                      <div className='text-[36px] 900px:text-[50px] font-[600] leading-[38px] 900px:leading-[52px]'>50+</div>
                      <div className='font-[600] text-[16px] 700px:text-[18px]'>Employees</div>
  
                  </div>
  
                  <div className='w-full flex flex-col items-center justify-center'>
  
                      <div className='text-[36px] 900px:text-[50px] font-[600] leading-[38px] 900px:leading-[52px]'>2+</div>
                      <div className='font-[600] text-[16px] 700px:text-[18px]'>Countries</div>
  
                  </div>
  
                  <div className='w-full flex flex-col items-center justify-center'>
  
                      <div className='text-[36px] 900px:text-[50px] font-[600] leading-[38px] 900px:leading-[52px]'>500+</div>
                      <div className='font-[600] text-[16px] 700px:text-[18px]'>Customers in globe</div>
  
                  </div>
  
                  {/* <div className='w-full flex flex-col items-center justify-center'>
  
                      <div className='text-[36px] 900px:text-[50px] font-[600] leading-[38px] 900px:leading-[52px]'>6.5+<span className='text-[16px]'>USD</span></div>
                      <div className='font-[600] text-[16px] 700px:text-[18px]'>Billion total revenue</div>
  
                  </div> */}
  
              </div>
  
              <div className='text-[16px] 700px:text-[18px] font-[600]'>
              At Giri Info Tech, our commitment to delivering an exceptional customer experience is unwavering. We understand that in the ever-evolving IT landscape, providing top-tier service isn't just a choice; it's a necessity. Our dedication to your success drives us to continuously innovate, adapt, and exceed your expectations.
              </div>
  
          </div>
  
      </div>
    )
}

export default EighthComponent