import React, { useState } from 'react'
import Data from './FourthComponentData.json'
import Link from 'next/link'

const FourthComponent = () => {

    const [activeHeading, setActiveHeading] = useState('Case studies')

    const leadingHeadingArray = ['Case studies']

    console.log(Data[activeHeading])

    return (
        <div className='w-full py-[30px]'>

            <div className='w-[90%] 1000px:w-[80%] mx-auto flex flex-col 900px:flex-row'>

                <div className='flex flex-col'>

                    <p className='font-[600] text-[32px]'>
                        Leading the way
                    </p>

                    <div className='p-[30px] flex flex-col gap-[16px]'>

                        {
                            leadingHeadingArray.map((heading) => {
                                return (
                                    <p
                                        className={`text-[18px] uppercase relative before:absolute before:left-[-10px] before:top-0 before:w-[2px] before:h-full ${activeHeading === heading ? 'before:bg-primaryColor text-primaryColor' : 'text-black before:bg-transparent'} cursor-pointer`}
                                        key={heading}
                                        onClick={() => { setActiveHeading(heading) }}>
                                        {heading}
                                    </p>
                                )
                            })
                        }

                    </div>

                </div>

                <div className='ml-[20px] 1000px:ml-[80px] grid grid-cols-1 600px:grid-cols-2 1400px:grid-cols-3 gap-6 w-full'>

                    {
                        Object.keys(Data).map((data) => {
                            return (
                                <div className={`w-full bg-gray-100`} key={data}>

                                    <img
                                        src={Data[data].base.images[0]}
                                        alt=""
                                        className='w-full h-[200px] 600px:h-[140px] object-cover rounded-[6px]' />

                                    <div className='p-[10px] flex flex-col gap-[20px]'>

                                        <p className='font-[600] text-[22px] leading-[24px]'>
                                            {Data[data].base.heading}
                                        </p>

                                        <Link href={`/Services/Cloud_Infrastructure/${data}`}>
                                            <button className='px-[20px] py-[6px] border border-primaryColor text-primaryColor w-fit'>
                                                KNOW MORE
                                            </button>
                                        </Link>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default FourthComponent