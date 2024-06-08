import React from 'react'
import { motion } from 'framer-motion'
import aviation from './Aviation.json'
import Navbar from '@/components/Navbar/Navbar'
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon'
import Footer from '@/components/Footer/Footer'

const CaseStudy1 = () => {
  return (
    <div className='w-full'>
    <Navbar/>
    <WhatsAppIcon/>
    <div className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>
     <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/industry/aviation.jpeg"
                    alt=""
                    className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                />

                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-white font-[700] text-[32px] 700px:text-[42px] text-left w-[60%]'>
                    {aviation.Contents.heading.heading1}
                </motion.div>
          </div>

          <div className='w-full flex flex-col items-center justify-center py-[40px]'>
          <motion.div
              initial={{
                  x: 0,
                  opacity: 0
              }}
              whileInView={{
                  y: 0,
                  opacity: 1
              }}
              transition={{
                  duration: 1
              }}
              className='text-[40px] text-red-500 text-center font-[600] leading-[40px] w-[90%] 1000px:w-[660px]'>
               Case Study- 1
          </motion.div>

          <motion.div
              initial={{
                  x: 0,
                  opacity: 0
              }}
              whileInView={{
                  y: 0,
                  opacity: 1
              }}
              transition={{
                  duration: 1
              }}
              className='text-[22px] leading-[26px] font-[600] text-center mt-[20px] w-[95%] 1000px:w-[full] px-[30px]'>
              Business Transformation Success Story for Aviation Industry
          </motion.div>
          </div>

          {/*  */}
          <div className='w-[100%] 1000px:w-[100%] mx-auto flex flex-col items-center justify-center pt-[10px]  '>
            <div className='w-full px-[10px] 1000px:px-[50px] py-[20px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row '>
           <div  className='w-[96%] 700px:w-1/2'>
            <div className='text-center text-[30px] font-[600] mb-[40px]'>Our Solutions</div>
           <div className='w-full px-[10px] 1000px:px-[50px]  flex items-center 1000px:justify-evenly justify-center gap-[10px] flex-col 700px:flex-row '>
          <div className='relative'>
            <img 
              src="https://www.magestore.com/wp-content/uploads/2022/10/retail-store-management-process.jpg"
              alt=""
              className='w-[120px] h-[120px]'
            />
            <div className='absolute top-4 left-1 right-1 align-[50px] inset-0 py-2 mx-1 flex justify-center text-center w-fit h-fit z-30 bg-white ' >
            Checking for Any Abnormalities
            </div>
          </div>
          <div className='relative'>
            <img 
              src="https://www.magestore.com/wp-content/uploads/2022/10/retail-store-management-process.jpg"
              alt=""
              className='w-[150px] h-[150px]'
            />
            <div className='absolute top-8 left-1 right-1 align-[50px] inset-0 py-2 mx-3 flex justify-center text-center w-fit h-fit z-30 bg-white ' >
            Engine Normal Automatic Start (LEAP 1A)

            </div>
          </div>
          <div className='relative'>
          <img 
              src="https://etimg.etb2bimg.com/thumb/msid-80976842,imgsize-80958,width-1200,height=765,overlay-etretail/industry/indian-retail-is-at-a-crossroad-and-technology-will-be-the-great-enabler.jpg"
              alt=""
              className='w-[200px] h-[200px]'
              
              />
            <div className='absolute top-14 left-1 right-1 align-[50px] inset-0 py-2 mx-3 flex justify-center text-center w-fit h-fit z-30 bg-white '>
            Engine Oil Servicing, Fuel Tanks, Auxiliary Power Unit (APU), 
          </div>
          </div>
          </div>
          <div className='w-full px-[10px] 1000px:px-[50px] py-[50px] flex items-center 1000px:justify-evenly justify-center gap-[20px] flex-col 700px:flex-row '>
            <div className='relative'>
            <img 
                src="https://cdn.mos.cms.futurecdn.net/vUGGQXBvMLxK65oJegUwgk-1200-80.jpg"
                alt=""
                className='w-[200px] h-[200px]'
            />
            <div className='absolute top-8 left-1 right-0 align-[50px] inset-0 py-2 mx-3  flex justify-center text-center w-fit h-fit z-30 bg-white ' >
            External Walk  Around, Flight Compartments, Passenger Compartments, Cargo Compartments
            </div>
            </div>
            <div className='relative'>
            <img 
                src="https://cdn.mos.cms.futurecdn.net/vUGGQXBvMLxK65oJegUwgk-1200-80.jpg"
                alt=""
                className='w-[150px] h-[150px]'
            />
            <div className='absolute top-8 left-1 right-1 align-[50px] inset-0 py-2 mx-3  flex justify-center text-center w-fit h-fit z-30 bg-white ' >
            Wheel Chocks Installation Procedures
            </div>
            </div>
            <div className='relative'>
            <img 
                src="https://cdn.mos.cms.futurecdn.net/vUGGQXBvMLxK65oJegUwgk-1200-80.jpg"
                alt=""
                className='w-[120px] h-[120px]'
            />
            <div className='absolute top-4 left-1 right-1 align-[50px] inset-0 py-2 mx-3   flex justify-center text-centerw-fit h-fit z-30 bg-white ' >
            Working, Caution and Safety

            </div>
            </div>
          </div>      
          {/*  */}
          
          </div>
        <div  className='w-[96%] 700px:w-1/2 '>
        <div className='text-center text-[22px] font-[600] flex flex-col justify-center]'>RESULTS ACHIEVED</div>
        <div className='w-full px-[10px] 1000px:px-[50px]  flex items-center 1000px:justify-evenly justify-center gap-[80px] flex-col 700px:flex-row  1000px:h-[200px] h-[450px] mt-[10px] '>
          <div className='relative mb-[80px]'>
          <div className='bg-black text-white w-[100px] h-[50px] absolute top-0 text-center flex flex-col justify-center  '>time frame</div>
              <div className='bg-gray-200 w-[100px] h-[50px] absolute top-[50px] text-center flex flex-col justify-center  '>18.75%</div>
            <div className='absolute top-[-40px] left-[-60px] text-center right-20 align-[50px] inset-0 py-2 flex flex-col justify-center w-[80px] h-[80px] z-30 bg-black text-white rounded-full text-[12px]' >
            REDUCED
            </div>
          </div>
          <div className='relative mb-[80px]'>
          <div className='bg-black text-white w-[100px] h-[50px] absolute top-0 text-center flex flex-col justify-center  '>time frame</div>
              <div className='bg-gray-200 w-[100px] h-[50px] absolute top-[50px] text-center flex flex-col justify-center  '>6%</div>
            <div className='absolute top-[-40px] left-[-60px] text-center right-20 align-[50px] inset-0 py-2 flex flex-col justify-center w-[80px] h-[80px] z-30 bg-red-500 text-white rounded-full text-[12px] ' >
            INCREASED

            </div>
          </div>
          <div className='relative mb-[80px]'>
              <div className='bg-black text-white w-[100px] h-[50px] absolute top-0 text-center flex flex-col justify-center  '>time frame</div>
              <div className='bg-gray-200 w-[100px] h-[50px] absolute top-[50px] text-center flex flex-col justify-center  '>28.94%</div>
            <div className='absolute top-[-40px] left-[-60px] text-center right-20 align-[50px] inset-0 py-2 flex flex-col justify-center w-[80px] h-[80px] z-30 bg-black text-white rounded-full text-[12px]'>
            CUT
          </div>
          </div>
        </div>

        
        <div className='text-center text-[22px] font-[600] flex flex-col justify-center ]'>CLIENT’S TESTIMONIAL</div>
        <div className='w-full px-[10px] 1000px:px-[50px]  flex items-center 1000px:justify-evenly justify-center gap-[10px] flex-col 700px:flex-row  1000px:h-[550px] h-fit mt-[10px]  '>


        <div className='relative mb-[8px] w-[250px] h-[300px]'>
              <div className='bg-black text-white w-[150px] h-[50px] absolute top-0 text-center flex flex-col justify-center  '>Engineering Department</div>
              <div className='bg-white w-[150px] h-fit absolute top-[50px] px-2'>
                Working with Giri Info Tech was a game-changer for our engineering team. Our Engineering team now perform all kind of trainings at finger tips.
                </div>
          </div>


          <div className='relative mb-[20px] w-[250px] h-[40vh]'>
              <div className='bg-black text-white w-[150px] h-[50px] absolute top-0 text-center flex flex-col justify-center  '>Training Department</div>
              <div className='bg-white w-[150px] h-fit absolute top-[50px] px-2'>
              Giri Info Tech solutions not only resolved our challenges but also opened new growth opportunities. We streamlined processes, eliminated bottlenecks, andachieved remarkable efficiency gains.
              </div>
          </div>


          <div className='relative mb-[8px] w-[250px] h-[300px] mt-40'>
              <div className='bg-black text-white w-[150px] h-fit absolute top-0 text-center flex flex-col justify-center  '>Maintenance Department
</div>
              <div className='bg-white w-[150px] h-fit absolute top-[50px] px-2'>
              With Giri Info Tech, we now have real-time insights into our equipment health, predictive maintenance capabilities, and streamlined work order management.

              </div>
          </div>
        </div>


        </div>
      </div>
      </div>
          <Footer/>
          </div>
  )
}

export default CaseStudy1
