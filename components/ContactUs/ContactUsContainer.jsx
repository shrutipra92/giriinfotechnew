import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import building from '@/assest/icons/flat.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ContactUsContainer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [occupation, setOccupation] = useState('IT Manager')
    const [mobileNumber, setMobileNumber] = useState('')
    const [serviceType, setServiceType] = useState('Digital transformation')
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

    function handleNumberInput(e) {
        // console.log(typeof(e))
        setMobileNumber(parseInt(e))
    }

    function handleSubmit() {
        setSubmitButtonClicked(true)
        console.log(formDetails)
        // axios.post('https://backend1-0335.onrender.com/api/v1/contacts', formDetails)
        axios.post('/api/CreateContact', formDetails)
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
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const [form, setForm] = React.useState({ firstName: '', email: '' })

    // const url = "https://solutionbriz.us21.list-manage.com/subscribe/post?u=186188ead550f8d551aa711cd&amp;id=4b1ead2dec&amp;f_id=00cbe2e6f0";

    // const {
    //     loading,
    //     error,
    //     success,
    //     message,
    //     // handleSubmit
    // } = useMailChimpForm(url);

    // const { fields, handleFieldChange } = useFormFields({
    //     EMAIL: "",
    //     FNAME: "",
    //     PHONE: "",
    // });

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (

        <div className='w-full relative'>

            <Navbar />

            <WhatsAppIcon />

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <form onSubmit={event => {
                event.preventDefault();
                handleSubmit(fields);
            }}>
                <img src="https://websiteimagessb.s3.us-west-2.amazonaws.com/conta.jfif" alt="" className='absolute h-[70vh] w-full object-cover top-0 left-0 z-[-1]' />

                <div className='w-full flex items-center justify-center pt-[12vh]'>

                    <div
                        className='flex flex-col 1000px:gap-[30px] gap-[20px] w-fit p-[10px] 700px:p-[50px] rounded-[8px] bg-[hsla(0,0%,100%,0.8)] backdrop-filter backdrop-blur-lg shadow-lg text-black'>

                        <p className='1000px:text-[42px] 700px:text-[30px] text-[22px]'>
                            Connect With Us
                        </p>

                        <p className='1000px:text-[18px] text-[16px]'>
                            Got a query? Kindly fill in the form and we shall get back to you.
                        </p>

                        <div
                            className='grid grid-cols-1 600px:grid-cols-2 gap-x-4 gap-y-2'
                            action="">

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <label
                                    htmlFor="exampleInput90">Name
                                </label>
                                <input type="text"
                                    className="peer block min-h-[auto] w-full rounded border border-black bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleInput90"
                                    placeholder="Name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required={true} />
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <label
                                    htmlFor="exampleInput90">Email
                                </label>
                                <input type="email"
                                    className="peer block min-h-[auto] w-full rounded border border-black bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleInput90"
                                    placeholder="Name"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required={true} />
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <label
                                    // className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    htmlFor="exampleInput90">Phone number
                                </label>
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

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <label
                                    // className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    htmlFor="exampleInput90">Occupation
                                </label>
                                <select type="text"
                                    className="peer block min-h-[auto] w-full rounded border border-black bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleInput90"
                                    placeholder="Name"
                                    required={true}
                                    onChange={e => setOccupation(e.target.value)}
                                    value={occupation}>

                                    <option value="IT Manager">IT Manager</option>
                                    <option value="CTO">CTO</option>
                                    <option value="CEO">CEO</option>
                                    <option value="Managing Director">Managing Director</option>
                                    <option value="Investor">Investor</option>
                                    <option value="VP">VP</option>
                                    <option value="Sales manager">Sales manager</option>
                                    <option value="GM">GM</option>
                                    <option value="Software Developer">Software Developer</option>
                                    <option value="Business owner">Business owner</option>
                                    <option value="Others">Others</option>

                                </select>
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <label
                                    // className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    htmlFor="exampleInput90">Company inquiry type
                                </label>
                                <select type="text"
                                    className="peer block min-h-[auto] w-full rounded border border-black bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleInput90"
                                    placeholder="Name"
                                    required={true}
                                    onChange={e => setServiceType(e.target.value)}
                                    value={serviceType}>

                                    <option value="Digital transformation">Digital transformation</option>
                                    <option value="DevOps">DevOps</option>
                                    <option value="Oracle">Oracle</option>
                                    <option value="Mobility">Mobility</option>
                                    <option value="Infrastructure & cloud services">Infrastructure & cloud services</option>
                                    <option value="Embedded system">Embedded system</option>
                                    <option value="Sap">Sap</option>
                                    <option value="Salesforce">Salesforce</option>
                                    <option value="AI/Machine learning">AI/Machine learning</option>
                                    <option value="Internet of things">Internet of things</option>
                                    <option value="AR/VR">AR/VR</option>
                                    <option value="Metaverse">Metaverse</option>
                                    <option value="Others">Others</option>

                                </select>
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <label
                                    // className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    htmlFor="exampleInput90">Company(optional)
                                </label>
                                <input type="text"
                                    className="peer block min-h-[auto] w-full rounded border border-black bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleInput90"
                                    placeholder="Name"
                                    onChange={e => setCompanyName(e.target.value)}
                                    value={companyName} />
                            </div>

                        </div>

                        <form action="" className='w-full'>
                            <label
                                // className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                htmlFor="exampleInput90">Message
                            </label>
                            <textarea name="" id="" rows="5" className="peer block min-h-[auto] w-full rounded border border-black bg-white py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black text-black dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                onChange={e => setMessageInput(e.target.value)}
                                value={messageInput}></textarea>
                        </form>

                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />

                        <button
                            className={`w-fit ${submitButtonClicked ? 'bg-transparent' : messageSentSuccessful ? 'bg-green-400' : 'bg-primaryColor hover:bg-secondaryColor'} text-white px-[40px] py-[10px] rounded-[4px] transition-all duration-500`} type="submit"
                            onClick={handleSubmit}
                            value="Send"
                            disabled={submitButtonClicked}>
                            {
                                submitButtonClicked ? <CircularProgress /> : messageSentSuccessful ? <span>Sent</span> : <span>Send</span>
                            }
                        </button>

                        <div className='grid grid-cols-1 gap-x-4 gap-y-2'>

                            <div class="flex items-center">
                                <div class="shrink-0">
                                    <div class="inline-block rounded-md bg-primaryColor p-4 text-primary">
                                        {/* <PhoneCallbackIcon style={{ color: 'white' }} /> */}
                                        <img src={building} alt="" className='w-[30px]' />
                                    </div>
                                </div>
                                <div class="ml-6 grow">
                                    {/* <p class="text-black dark:text-neutral-200">
                                    +91 9811736844
                                    </p> */}
                                    <p class="text-black dark:text-neutral-200">
                                        Giri Info Tech Pvt Ltd
                                    </p>
                                    <p class="text-black dark:text-neutral-200">
                                        info@solutionbriz.com
                                    </p>
                                </div>
                            </div>

                            <div class="align-start flex items-center">
                                {/* <div class="shrink-0">
                                    <div class="inline-block rounded-md bg-primaryColor p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" class="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                        </svg>
                                    </div>
                                </div> */}
                                <div class="grow flex gap-3 mt-6 flex-col 700px:flex-row">
                                    <div 
                                    className='border p-6 cursor-pointer shadow-bannerButton hover:-translate-y-1 transition-all duration-500 w-full 700px:w-[50%] bg-secondaryColor text-white rounded-[4px] text-[16px]'>
                                        <p class="font-[600] mb-2 text-[20px]">
                                            India office
                                        </p>
                                        <p>
                                            H-86, Sector 63, Noida,<br /> UP, India, 201301
                                        </p>
                                        <p>
                                            +91 9811736844
                                        </p>
                                    </div>
                                    <div className='border p-6 cursor-pointer shadow-bannerButton hover:-translate-y-1 transition-all duration-500 w-full 700px:w-[50%] bg-secondaryColor text-white rounded-[4px] text-[16px]'>
                                        <p class="font-[600] mb-2 text-[20px]">
                                            Europe office
                                        </p>
                                        <p>
                                            9 carrigmore Oak saggart<br /> Dublin 24, Ireland
                                        </p>
                                        <p>
                                            +353 871008392
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </form>




            <Footer />

        </div>
    )
}

export default ContactUsContainer