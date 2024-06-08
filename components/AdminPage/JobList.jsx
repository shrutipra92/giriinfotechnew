import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { updateCreateJobComponentShowToTrue } from '@/redux/CreateJobComponentShow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const JobList = () => {
    const [loading, setLoading] = useState(true)
    const [allJobs, setAllJobs] = useState([])
    const [confirmationBoxShow, setConfirmationBoxShow] = useState(0)
    const router = useRouter()
    const dispatch = useDispatch()
    const logored = "https://websiteimagessb.s3.us-west-2.amazonaws.com/logos.png"
    useEffect(()=>{
        axios.get('/api/GetAllJobs')
        .then((res)=>{
            console.log(res.data)
            setAllJobs(res.data.job)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    useEffect(() => {
        if (allJobs.length > 0) {
            setLoading(false)
        }
    }, [allJobs])
    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <Loader />
            </div>
        )
    }
    function deleteJob(){
        axios.post('/api/DeleteSpecificJob',{confirmationBoxShow})
        .then((res)=>{
            console.log(res.data)
            if(res.data.success){
                toast.success('Your job list deleted.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                router.reload()
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className='w-full'>

            <ToastContainer />

            <div className='h-[10vh] flex items-center justify-between px-[40px] border shadow'>

                <div className='h-[8vh] cursor-pointer'><img src={logored} alt='logo' className='h-full' /></div>

<div
className='flex items-center gap-[20px]'>
    <button
    name='add new job button'
    className='text-white bg-black px-[20px] py-[8px] rounded-md flex items-center gap-[10px] font-[500]'
    onClick={()=>{ dispatch(updateCreateJobComponentShowToTrue())}}>
        <p>
            Add a new job
        </p>
        <AddIcon />
    </button>
                <div className='w-[50px] h-[50px] cursor-pointer'>
                    <Avatar className='w-full h-full' />
                </div>
</div>

            </div>

            <div className='px-[40px] py-[20px] bg-gray-100 grid grid-cols-3 gap-[20px]'>

                {
                    allJobs.length > 0 && allJobs.map((details, index) => {
                        return(
                            <div
                            className='w-full px-[20px] py-[20px] rounded-md text-white bg-gradient-to-r from-yellow-200 to-red-400 bg-yellow-300 flex flex-col gap-[10px] relative group overflow-hidden'
                            key={index}>
                                <p
                                className='text-[26px] font-[600]'>
                                    {details.mainHeading}
                                </p>
                                <div>
                                    <p className='text-[20px]'>Locations</p>
                                    {
                                        details.place.map((placeName, i)=>{
                                            return(
                                                <li
                                                key={i}>
                                                    {placeName}
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    <p className='text-[20px]'>Skills</p>
                                    {
                                        details.preferedCompetencies.map((placeName, i)=>{
                                            return(
                                                <li
                                                key={i}>
                                                    {placeName}
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                                <div
                                className='absolute bottom-[20px] right-[20px] text-white p-[10px] border border-white rounded-md transition-all duration-500 opacity-0 group-hover:opacity-100 cursor-pointer'
                                onClick={()=>{setConfirmationBoxShow(details._id)}}>
                                    <DeleteIcon />
                                </div>
                                <div
                                className={`absolute w-full h-full top-0 left-0 bg-white/80 text-black transition-all duration-500 ${confirmationBoxShow === details._id ? 'translate-x-0' : '-translate-x-full'} flex items-center justify-center`}>
                                    <div className='flex items-center justify-center gap-[10px] flex-col'>
                                        <button
                                        name='Cancel button'
                                        className='px-[20px] py-[10px] text-red-600 rounded-md bg-red-200'
                                        onClick={()=>{deleteJob()}}>
                                            Confirm delete
                                        </button>
                                        <button
                                        name='Cancel button'
                                        className='px-[20px] py-[10px] text-green-600 rounded-md bg-green-200'
                                        onClick={()=>{setConfirmationBoxShow(0)}}>
                                            Cancel
                                        </button>
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

export default JobList