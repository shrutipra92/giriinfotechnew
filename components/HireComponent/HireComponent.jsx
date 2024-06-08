import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { updateHireComponentShowToFalse } from '@/redux/HireComponentShow';

const HireComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [occupation, setOccupation] = useState('')
    const [mobileNumber, setMobileNumber] = useState()
    const [serviceType, setServiceType] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [messageInput, setMessageInput] = useState('')
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false)
    const [messageSentSuccessful, setMessageSentSuccessful] = useState(false)

    const formDetails = {
        name,
        email,
        country: "India",
        occupation: occupation,
        mobilenumber: mobileNumber,
        servicetype: serviceType,
        companyname: companyName,
        message: messageInput
    }

    const dispatch = useDispatch()

    function handleSubmit(e) {

        e.preventDefault()

        let tempNumber = `${mobileNumber}`
        tempNumber = parseInt(tempNumber)

        setSubmitButtonClicked(true)
        axios.post('https://backend1-0335.onrender.com/api/v1/contacts', formDetails)
            .then((res) => {
                console.log(res.status)
                setSubmitButtonClicked(false)
                if (res.status === 201 || res.status === 200) {
                    setMessageSentSuccessful(true)
                    setName('')
                    setEmail('')
                    setOccupation('')
                    setMobileNumber('')
                    setServiceType('')
                    setCompanyName('')
                    setMessageInput('')
                    toast.success('Your request is submitted successfully! We will connect you soon.', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        dispatch(updateHireComponentShowToFalse())
                        setMessageSentSuccessful(false)
                    }, 3000);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleNumberInput(e) {
        // console.log(typeof(e))
        setMobileNumber(parseInt(e))
    }

    return (
        <div
            className='w-[96%] max-w-[1200px] h-[92vh] bg-blueBackground rounded-[20px] p-[20px] 900px:p-[40px] relative flex items-center justify-center gap-[20px] overflow-auto text-[18px] text-white bg-blend-multiply bg-cover bg-no-repeat'
            style={{
                backgroundImage: `url('https://wallpapercave.com/wp/wp7098397.jpg')`
            }}>

            <ToastContainer />

            <div
                className='absolute right-[10px] top-[10px] cursor-pointer'
                onClick={() => { dispatch(updateHireComponentShowToFalse()) }}>
                <ClearIcon />
            </div>

            <div
                className='w-1/2 hidden 1000px:flex flex-col gap-[20px] justify-evenly h-full'>

                <p
                    className='text-[42px] font-bold'>
                    Are you <span className='text-primaryColor'>looking for !</span>
                </p>

                <div className='w-fit font-[600] ml-[40px]'>

                    <p>
                        1. Aws <span className='text-primaryColor'>Expert</span> for server set up.
                    </p>

                    <p>
                        2. Server migration to AWS?
                    </p>

                    <p>
                        3. <span className='text-primaryColor'>Reduce service cost.</span>
                    </p>

                    <p>
                        4. AWS infrastructure design.
                    </p>

                    <p>
                        5. Make the server 100% up.
                    </p>

                </div>

                <p className='font-[600]'>
                    Thank you for taking the time to consider the inquiry. We are excited about the possibility of working with your organisation to enhance the cloud infrastructure.
                </p>

            </div>

            <div
                className='w-full 1000px:w-1/2 flex flex-col justify-start h-full gap-[20px]'>

                <p
                    className='text-[26px] font-bold'>
                    Book free <span className='text-primaryColor'>consultancy</span> now
                </p>

                <form action="" className='flex flex-col gap-[20px]'>

                    <div>

                        <label
                            htmlFor="consultancy_name">
                            Name*
                        </label>

                        <div
                            className='w-full box-border px-[16px] py-[8px] rounded-md border'>

                            <input
                                type="text"
                                name="consultancy_name"
                                id="consultancy_name"
                                required={true}
                                placeholder='Enter your name'
                                onChange={e => setName(e.target.value)}
                                value={name}
                                className='w-full bg-transparent border-none outline-none' />

                        </div>

                    </div>

                    <div>

                        <label
                            htmlFor="consultancy_phone">
                            Phone*
                        </label>

                        <div
                            className='w-full box-border px-[16px] py-[8px] rounded-md border'>

                            <PhoneInput
                                country={'in'}
                                value={country}
                                onChange={phone => handleNumberInput(phone)}
                                specialLabel=' '
                                style={{ outline: 'none' }}
                                className="peer block min-h-[auto] w-full rounded border border-black bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:outline-none focus:border-0"
                                placeholder="+91 xxxxxxxxxx"
                            />

                        </div>

                    </div>

                    <div>

                        <label
                            htmlFor="consultancy_email">
                            Email*
                        </label>

                        <div
                            className='w-full box-border px-[16px] py-[8px] rounded-md border'>

                            <input
                                type="email"
                                name="consultancy_email"
                                id="consultancy_email"
                                required={true}
                                placeholder='Enter your email address'
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                className='w-full bg-transparent border-none outline-none' />

                        </div>

                    </div>

                    <div>

                        <label
                            htmlFor="consultancy_message">
                            Message*
                        </label>

                        <div
                            className='w-full box-border px-[16px] py-[8px] rounded-md border'>

                            <textarea
                                name="consultancy_message"
                                id="consultancy_message"
                                required={true}
                                placeholder='Enter your message'
                                onChange={e => setMessageInput(e.target.value)}
                                value={messageInput}
                                className='w-full bg-transparent border-none outline-none' />

                        </div>

                    </div>

                    <button
                        name='form_submit'
                        className='w-full px-[20px] py-[10px] bg-white/20 rounded-md hover:bg-white/30 transition-all duration-500'
                        onClick={(e) => { handleSubmit(e) }}
                        value="Send"
                        disabled={submitButtonClicked}>
                        {
                            submitButtonClicked ? <CircularProgress /> : messageSentSuccessful ? <span>Sent</span> : <span>Send</span>
                        }
                    </button>

                </form>

            </div>

        </div>
    )
}

export default HireComponent