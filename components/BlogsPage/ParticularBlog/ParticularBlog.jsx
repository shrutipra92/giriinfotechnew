import { useRouter } from 'next/router'
import React from 'react'
import { totalBlogsWithdetails } from '../AllBlogsDetails'
import Loader from '@/components/Loader/Loader'

const ParticularBlog = () => {

    const router = useRouter()
    const { slug } = router.query

    const Blog = totalBlogsWithdetails.filter(blog => blog.heading === slug);
    console.log(slug)
    console.log(Blog)
    if (Blog.length == 0) return <div>No Such Blog</div>
    const { heading, imageLink, category, authorName, authorPic, postedDate } = Blog[0]

    return (
        <div
            className='w-full pt-[10vh] min-h-screen bg-[#181A2A]'>

            <div
                className='w-[90%] 1000px:w-[60%] mx-auto py-[30px] flex flex-col gap-[20px] text-white text-[18px]'>

                <div
                    className='w-full text-white flex flex-col gap-[10px]'>

                    <p
                        className='p-[4px] bg-blue-400 rounded w-fit text-[12px]'>
                        {category}
                    </p>

                    <h1
                        className='text-[26px] 750px:text-[36px] font-[600]'>
                        {heading}
                    </h1>

                    <div
                        className='flex gap-[10px] items-center flex-wrap'>

                        {/* <div>
                            {
                                authorPic ?
                                    <img
                                        src={authorPic}
                                        alt={authorName}
                                        className='w-[30px] h-[30px] object-cover rounded-full' />
                                    :
                                    <Avatar />
                            }
                        </div> */}

                        <p
                            className='text-[20px] font-[600]'>
                            {authorName}
                        </p>

                        <p>
                            {postedDate}
                        </p>

                    </div>

                </div>

                <img
                    src={imageLink}
                    alt={heading}
                    className='w-full h-[50vh] object-cover rounded' />

                <p className='text-[26px] font-[600]'>
                    Lorem ipsum dolor sit amet.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita necessitatibus veniam velit tenetur sit, suscipit blanditiis facere, magnam ipsa eveniet hic ipsam maiores, numquam excepturi explicabo debitis voluptates aut iste totam magni accusantium possimus vero! Est laborum, cum vero enim fugiat in praesentium quasi officia pariatur maxime ipsam facere doloremque quisquam voluptatum eius minima dicta atque, nesciunt voluptate. Quas unde deleniti magnam enim libero natus doloribus esse eaque nam corporis omnis iste rem laudantium nisi mollitia asperiores, quod sapiente, suscipit porro dolorem soluta, tempora modi dolore. Accusantium beatae id eaque sint temporibus, molestiae, provident numquam totam, recusandae facere dolorum.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita necessitatibus veniam velit tenetur sit, suscipit blanditiis facere, magnam ipsa eveniet hic ipsam maiores, numquam excepturi explicabo debitis voluptates aut iste totam magni accusantium possimus vero! Est laborum, cum vero enim fugiat in praesentium quasi officia pariatur maxime ipsam facere doloremque quisquam voluptatum eius minima dicta atque, nesciunt voluptate. Quas unde deleniti magnam enim libero natus doloribus esse eaque nam corporis omnis iste rem laudantium nisi mollitia asperiores, quod sapiente, suscipit porro dolorem soluta, tempora modi dolore. Accusantium beatae id eaque sint temporibus, molestiae, provident numquam totam, recusandae facere dolorum.
                </p>

                <p className='text-[26px] font-[600]'>
                    Lorem ipsum dolor sit amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita necessitatibus veniam velit tenetur sit, suscipit blanditiis facere, magnam ipsa eveniet hic ipsam maiores, numquam excepturi explicabo debitis voluptates aut iste totam magni accusantium possimus vero! Est laborum, cum vero enim fugiat in praesentium quasi officia pariatur maxime ipsam facere doloremque quisquam voluptatum eius minima dicta atque, nesciunt voluptate. Quas unde deleniti magnam enim libero natus doloribus esse eaque nam corporis omnis iste rem laudantium nisi mollitia asperiores, quod sapiente, suscipit porro dolorem soluta, tempora modi dolore. Accusantium beatae id eaque sint temporibus, molestiae, provident numquam totam, recusandae facere dolorum.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita necessitatibus veniam velit tenetur sit, suscipit blanditiis facere, magnam ipsa eveniet hic ipsam maiores, numquam excepturi explicabo debitis voluptates aut iste totam magni accusantium possimus vero! Est laborum, cum vero enim fugiat in praesentium quasi officia pariatur maxime ipsam facere doloremque quisquam voluptatum eius minima dicta atque, nesciunt voluptate. Quas unde deleniti magnam enim libero natus doloribus esse eaque nam corporis omnis iste rem laudantium nisi mollitia asperiores, quod sapiente, suscipit porro dolorem soluta, tempora modi dolore. Accusantium beatae id eaque sint temporibus, molestiae, provident numquam totam, recusandae facere dolorum.
                </p>

                <p className='text-[26px] font-[600]'>
                    Lorem ipsum dolor sit amet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita necessitatibus veniam velit tenetur sit, suscipit blanditiis facere, magnam ipsa eveniet hic ipsam maiores, numquam excepturi explicabo debitis voluptates aut iste totam magni accusantium possimus vero! Est laborum, cum vero enim fugiat in praesentium quasi officia pariatur maxime ipsam facere doloremque quisquam voluptatum eius minima dicta atque, nesciunt voluptate. Quas unde deleniti magnam enim libero natus doloribus esse eaque nam corporis omnis iste rem laudantium nisi mollitia asperiores, quod sapiente, suscipit porro dolorem soluta, tempora modi dolore. Accusantium beatae id eaque sint temporibus, molestiae, provident numquam totam, recusandae facere dolorum.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint expedita necessitatibus veniam velit tenetur sit, suscipit blanditiis facere, magnam ipsa eveniet hic ipsam maiores, numquam excepturi explicabo debitis voluptates aut iste totam magni accusantium possimus vero! Est laborum, cum vero enim fugiat in praesentium quasi officia pariatur maxime ipsam facere doloremque quisquam voluptatum eius minima dicta atque, nesciunt voluptate. Quas unde deleniti magnam enim libero natus doloribus esse eaque nam corporis omnis iste rem laudantium nisi mollitia asperiores, quod sapiente, suscipit porro dolorem soluta, tempora modi dolore. Accusantium beatae id eaque sint temporibus, molestiae, provident numquam totam, recusandae facere dolorum.
                </p>

            </div>

        </div>
    )
}

export default ParticularBlog