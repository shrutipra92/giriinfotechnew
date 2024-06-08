import React, { useState } from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Avatar } from '@mui/material';
import { bannerBlogs, totalBlogsWithdetails } from './AllBlogsDetails';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import Link from 'next/link';

const AllBlogs = () => {
    const [filterOpen, setFilterOpen] = useState(false)
    const [checkedItems, setCheckedItems] = useState({
        allFilter: true,
        Technology: false,
        Automation: false,
    });

    const handleCheckboxChange = (name) => {
        if (name === 'allFilter') {
            setCheckedItems({
                allFilter: true,
                technologyFilter: false,
                automationFilter: false,
            });
        } else {
            setCheckedItems((prevCheckedItems) => ({
                ...prevCheckedItems,
                allFilter: false,
                [name]: !prevCheckedItems[name],
            }));
        }
    };

    const filteredBlogs = totalBlogsWithdetails.filter((blog) => {
        if (checkedItems.allFilter) return true;
        return checkedItems[blog.category];
      });

    return (
        <div
            className='w-full min-h-screen bg-[#181A2A] pt-[10vh]'>

            <div
                className='w-[90%] 1000px:w-[80%] mx-auto py-[30px] flex flex-col gap-[30px]'>

                <div
                    className='w-full relative'>

                    <div
                        className='text-white w-fit ml-auto cursor-pointer'
                        onClick={() => { setFilterOpen(pre => !pre) }}>
                        {
                            filterOpen ?
                                <FilterListOffIcon />
                                :
                                <FilterListOutlinedIcon />
                        }
                    </div>

                    <div
                        className={`absolute top-[26px] right-[0px] rounded bg-white text-[#181A2A] transition-all duration-500 ${filterOpen ? 'rounded w-fit h-fit opacity-100 p-[20px]' : 'h-0 w-0 opacity-0'}`}>

                        {
                            filterOpen &&
                            <ul
                                className={`transition-all duration-500 ${filterOpen ? 'rounded w-fit h-fit opacity-100' : 'h-0 w-0 opacity-0'}`}>

                                <li
                                    className={`flex items-center gap-[6px] transition-all duration-500 ${filterOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    <input
                                        type="checkbox"
                                        name="allFilter"
                                        id="allFilter"
                                        checked={checkedItems.allFilter}
                                        onChange={() => handleCheckboxChange('allFilter')}
                                        className={`accent-green-600 transition-all duration-500 ${filterOpen ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                    <p
                                        className={`transition-all duration-500 ${filterOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        All
                                    </p>
                                </li>

                                <li
                                    className={`flex items-center gap-[6px] transition-all duration-500 ${filterOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    <input
                                        type="checkbox"
                                        name="allFilter"
                                        id="allFilter"
                                        checked={checkedItems.Technology}
                                        onChange={() => handleCheckboxChange('Technology')}
                                        className={`accent-green-600 transition-all duration-500 ${filterOpen ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                    <p
                                        className={`transition-all duration-500 ${filterOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        Technology
                                    </p>
                                </li>

                                <li
                                    className={`flex items-center gap-[6px] transition-all duration-500 ${filterOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    <input
                                        type="checkbox"
                                        name="allFilter"
                                        id="allFilter"
                                        checked={checkedItems.Automation}
                                        onChange={() => handleCheckboxChange('Automation')}
                                        className={`accent-green-600 transition-all duration-500 ${filterOpen ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                    <p
                                        className={`transition-all duration-500 ${filterOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        Automation
                                    </p>
                                </li>

                            </ul>
                        }

                    </div>

                </div>

                <div
                    className='w-full grid gap-[30px] grid-cols-1 750px:grid-cols-2 1000px:grid-cols-3 1300px:grid-cols-4 2000px:grid-cols-5'>

                    {
                        filteredBlogs.map((blogDetails, index) => {
                            
                            return (
                                <Link
                                    href={`/blogs/${blogDetails.heading}`}
                                    key={index}
                                    className='w-full bg-gray-800 rounded-[10px] overflow-hidden cursor-pointer'>

                                    <img
                                        src={blogDetails.imageLink}
                                        alt={blogDetails.heading}
                                        className='w-full h-[200px] object-cover' />

                                    <div
                                        className='w-full p-[20px] text-white flex flex-col gap-[10px]'>

                                        <p
                                            className='p-[4px] bg-blue-400 rounded w-fit text-[12px]'>
                                            {blogDetails.category}
                                        </p>

                                        <h1
                                            className='text-[22px] font-[600]'>
                                            {blogDetails.heading}
                                        </h1>

                                        <div
                                            className='flex gap-[10px] items-center flex-wrap'>

                                            {/* <div>
                                                {
                                                    blogDetails.authorPic ?
                                                        <img
                                                            src={blogDetails.authorPic}
                                                            alt={blogDetails.authorName}
                                                            className='w-[30px] h-[30px] object-cover rounded-full' />
                                                        :
                                                        <Avatar />
                                                }
                                            </div> */}

                                            <p
                                                className='text-[20px] font-[600]'>
                                                {blogDetails.authorName}
                                            </p>

                                            <p>
                                                {blogDetails.postedDate}
                                            </p>

                                        </div>

                                    </div>

                                </Link>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default AllBlogs