import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import logo from '../../assest/icons/logooo.jpeg'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Backdrop from '@mui/material/Backdrop';
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';
import HireComponent from '../HireComponent/HireComponent';
import { updateHireComponentShowToTrue } from '@/redux/HireComponentShow';
import { subNavOptions } from './SubNavoptions';
import Aboutus from './Aboutus';
import Cloud from './Cloud';
import WhoWeAre from './WhoWeAre';
import Insights from './Insights';
import Careers from './Careers';
import Cookie from '../Cookie/Cookie';


const Navbar = () => {

    const [navbarFullMenuShow, setNavbarFullMenuShow] = useState('')
    const [showNavbarInNp, setShowNavbarInNp] = useState(false)
    const [showSubOptionsInNp, setShowSubOptionsInNp] = useState(0)
    const [scrollReached, setScrollReached] = useState(false);

    const open = useSelector(state => state.HireComponentShow)
    const dispatch = useDispatch()

    const logo = "https://websiteimagessb.s3.us-west-2.amazonaws.com/logos.png"
    const logored = "https://websiteimagessb.s3.us-west-2.amazonaws.com/logo1.png"

    const handleScroll = () => {
        if (window.scrollY >= 200) {
            setScrollReached(true);
        } else {
            setScrollReached(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // return () => {
        //   window.removeEventListener('scroll', handleScroll);
        // };
    }, []);

    return (
        <div className='w-full fixed top-0 left-0 z-50'>
            <div className={`w-full h-[10vh] ${scrollReached ? 'bg-primaryColor' : 'bg-transparent'} transition-all duration-1000 flex items-center justify-between px-[16px] 900px:px-[50px] text-white relative`}>

                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >

                    <HireComponent />

                </Backdrop>

                <div className='hidden items-center justify-center gap-[20px] 900px:flex'>

                    <Link href={'/'}>
                        <div className='w-[10vw] cursor-pointer'><img src={scrollReached ? logored : logo} alt='' className='w-full' /></div>
                    </Link>

                    <div className='flex items-center justify-center gap-[20px] font-[600]'>

                        <div
                            className={`cursor-pointer w-fit relative group h-[10vh] flex items-center justify-center group`}
                            onMouseEnter={() => { setNavbarFullMenuShow('WHATWEDO') }}
                            onMouseLeave={() => { setNavbarFullMenuShow('') }}
                        >
                            <span>Company</span>
                            <div className={`absolute bottom-[2vh] left-1/2 -translate-x-1/2 h-[2px] w-full bg-white scale-0 group-hover:scale-100 transition-all duration-500 origin-center rounded-full`} />
                        </div>


                        <div
                            className='cursor-pointer w-fit relative group h-[10vh] flex items-center justify-center'
                            onMouseEnter={() => { setNavbarFullMenuShow('WHOWEARE') }}
                            onMouseLeave={() => { setNavbarFullMenuShow('') }}>
                            <span>Services</span>
                            <div className={`absolute bottom-[2vh] left-1/2 -translate-x-1/2 h-[2px] w-full bg-white scale-0 group-hover:scale-100 transition-all duration-500 origin-center rounded-full`} />
                        </div>

                        <div
                            className='cursor-pointer w-fit relative group h-[10vh] flex items-center justify-center'
                            onMouseEnter={() => { setNavbarFullMenuShow('CLOUD') }}
                            onMouseLeave={() => { setNavbarFullMenuShow('') }}>
                            <span>Cloud</span>
                            <div className={`absolute bottom-[2vh] left-1/2 -translate-x-1/2 h-[2px] w-full bg-white scale-0 group-hover:scale-100 transition-all duration-500 origin-center rounded-full`} />
                        </div>

                        <div
                            className='cursor-pointer w-fit relative group h-[10vh] flex items-center justify-center'
                            onMouseEnter={() => { setNavbarFullMenuShow('INSIGHTS') }}
                            onMouseLeave={() => { setNavbarFullMenuShow('') }}>
                            <span>Industries</span>
                            <div className={`absolute bottom-[2vh] left-1/2 -translate-x-1/2 h-[2px] w-full bg-white scale-0 group-hover:scale-100 transition-all duration-500 origin-center rounded-full`} />
                        </div>

                        <Link href={'/blogs'}>
                            <div className='cursor-pointer w-fit relative group h-[10vh] flex items-center justify-center'>
                                <span>Blogs</span>
                                <div className={`absolute bottom-[2vh] left-1/2 -translate-x-1/2 h-[2px] w-full bg-white scale-0 group-hover:scale-100 transition-all duration-500 origin-center rounded-full`} />
                            </div>
                        </Link>
                        
                        <Link href={'/career'}>
                            <div className='cursor-pointer w-fit relative group h-[10vh] flex items-center justify-center'>
                                <span>Career</span>
                                <div className={`absolute bottom-[2vh] left-1/2 -translate-x-1/2 h-[2px] w-full bg-white scale-0 group-hover:scale-100 transition-all duration-500 origin-center rounded-full`} />
                            </div>
                        </Link>

                    </div>

                </div>

                {/*---------------------------------- Responsive part ----------------------------------------------------- */}

                {
                    showNavbarInNp ?
                        <CloseIcon className='block 900px:hidden 900px:opacity-0' onClick={() => { setShowNavbarInNp(prev => !prev) }} />
                        :
                        <MenuIcon className='block 900px:hidden 900px:opacity-0' onClick={() => { setShowNavbarInNp(prev => !prev) }} />
                }

                <div className={`h-[90vh] ${showNavbarInNp ? 'bg-primaryColor translate-x-0' : '-translate-x-full'} z-[500] absolute top-[10vh] left-0 w-full transition-all duration-500 px-[10px] pt-[10px] flex gap-[20px]`} >

                    <div className='flex flex-col gap-[10px] w-[130px]'>

                        <div
                            className='w-full flex items-center justify-between'
                            onClick={() => { setShowSubOptionsInNp(1) }}>
                            <span>Company</span>
                            {
                                showSubOptionsInNp === 1 ?
                                    <ArrowForwardIcon />
                                    :
                                    <ArrowDownwardIcon />
                            }

                        </div>

                        <div
                            className='w-full flex items-center justify-between'
                            onClick={() => { setShowSubOptionsInNp(2) }}>
                            <span>Services</span>
                            {
                                showSubOptionsInNp === 2 ?
                                    <ArrowForwardIcon />
                                    :
                                    <ArrowDownwardIcon />
                            }

                        </div>

                        <div
                            className='w-full flex items-center justify-between'
                            onClick={() => { setShowSubOptionsInNp(3) }}>
                            <span>Cloud</span>
                            {
                                showSubOptionsInNp === 3 ?
                                    <ArrowForwardIcon />
                                    :
                                    <ArrowDownwardIcon />
                            }

                        </div>

                        <div
                            className='w-full flex items-center justify-between'
                            onClick={() => { setShowSubOptionsInNp(4) }}>
                            <span>Industries</span>
                            {
                                showSubOptionsInNp === 4 ?
                                    <ArrowForwardIcon />
                                    :
                                    <ArrowDownwardIcon />
                            }

                        </div>

                        <Link href={'/blogs'}><div
                            className='w-full flex items-center justify-between'
                            // onClick={() => { setShowSubOptionsInNp(5) }}
                            >
                            <span>Blogs</span>
                            {/* {
                                showSubOptionsInNp === 5 ?
                                    <ArrowForwardIcon />
                                    :
                                    <ArrowDownwardIcon />
                            } */}

                        </div>
                        </Link>

                        <Link href={'/career'}><div
                            className='w-full flex items-center justify-between'
                            onClick={() => { setShowSubOptionsInNp(5) }}>
                            <span>Career</span>
                            {/* {
                                showSubOptionsInNp === 5 ?
                                    <ArrowForwardIcon />
                                    :
                                    <ArrowDownwardIcon />
                            } */}

                        </div>
                        </Link>

                    </div>

                    <div className=''>

                        {
                            subNavOptions.map((subNavOption) => {
                                return (
                                    <div
                                        key={subNavOption.id}
                                        className={`${subNavOption.id === showSubOptionsInNp ? 'flex' : 'hidden'} flex-col gap-[10px]`}
                                    >

                                        {
                                            subNavOption.content.map((content) => {
                                                return (
                                                    <Link
                                                        href={content.link}
                                                        key={content.id}>
                                                        <p className='text-white'>
                                                            {content.tag}
                                                        </p>
                                                    </Link>
                                                )
                                            })
                                        }

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

                {/* ------------------------------------------ Responsive part -------------------------------------- */}

                <div className='flex items-center justify-center gap-[20px]'>

                    <div className='cursor-pointer w-fit relative group'>
                        <Link href={'/ContactUs'}>
                            <span className='group-hover:underline'>Contact us</span>
                        </Link>
                    </div>

                    <div 
                    className='text-white cursor-pointer' 
                    onClick={()=>{ dispatch(updateHireComponentShowToTrue()) }}>
                        <SupportAgentIcon />
                    </div>

                </div>

                <div
                    className={`absolute top-[10vh] left-0 w-full ${navbarFullMenuShow === 'WHATWEDO' ? 'h-[300px]' : 'h-0'} bg-secondaryColor transition-all duration-300 overflow-hidden z-50`}
                    onMouseEnter={() => { setNavbarFullMenuShow('WHATWEDO') }}
                    onMouseLeave={() => { setNavbarFullMenuShow('') }}>

                    {navbarFullMenuShow && <Aboutus />}

                </div>

                <div
                    className={`absolute top-[10vh] left-0 w-full ${navbarFullMenuShow === 'CLOUD' ? 'h-[350px]' : 'h-0'} bg-secondaryColor transition-all duration-300 overflow-hidden z-50`}
                    onMouseEnter={() => { setNavbarFullMenuShow('CLOUD') }}
                    onMouseLeave={() => { setNavbarFullMenuShow('') }}>

                    {navbarFullMenuShow && <Cloud />}

                </div>

                <div
                    className={`absolute top-[10vh] left-0 w-full ${navbarFullMenuShow === 'WHOWEARE' ? 'h-[350px]' : 'h-0'} bg-secondaryColor transition-all duration-300 overflow-hidden z-50`}
                    onMouseEnter={() => { setNavbarFullMenuShow('WHOWEARE') }}
                    onMouseLeave={() => { setNavbarFullMenuShow('') }}>

                    {navbarFullMenuShow && <WhoWeAre />}

                </div>

                <div
                    className={`absolute top-[10vh] left-0 w-full ${navbarFullMenuShow === 'INSIGHTS' ? 'h-[400px]' : 'h-0'} bg-secondaryColor transition-all duration-300 overflow-hidden z-50`}
                    onMouseEnter={() => { setNavbarFullMenuShow('INSIGHTS') }}
                    onMouseLeave={() => { setNavbarFullMenuShow('') }}>

                    {navbarFullMenuShow && <Insights />}

                </div>

                <div
                    className={`absolute top-[10vh] left-0 w-full ${navbarFullMenuShow === 'CAREERS' ? 'h-[500px]' : 'h-0'} bg-secondaryColor transition-all duration-300 overflow-hidden z-50`}
                    onMouseEnter={() => { setNavbarFullMenuShow('CAREERS') }}
                    onMouseLeave={() => { setNavbarFullMenuShow('') }}>

                    {navbarFullMenuShow && <Careers />}

                </div>

                {/* <Cookie /> */}
            </div>
        </div>
    )
}

export default Navbar