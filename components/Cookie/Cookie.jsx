import { updateCookieComponentShowToFalse } from '@/redux/cookieComponentShow';
import React from 'react'
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';

const Cookie = () => {

    const dispatch = useDispatch()
    const cookieComponent = useSelector(state => state.cookieComponentShow)

    const maxAgeInSeconds = 31536000; // Setting max age for 1 year

    const [cookies, setCookies] = useCookies(['cookieAccept'])

    function cookieUpdate() {
        setCookies('cookieAccept', 'accepted', { maxAge: maxAgeInSeconds })
        dispatch(updateCookieComponentShowToFalse())
    }

    function tempCookieUpdate() {
        dispatch(updateCookieComponentShowToFalse())
    }

    return (
        <div
        className='z-[100] fixed bottom-[2vh] bg-blueBackground left-1/2 -translate-x-1/2 w-[90vw] p-[20px] flex flex-col gap-[20px]'
            style={{
                display: (cookieComponent && (cookies.cookieAccept !== 'accepted') ) ? 'block' : 'none'
            }}>
            <div className='text-[20px] font-bold'>
            Welcome to Giri Info Tech! We use cookies to optimize the website experience.
            </div>
            <div className='mt-[10px]'>
            When you visit our site, information may be stored on your browser in the form of cookies. This data, related to your preferences or device, is primarily used to ensure the site functions as expected.While this information doesn't typically identify you directly, it contributes to a more personalized web experience. Your privacy is important to us, and you have the option to manage cookie preferences. Keep in mind that blocking certain cookies might affect your site experience and the services we provide.
            </div>

            <div
            className='flex items-center gap-[30px] mt-[20px]'>
                <button
                name="cookie accept button"
                className='px-[20px] py-[8px] bg-green-600 rouned-full'
                onClick={()=>{cookieUpdate()}}>
                    Accept
                </button>
                <button
                name='cookie cancel button'
                className='px-[20px] py-[8px] bg-green-600 rouned-full'
                onClick={()=>{tempCookieUpdate()}}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default Cookie