import React from 'react'
import { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const LogInPage = () => {
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    function handleLogin() {

        if (username === '') {
            setUsernameError(true)
            setPasswordError(false)
            return
        }
        if (password === '') {
            setPasswordError(true)
            setUsernameError(false)
            return
        }

        setUsernameError(false)
        setPasswordError(false)

        // dispatch(update({ username }))

        sessionStorage.setItem("UserForDashboard", username)

        setUsername('')
        setPassword('')

        location.reload()

    }

    return (
        <div
            className='w-full min-h-[100vh] pt-[10vh] flex items-center justify-center relative before:w-[50%] before:h-full before:absolute before:left-0 before:top-0 before:bg-white 750px:before:bg-primaryColor before:z-[-1]'>

            <div
                className='w-[92%] 750px:w-[80%] h-[500px] relative before:w-0 750px:before:w-[45%] before:h-full before:absolute before:left-0 before:top-0 before:bg-primaryColor before:z-[-1] rounded-[10px] flex'
                style={{
                    boxShadow: '2px 2px 10px 0px rgba(0,0,0,0.75)'
                }}>

                <div className='w-[45%] h-full items-center justify-center flex-col gap-[20px] text-white hidden 750px:flex'>

                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        alt=""
                        className='w-[320px] 900px:w-[400px]' />

                </div>

                <div className='w-[100%] 750px:w-[55%] flex items-center justify-center'>

                    <div className='w-fit flex flex-col items-center justify-center gap-[26px]'>

                        <p className='font-[600] text-[24px]'>
                            Log In
                        </p>

                        <form action="" className='flex flex-col gap-[16px]'>

                            <div className='flex flex-col gap-[6px]'>

                                <label htmlFor="name" className='font-[500]'>
                                    User name
                                </label>

                                <input
                                    type="text"
                                    placeholder='Enter your name'
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }}
                                    className='outline-none border border-gray-400 px-[10px] py-[4px] rounded-[6px] w-[260px]' />

                                {
                                    usernameError &&
                                    <div className='text-red-400'>
                                        Please enter your name
                                    </div>
                                }

                            </div>

                            <div className='flex flex-col gap-[6px]'>

                                <label htmlFor="password" className='font-[500]'>
                                    Password
                                </label>

                                <div className='border border-gray-400 px-[10px] py-[4px] rounded-[6px] w-[260px] flex items-center justify-between'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Enter your password'
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        className='outline-none border-none w-[220px] h-full' />

                                    {
                                        showPassword ?
                                            <VisibilityIcon
                                                className='cursor-pointer'
                                                onClick={() => { setShowPassword(prev => !prev) }} />
                                            :
                                            <VisibilityOffIcon
                                                className='cursor-pointer'
                                                onClick={() => { setShowPassword(prev => !prev) }} />
                                    }

                                </div>


                                {
                                    passwordError &&
                                    <div className='text-red-400'>
                                        Please enter your password
                                    </div>
                                }

                            </div>

                        </form>

                        <button
                            className='bg-primaryColor w-full text-white font-[600] py-[6px] rounded-[6px]'
                            onClick={() => { handleLogin() }}>
                            Log in
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default LogInPage