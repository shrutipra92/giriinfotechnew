import React, { useState } from 'react'
import { motion } from 'framer-motion'
import team from './Team.json'
import profile from '@/assest/Image/profile2.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '@/components/Footer/Footer';
import WhatsAppIcon from '@/components/WhatsAppIcon/WhatsAppIcon';
import Navbar from '@/components/Navbar/Navbar';

const MeetTheTeamPage = () => {
    const [popup1, setPopup1] = useState(false);

    const openPopUp1 = () => {
        setPopup1(!popup1)
    }
    const closePopUp1 = () => {
        setPopup1(false)
    }
    // 
    const [popup2, setPopup2] = useState(false);

    const openPopUp2 = () => {
        setPopup2(!popup2)
    }
    const closePopUp2 = () => {
        setPopup2(false)
    }
    // 
    const [popup3, setPopup3] = useState(false);

    const openPopUp3 = () => {
        setPopup3(!popup3)
    }
    const closePopUp3 = () => {
        setPopup3(false)
    }
    // 
    const [popup4, setPopup4] = useState(false);

    const openPopUp4 = () => {
        setPopup4(!popup4)
    }
    const closePopUp4 = () => {
        setPopup4(false)
    }
    // 
    const [popup5, setPopup5] = useState(false);

    const openPopUp5 = () => {
        setPopup5(!popup5)
    }
    const closePopUp5 = () => {
        setPopup5(false)
    }
    // 
    const [popup6, setPopup6] = useState(false);

    const openPopUp6 = () => {
        setPopup6(!popup6)
    }
    const closePopUp6 = () => {
        setPopup6(false)
    }


    const profile1 = 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Team/profile1.jpg'
    const profile2 = 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Team/profile2.jpg'
    const profile3 = 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Team/profile3.jpg'

    const profile5 = 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Team/profile5.jpg'
    const profile6 = 'https://websiteimagessb.s3.us-west-2.amazonaws.com/Team/profile6.jpg'

    const teamArray = [
        {
            "image": "https://websiteimagessb.s3.us-west-2.amazonaws.com/Team/profile1.jpg",
            "name": "Amit Prajapati",
            "description": "Founder & CEO"
        },
        {
            "image": "https://websiteimagessb.s3.us-west-2.amazonaws.com/Team/profile2.jpg",
            "name": "Santosh Kumar Panda",
            "description": "Head - Digital Transformation"
        },
        {
            "image": "https://websiteimagessb.s3.us-west-2.amazonaws.com/Team/profile3.jpg",
            "name": "Nimain Giri",
            "description": "Head - R & D"
        },
        {
            "image": "https://1fid.com/wp-content/uploads/2022/06/no-profile-picture-4-1024x1024.jpg",
            "name": "Ashok Kumar Gupta",
            "description": "VP - Sales & Marketing"
        },
        {
            "image": "https://websiteimagessb.s3.us-west-2.amazonaws.com/Team/profile5.jpg",
            "name": "Sanjeev Bhatia",
            "description": "VP - Campaign and Growth"
        },
        {
            "image": "https://websiteimagessb.s3.us-west-2.amazonaws.com/Team/profile6.jpg",
            "name": "Deendayal Prajapati",
            "description": "VP - Govt Relations"
        }
    ]


    return (
        <div className='w-full'>
            <Navbar />
            <WhatsAppIcon />
            <div className='w-full h-[60vh] relative flex items-center justify-center flex-col gap-[12px]'>
                <img
                    src="https://s6.imgcdn.dev/2XHKL.jpg"
                    alt=""
                    className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                />

                <motion.div
                    initial={{
                        x: 0,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='text-white font-[700] text-[32px] 700px:text-[42px] text-center w-[60%]'>
                    {team.Contents.heading.heading1}
                </motion.div>
            </div>

            <div className='w-full'>

                <div className='w-[100%] 1000px:w-[80%] mx-auto flex flex-col items-center justify-center pt-[30px]'>

                    <motion.div
                        initial={{
                            x: 0,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 1
                        }}
                        className='text-[32px] font-[600] text-red-500'>
                        {team.Contents.ContentOne.Title}
                    </motion.div>

                    <motion.div
                        initial={{
                            x: 0,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 1
                        }}
                        className='text-center mt-[10px]'>
                        {team.Contents.ContentOne.description}
                    </motion.div>

                    <motion.div
                        initial={{
                            x: 0,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 1
                        }}
                        className='grid grid-cols-1 700px:grid-cols-2 900px:grid-cols-3 1000px:grid-cols-3 w-100% gap-8 mt-[26px] pb-[50px]'>

                        {
                            teamArray.map((teamMember, index) => {
                                return (
                                    <div className='w-[300px] bg-gray-800 flex flex-col gap-3 text-center p-[5px] rounded-lg h-[600px] relative'
                                    key={index}
                                    >
                                        <div className='h-[500px] overflow-hidden'>
                                            <img
                                                src={teamMember.image}
                                                alt=""
                                                className='w-full h-full rounded-t-lg object-cover' />
                                            </div>

                                        <div className='relative'>
                                            <p className='text-[22px] text-white font-[500] ml-[15px]'>
                                                {
                                                    teamMember.name
                                                }
                                            </p>

                                            <p className='text-[15px] text-white ml-[15px]'>
                                                {
                                                    teamMember.description
                                                }
                                            </p>
                                            <ExpandMoreIcon className='absolute top-[70px] text-red-500 rounded-full  bg-white' onClick={openPopUp1} />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </motion.div>

                </div>
                {/*   popup code   */}

                {popup1 ?
                    <div className='fixed top-0 left-0 right-0 inset-0 flex justify-center w-full h-full z-30 '>
                        <div className='absolute inset-0 flex justify-center w-full h-full bg-gray-300  z-30' >
                            <div className='overflow-y-scroll mt-[100px] object-center opacity-1 w-[60%] h-[400px] rounded-lg bg-white'>
                                <div className='z-100 h-[50px] flex relative justify-end' onClick={closePopUp1}>
                                    <div className='fixed w-[20px] bg-white  flex justify-center text-red-500 font-[800] m-[20px]'>X</div>
                                </div>
                                <div className='px-[30px] w-full  1000px:px-[10px] flex items-center 1000px:justify-evenly justify-center gap-[10px] flex-col 700px:flex-row  '>
                                    <div className='w-[96%] 700px:w-1/4 700px:relative '>
                                        <div className='w-full 700px:absolute 700px:top-0  '>
                                            <img src={profile1} alt="" className='rounded-lg 700px:w-[400px] w-[400px] 700px:h-[200px] h-[200px]' />
                                            <p className='font-[700] text-center'>{team.Contents.ContentOne.objects.object1.name}</p>
                                            <p className='font-[500] text-center'>(
                                                {team.Contents.ContentOne.objects.object1.description}
                                                )</p>
                                        </div>

                                    </div>
                                    <div className='  text-justify w-[96%] 700px:w-3/4 700px:relative'>
                                        <div className='w-[96%] 700px:absolute 700px:top-0 px-[30px]'>
                                            {team.Contents.ContentOne.details.detail1.para1}
                                            <div><br />
                                                {team.Contents.ContentOne.details.detail1.para2}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail1.para3}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail1.para4}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail1.para5}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div> : ""}
                {popup3 ?
                    <div className='fixed top-0 left-0 right-0 inset-0 flex justify-center w-full h-full z-30 '>
                        <div className='absolute inset-0 flex justify-center w-full h-full bg-gray-300  z-30' >
                            <div className='overflow-y-scroll mt-[100px] object-center opacity-1 w-[60%] h-[400px] rounded-lg bg-white'>
                                <div className='z-100 h-[50px] relative flex justify-end' onClick={closePopUp3}>
                                    <div className='fixed w-[20px] bg-white flex justify-center text-red-500 font-[800] m-[20px]'>X</div>
                                </div>
                                <div className='px-[30px] w-full  1000px:px-[10px] flex items-center 1000px:justify-evenly justify-center gap-[10px] flex-col 700px:flex-row  '>
                                    <div className='w-[96%] 700px:w-1/4 700px:relative '>
                                        <div className='w-full 700px:absolute 700px:top-0  '>
                                            <img src={profile3} alt="" className='rounded-lg 700px:w-[400px] w-[400px] 700px:h-[200px] h-[200px]' />
                                            <p className='font-[700] text-center'>{team.Contents.ContentOne.objects.object3.name}</p>
                                            <p className='font-[500] text-center'>(
                                                {team.Contents.ContentOne.objects.object3.description}
                                                )</p>
                                        </div>

                                    </div>
                                    <div className='  text-justify w-[96%] 700px:w-3/4 700px:relative'>
                                        <div className='w-[96%] 700px:absolute 700px:top-0 px-[30px]'>
                                            {team.Contents.ContentOne.details.detail3.para1}
                                            <div><br />
                                                {team.Contents.ContentOne.details.detail3.para2}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail3.para3}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail3.para4}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail3.para5}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div> : ""}
                {/*  */}
                {popup4 ?
                    <div className='fixed top-0 left-0 right-0 inset-0 flex justify-center w-full h-full z-30 '>
                        <div className='absolute inset-0 flex justify-center w-full h-full bg-gray-300  z-30' >
                            <div className='overflow-y-scroll mt-[100px] object-center opacity-1 w-[60%] h-[400px] rounded-lg bg-white'>
                                <div className='z-100 h-[50px] relative flex justify-end' onClick={closePopUp4}>
                                    <div className='fixed w-[20px] bg-white flex justify-center text-red-500 font-[800] m-[20px]'>X</div>
                                </div>
                                <div className='px-[30px] w-full  1000px:px-[10px] flex items-center 1000px:justify-evenly justify-center gap-[10px] flex-col 700px:flex-row  '>
                                    <div className='w-[96%] 700px:w-1/4 700px:relative '>
                                        <div className='w-full 700px:absolute 700px:top-0  '>
                                            <img src={profile} alt="" className='rounded-lg 700px:w-[400px] w-[400px] 700px:h-[200px] h-[200px]' />
                                            <p className='font-[700] text-center'>{team.Contents.ContentOne.objects.object4.name}</p>
                                            <p className='font-[500] text-center'>(
                                                {team.Contents.ContentOne.objects.object4.description}
                                                )</p>
                                        </div>

                                    </div>
                                    <div className='  text-justify w-[96%] 700px:w-3/4 700px:relative'>
                                        <div className='w-[96%] 700px:absolute 700px:top-0 px-[30px]'>
                                            {team.Contents.ContentOne.details.detail4.para1}
                                            <div><br />
                                                {team.Contents.ContentOne.details.detail4.para2}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail4.para3}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail4.para4}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail4.para5}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail4.para6}
                                            </div><br />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div> : ""}
                {/*  */}
                {popup5 ?
                    <div className='fixed top-0 left-0 right-0 inset-0 flex justify-center w-full h-full z-30 '>
                        <div className='absolute inset-0 flex justify-center w-full h-full bg-gray-300  z-30' >
                            <div className='overflow-y-scroll mt-[100px] object-center opacity-1 w-[60%] h-[400px] rounded-lg bg-white'>
                                <div className='z-100 h-[50px] relative flex justify-end' onClick={closePopUp5}>
                                    <div className='fixed w-[20px] bg-white flex justify-center text-red-500 font-[800] m-[20px]'>X</div>
                                </div>
                                <div className='px-[30px] w-full  1000px:px-[10px] flex items-center 1000px:justify-evenly justify-center gap-[10px] flex-col 700px:flex-row  '>
                                    <div className='w-[96%] 700px:w-1/4 700px:relative '>
                                        <div className='w-full 700px:absolute 700px:top-0  '>
                                            <img src={profile5} alt="" className='rounded-lg 700px:w-[400px] w-[400px] 700px:h-[200px] h-[200px]' />
                                            <p className='font-[700] text-center'>{team.Contents.ContentOne.objects.object5.name}</p>
                                            <p className='font-[500] text-center'>(
                                                {team.Contents.ContentOne.objects.object5.description}
                                                )</p>
                                        </div>

                                    </div>
                                    <div className='  text-justify w-[96%] 700px:w-3/4 700px:relative'>
                                        <div className='w-[96%] 700px:absolute 700px:top-0 px-[30px]'>
                                            {team.Contents.ContentOne.details.detail5.para1}
                                            <div><br />
                                                {team.Contents.ContentOne.details.detail5.para2}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail5.para3}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail5.para4}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail5.para5}
                                            </div><br />
                                            <div>
                                                {team.Contents.ContentOne.details.detail5.para6}
                                            </div><br />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div> : ""}
            </div>
            <Footer />
        </div>
    )
}

export default MeetTheTeamPage