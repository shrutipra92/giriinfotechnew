import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'

const SpecificMessagePage = () => {
    const [contactMessage, setContactMessage] = useState()

    const router = useRouter()
    const { slug } = router.query

    useEffect(() => {
        if(slug){
        axios.post('/api/GetSpecificMessage',{slug})
            .then((res) => {
                console.log(res.data)
                const contacts = res.data.message;
                setContactMessage(contacts)
            })
            .catch((err) => {
                console.log(err)
                alert("Some error occured")
            })
        }
    }, [slug])

    if(!contactMessage){
        return(
            <div className="w-full h-screen flex items-center justify-center">
            <Loader />
          </div>
        )
    }

    return (
        <div>
            {
                contactMessage ?
                    <div className='flex flex-col gap-[16px] m-5'>
                        <div>
                            <span className='font-bold'>Sender's name:</span> {contactMessage.name}
                        </div>
                        <div>
                            <span className='font-bold'>Sender's email:</span> {contactMessage.email}
                        </div>
                        <div>
                            <span className='font-bold'>Sender's Mobile number:</span> {contactMessage.mobilenumber}
                        </div>
                        <div>
                            <span className='font-bold'>Message:</span> {contactMessage.message}
                        </div>
                        <div>
                            {/* <span className='font-bold'>Message recieve time:</span> {contactMessage.createdAt} */}
                        </div>
                    </div>
                    :
                    <div className="w-full h-screen flex items-center justify-center">
            <Loader />
          </div>
            }
        </div>
    )
}

export default SpecificMessagePage