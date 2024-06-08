import React from 'react'

const SixthComponent = () => {
  return (
    <div className='w-full bg-blueBackground py-[40px]'>

        <div 
        className='w-[90%] 1000px:w-[80%] mx-auto text-white flex items-center justify-between gap-[20px] flex-col 700px:flex-row'>

            <div className='flex flex-wrap items-center gap-[10px]'>

                <span className='font-bold text-[26px]'>30+</span>
                <div className='flex items-center flex-wrap gap-[6px]'>
                    <span>CLOUD </span>
                    <span>PROJECTS</span>
                </div>

            </div>

            <div className='flex flex-wrap items-center gap-[10px]'>

                <span className='font-bold text-[26px]'>50+</span>
                <div className='flex items-center flex-wrap gap-[6px]'>
                    <span>COSTUMERS</span>
                </div>

            </div>

            <div className='flex flex-wrap items-center gap-[10px]'>

                <span className='font-bold text-[26px]'>50+</span>
                <div className='flex items-center flex-wrap gap-[6px]'>
                    <span>AWS</span>
                    <span>CERTIFICATIONS</span>
                </div>

            </div>

        </div>

    </div>
  )
}

export default SixthComponent