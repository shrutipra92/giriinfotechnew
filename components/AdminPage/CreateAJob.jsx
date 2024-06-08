import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { updateCreateJobComponentShowToFalse } from '@/redux/CreateJobComponentShow';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const CreateAJob = () => {
    const [mainHeading, setMainHeading] = useState('')
    const [subHeading, setSubHeading] = useState('')
    const [roleDetails, setRoleDetails] = useState([])
    const [tempRoleDetails, setTempRoleDetails] = useState('')
    const [qualifications, setQualifications] = useState([])
    const [tempQualifications, setTempQualifications] = useState('')
    const [benefits, setBenefits] = useState([])
    const [tempBenefits, setTempBenefits] = useState('')
    const [essentialCompetencies, setessentialCompetencies] = useState([])
    const [tempessentialCompetencies, setTempessentialCompetencies] = useState('')
    const [place, setplace] = useState([])
    const [tempplace, setTempplace] = useState('')
    const [preferedCompetencies, setpreferedCompetencies] = useState([])
    const [temppreferedCompetencies, setTemppreferedCompetencies] = useState('')
    const [conclusion, setconclusion] = useState('')

    const dispatch = useDispatch()

    function errorMessage(msg){
        toast.error(msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    function saveJob(){
        !(roleDetails.includes(tempRoleDetails)) && (tempRoleDetails!=='') && setRoleDetails(prev=> [...prev, tempRoleDetails])
        !(qualifications.includes(tempQualifications)) && (tempQualifications!=='') && setQualifications(prev=> [...prev, tempQualifications])
        !(benefits.includes(tempBenefits)) && (tempBenefits!=='') && setBenefits(prev=> [...prev, tempBenefits])
        !(essentialCompetencies.includes(tempessentialCompetencies)) && (tempessentialCompetencies!=='') && setessentialCompetencies(prev=> [...prev, tempessentialCompetencies])
        !(place.includes(tempplace)) && (tempplace!=='') && setplace(prev=> [...prev, tempplace])
        !(preferedCompetencies.includes(temppreferedCompetencies)) && (temppreferedCompetencies!=='') && setpreferedCompetencies(prev=> [...prev, temppreferedCompetencies])
        if(mainHeading === ''){
            errorMessage('Please give a title')
            return
        }
        if(subHeading === ''){
            errorMessage('Please give a sub heading')
            return
        }
        if(roleDetails.length === 0){
            errorMessage('Please give at least one role detail')
            return
        }
        if(qualifications.length === 0){
            errorMessage('Please give at least one qualification')
            return
        }
        if(benefits.length === 0){
            errorMessage('Please give at least one benefit')
            return
        }
        if(essentialCompetencies.length === 0){
            errorMessage('Please give at least one required skill')
            return
        }
        if(preferedCompetencies.length === 0){
            errorMessage('Please give at least one extra skill')
            return
        }
        if(place.length === 0){
            errorMessage('Please give at least one place')
            return
        }
        axios.post('/api/CreateAJob',{
            mainHeading,
            subHeading,
            roleDetails,
            qualifications,
            benefits,
            essentialCompetencies,
            place,
            preferedCompetencies,
            conclusion
        }).then((res)=>{
            console.log(res)
            if(res.status === 200){
                toast.success('Your job list created.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setMainHeading('')
                setSubHeading('')
                setRoleDetails([])
                setQualifications([])
                setBenefits([])
                setessentialCompetencies([])
                setplace([])
                setpreferedCompetencies([])
                setconclusion('')
                setTimeout(() => {
                    dispatch(updateCreateJobComponentShowToFalse())
                }, 2000);
            }
        })
    }
    return (
        <div
            className='bg-white text-black px-[20px] py-[20px] rounded-[20px] h-[90vh] overflow-auto w-[600px]'
            style={{
                scrollbarWidth: 'none'
            }}>
            <p
                className='text-center text-[26px] font-[600]'>
                Give the job details
            </p>
            <div
                className='mt-[20px] flex flex-col gap-[12px]'>
                <div
                    className='flex flex-col gap-[8px]'>
                    <p className='text-[18px]'>
                        Title of the job
                    </p>
                    <div
                        className='p-[10px] border border-md w-full rounded-md'>
                        <input
                            type="text"
                            placeholder='e.g Senior Software Engineer'
                            className='outline-none border-none bg-transparent w-full'
                            value={mainHeading}
                            onChange={(e) => { setMainHeading(e.target.value) }} />
                    </div>
                </div>
                <div
                    className='flex flex-col gap-[8px]'>
                    <p className='text-[18px]'>
                        Sub title of the job
                    </p>
                    <div
                        className='p-[10px] border border-md w-full rounded-md'>
                        <input
                            type="text"
                            placeholder='e.g Join Our Team and Lead the Way in Software Engineering Excellence'
                            className='outline-none border-none bg-transparent w-full'
                            value={subHeading}
                            onChange={(e) => { setSubHeading(e.target.value) }} />
                    </div>
                </div>
                <div
                    className='flex flex-col gap-[8px]'>
                    <p className='text-[18px]'>
                        Job role details
                    </p>
                    <div>
                        {
                            roleDetails.map((details, index)=>{
                                return(
                                    <li
                                    key={index}>
                                        {details}
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div
                        className='p-[10px] border border-md w-full rounded-md flex gap-[10px]'>
                        <input
                            type="text"
                            placeholder='e.g Lead Technical Initiatives: Take charge of projects from inception to completion. Your expertise will be critical in developing technical strategies, architecture, and solutions.'
                            className='outline-none border-none bg-transparent w-full'
                            value={tempRoleDetails}
                            onChange={(e)=>{setTempRoleDetails(e.target.value)}} />
                            <div 
                            className='cursor-pointer' 
                            onClick={()=>{ 
                                !(roleDetails.includes(tempRoleDetails)) && (tempRoleDetails!=='') && setRoleDetails(prev=> [...prev, tempRoleDetails])
                                setTempRoleDetails('')
                                }}>
                        <AddIcon />
                            </div>
                    </div>
                </div>
                <div
                    className='flex flex-col gap-[8px]'>
                    <p className='text-[18px]'>
                        Qualifications
                    </p>
                    <div>
                        {
                            qualifications.map((details, index)=>{
                                return(
                                    <li
                                    key={index}>
                                        {details}
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div
                        className='p-[10px] border border-md w-full rounded-md flex gap-[10px]'>
                        <input
                            type="text"
                            placeholder="e.g Bachelor's or Master's degree in Computer Science or a related field."
                            className='outline-none border-none bg-transparent w-full'
                            value={tempQualifications}
                            onChange={(e)=>{setTempQualifications(e.target.value)}} />
                            <div 
                            className='cursor-pointer' 
                            onClick={()=>{ 
                                !(qualifications.includes(tempQualifications)) && (tempQualifications!=='') && setQualifications(prev=> [...prev, tempQualifications])
                                setTempQualifications('')
                                }}>
                        <AddIcon />
                            </div>
                    </div>
                </div>
                <div
                    className='flex flex-col gap-[8px] w-full'>
                    <p className='text-[18px]'>
                        Benefits
                    </p>
                    <div>
                        {
                            benefits.map((details, index)=>{
                                return(
                                    <li
                                    key={index}>
                                        {details}
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div
                        className='p-[10px] border border-md w-full rounded-md flex gap-[10px]'>
                        <input
                            type="text"
                            placeholder="e.g Competitive salary and benefits package."
                            className='outline-none border-none bg-transparent w-full'
                            value={tempBenefits}
                            onChange={(e)=>{setTempBenefits(e.target.value)}} />
                            <div 
                            className='cursor-pointer' 
                            onClick={()=>{ 
                                !(benefits.includes(tempBenefits)) && (tempBenefits!=='') && setBenefits(prev=> [...prev, tempBenefits])
                                setTempBenefits('')
                                }}>
                        <AddIcon />
                            </div>
                    </div>
                </div>
                <div
                    className='flex flex-col gap-[8px] w-full'>
                    <p className='text-[18px]'>
                        Required skills
                    </p>
                    <div>
                        {
                            essentialCompetencies.map((details, index)=>{
                                return(
                                    <li
                                    key={index}>
                                        {details}
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div
                        className='p-[10px] border border-md w-full rounded-md flex gap-[10px]'>
                        <input
                            type="text"
                            placeholder="e.g Node.js"
                            className='outline-none border-none bg-transparent w-full'
                            value={tempessentialCompetencies}
                            onChange={(e)=>{setTempessentialCompetencies(e.target.value)}} />
                            <div 
                            className='cursor-pointer' 
                            onClick={()=>{ 
                                !(essentialCompetencies.includes(tempessentialCompetencies)) && (tempessentialCompetencies!=='') && setessentialCompetencies(prev=> [...prev, tempessentialCompetencies])
                                setTempessentialCompetencies('')
                                }}>
                        <AddIcon />
                            </div>
                    </div>
                </div>
                <div
                    className='flex flex-col gap-[8px] w-full'>
                    <p className='text-[18px]'>
                        Location
                    </p>
                    <div>
                        {
                            place.map((details, index)=>{
                                return(
                                    <li
                                    key={index}>
                                        {details}
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div
                        className='p-[10px] border border-md w-full rounded-md flex gap-[10px]'>
                        <input
                            type="text"
                            placeholder="e.g New Delhi or remote"
                            className='outline-none border-none bg-transparent w-full'
                            value={tempplace}
                            onChange={(e)=>{setTempplace(e.target.value)}} />
                            <div 
                            className='cursor-pointer' 
                            onClick={()=>{ 
                                !(place.includes(tempplace)) && (tempplace!=='') && setplace(prev=> [...prev, tempplace])
                                setTempplace('')
                                }}>
                        <AddIcon />
                            </div>
                    </div>
                </div>
                <div
                    className='flex flex-col gap-[8px] w-full'>
                    <p className='text-[18px]'>
                        Extra skills
                    </p>
                    <div>
                        {
                            preferedCompetencies.map((details, index)=>{
                                return(
                                    <li
                                    key={index}>
                                        {details}
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div
                        className='p-[10px] border border-md w-full rounded-md flex gap-[10px]'>
                        <input
                            type="text"
                            placeholder="e.g New Delhi or remote"
                            className='outline-none border-none bg-transparent w-full'
                            value={temppreferedCompetencies}
                            onChange={(e)=>{setTemppreferedCompetencies(e.target.value)}} />
                            <div 
                            className='cursor-pointer' 
                            onClick={()=>{ 
                                !(preferedCompetencies.includes(temppreferedCompetencies)) && (temppreferedCompetencies!=='') && setpreferedCompetencies(prev=> [...prev, temppreferedCompetencies])
                                setTemppreferedCompetencies('')
                                }}>
                        <AddIcon />
                            </div>
                    </div>
                </div>
                <div
                    className='flex flex-col gap-[8px]'>
                    <p className='text-[18px]'>
                        Conclusion
                    </p>
                    <div
                        className='p-[10px] border border-md w-full rounded-md'>
                        <textarea
                            placeholder="e.g As a Senior Software Engineer at BrizSolution, you'll have the opportunity to shape the future of technology and make a meaningful impact. If you're ready to take on challenging projects, guide the next generation of engineers, and drive innovation, we encourage you to apply today."
                            className='outline-none border-none bg-transparent w-full resize-none'
                            value={conclusion}
                            onChange={(e) => { setconclusion(e.target.value) }} />
                    </div>
                </div>
                <button
                name='submit button'
                className='px-[20px] py-[10px] rounded-md bg-black text-white text-[20px] font-[600] w-fit mx-auto'
                onClick={()=>{saveJob()}}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default CreateAJob