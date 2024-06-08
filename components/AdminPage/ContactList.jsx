import { Avatar } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Loader from '../Loader/Loader'
import Backdrop from '@mui/material/Backdrop'

const ContactList = () => {
    const [contactList, setContactList] = useState()
    const [currentPageNumber, setCurrentPageNUmber] = useState(1)

    const [loaderShow, setLoaderShow] = useState(false)

    const logored = "https://websiteimagessb.s3.us-west-2.amazonaws.com/logos.png"

    useEffect(() => {
        // axios.get(`https://backend1-0335.onrender.com/api/v1/contacts?page=${currentPageNumber}`)
        axios.get(`/api/GetAllContacts`)
            .then((res) => {
                setContactList(res.data.message)
                console.log(res.data.message)
                setLoaderShow(false)
            })
            .catch((err) => {
                console.log(err)
                alert("Some error occured")
            })
    }, [currentPageNumber])

    function handleNextButton() {
        setLoaderShow(true)
        setCurrentPageNUmber(number => number + 1)
    }

    function handlePreviousButton() {
        setLoaderShow(true)
        setCurrentPageNUmber(number => number - 1)
    }
    return (
        <div className='w-full'>

            <div className='h-[10vh] flex items-center justify-between px-[40px] border shadow'>

                <div className='h-[8vh] cursor-pointer'><img src={logored} alt='logo' className='h-full' /></div>

                <div className='w-[50px] h-[50px] cursor-pointer'>
                    <Avatar className='w-full h-full' />
                </div>

            </div>

            <div className='px-[40px] py-[20px] bg-gray-100'>

                {
                    contactList ?
                        <div className='flex flex-col gap-[16px]'>

                            <div
                                className='flex w-full items-center justify-between p-[10px] bg-white rounded-[4px] font-bold cursor-pointer'>
                                <div className='w-[200px]'>
                                    Name
                                </div>
                                <div className='w-[200px]'>
                                    Email
                                </div>
                                <div className='w-[200px]'>
                                    Message
                                </div>
                                <div className='w-[200px]'>
                                    Occupation
                                </div>
                                <div className='w-[200px]'>
                                    Mobile
                                </div>
                            </div>

                            {
                                loaderShow ?
                                    <Backdrop
                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                        open={loaderShow}
                                    >
                                        <Loader />
                                    </Backdrop>
                                    :
                                    contactList.map((contact, index) => {
                                        const tempMessage = contact.message.substring(0, 9) + '...'
                                        return (
                                            <Link
                                                href={`/Admin/${contact._id}`}
                                                key={index}>
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        x: -100
                                                        // scaleX: 0
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: 0
                                                        // scaleX: 1
                                                    }}
                                                    transition={{
                                                        duration: 0.3
                                                    }}
                                                    className='flex w-full items-center justify-between p-[10px] bg-white rounded-[4px] cursor-pointer'>

                                                    <div className='w-[200px]'>
                                                        {contact.name}
                                                    </div>
                                                    <div className='w-[200px]'>
                                                        {contact.email}
                                                    </div>
                                                    <div className='w-[200px]'>
                                                        {tempMessage}
                                                    </div>
                                                    <div className='w-[200px]'>
                                                        {contact.occupation}
                                                    </div>
                                                    <div className='w-[200px]'>
                                                        {contact.phone_number}
                                                    </div>

                                                </motion.div>
                                            </Link>
                                        )
                                    })
                            }

                        </div>
                        :
                        <Loader />
                }

            </div>

            <div className='flex items-center gap-[12px] my-[16px] ml-[40px]'>

                <button
                    disabled={currentPageNumber === 1}
                    // onClick={() => { setCurrentPageNUmber(number => number - 1) }}
                    onClick={() => { handlePreviousButton() }}
                    className={`text-[12px] font-[500] px-[12px] py-[6px] rounded-[4px] bg-yellow-400 w-fit h-fit`}>
                    Prev
                </button>
                <button
                    // onClick={() => { setCurrentPageNUmber(number => number + 1) }}
                    onClick={() => { handleNextButton() }}
                    className={`text-[12px] font-[500] px-[12px] py-[6px] rounded-[4px] bg-green-400 w-fit h-fit`}>
                    Next
                </button>

            </div>


        </div>
    )
}

export default ContactList