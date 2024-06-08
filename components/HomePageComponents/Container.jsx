import React from 'react'
import Navbar from '../Navbar/Navbar'
import TopBanners from './TopBanners'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import FifthComponent from './FifthComponent'
import SixthComponent from './SixthComponent'
import SeventhComponent from './SeventhComponent'
import EighthComponent from './EighthComponent'
import NighthComponent from './NighthComponent'
import TenthComponent from './TenthComponent'
import Footer from '../Footer/Footer'
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon'

const Container = () => {
    return (
        <div
            className='w-full overflow-hidden'>
            <Navbar />
            <WhatsAppIcon />
            <TopBanners />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <FifthComponent />
            <SixthComponent />
            <SeventhComponent />
            <EighthComponent />
            <NighthComponent />
            <TenthComponent />
            <Footer />
        </div>
    )
}

export default Container