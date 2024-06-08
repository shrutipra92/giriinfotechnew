import React from 'react'

const FourthComponent = () => {

    const workshopArray = [
        {
            bgImage: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/v8.jfif',
            tag: 'Aviation training'
        },
        {
            bgImage: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/v9.jfif',
            tag: 'AR/VR in textile'
        },
        {
            bgImage: 'https://websiteimagessb.s3.us-west-2.amazonaws.com/v10.jfif',
            tag: 'AR/VR in education'
        },
    ]

    return (
        <div className='w-[90%] 1000px:w-[80%] mx-auto py-[40px] flex flex-col items-center justify-center gap-[16px]'>

            <p className='text-[42px] font-[600]'>
                Case Study
            </p>

            <p className='text-[22px] text-gray-600 text-center'>
            Giri Info Tech proudly showcases a track record of award-winning and groundbreaking achievements. As true pioneers in the fields of Augmented Reality (AR), Virtual Reality (VR), Game Development, and Animations, we invite you to explore the forefront of innovation with our exceptional portfolio.
            </p>

            <div className='w-full grid-cols-1 grid 900px:grid-cols-3 gap-8'>

                {
                    workshopArray.map((workshop, index) => {
                        return (
                            <div
                                className='w-full group bg-cover bg-no-repeat h-[220px] flex items-center justify-center'
                                style={{
                                    backgroundImage: `url('${workshop.bgImage}')`
                                }}
                                key={index}>

                                <div
                                    className='w-[90%] h-[80%] bg-white/60 opacity-0 group-hover:opacity-100 transition-all duration-1000 flex items-center justify-center'>

                                    <div
                                        className='w-[90%] h-[90%] bg-white/90 opacity-0 group-hover:opacity-100 transition-all duration-1000 flex items-center justify-center'>

                                        <p className='text-secondaryColor text-[24px] font-[600] cursor-pointer'>
                                            {workshop.tag}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default FourthComponent