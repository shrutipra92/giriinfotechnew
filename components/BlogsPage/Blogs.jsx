import React from 'react'
import Navbar from '../Navbar/Navbar'
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon'
import AllBlogs from './AllBlogs'
import Footer from '../Footer/Footer'

const Blogs = () => {
  return (
    <div
    className='w-full'>

        <Navbar />

        <WhatsAppIcon />

        <AllBlogs />

        <Footer />

    </div>
  )
}

export default Blogs