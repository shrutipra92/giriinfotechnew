import React from 'react'

const SecondComponent = () => {

    return (
        <div className='w-full py-[30px]'>

            <div className='w-[90%] 1000px:w-[80%] mx-auto flex items-center justify-center gap-[20px] flex-col 1200px:flex-row'>

                <div className='w-full 1200px:w-[50%] flex flex-col gap-[20px]'>

                    <p className='font-[600] text-[30px]'>
                    Elevate Your IT Infrastructure with Cloud Services: Our Expert Solutions
                    </p>

                    <p className='text-[20px]'>
                    In today's rapidly evolving digital landscape, a robust and flexible IT infrastructure is essential for businesses to stay competitive. Cloud services have emerged as a game-changer, offering scalability, cost-efficiency, and agility. At Giri Info Tech, we provide comprehensive infrastructure and cloud services to empower your organization. In this article, we'll explore how our solutions can transform your IT environment.
                    </p>

                </div>

                <div className='w-full 1200px:w-[50%]'>

                    <img
                        src="https://websiteimagessb.s3.us-west-2.amazonaws.com/cloud1.jpeg"
                        alt=""
                        className='w-full object-cover rounded-[6px]' />

                </div>

            </div>

        </div>
    )
}

export default SecondComponent