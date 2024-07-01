'use client'

import { loginOl } from '@/app/actions'
import React, { useEffect, useState } from 'react'

const LoginAndRegisterForms = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [gonder, setGonder] = useState(false)

    function formSubmit(e){
        e.preventDefault()
        
        if( username != null && password != null ){
            
            setGonder(true)
            
        }else{
            // uyari lutfen doldurun
        }

    }

    useEffect( ()=>{

        if( gonder ){

        const getPrd = async () => {

           
            const user = await loginOl();
            setGonder(false)

            console.log('user', user)
            

        };
        getPrd();
    }

    }, [gonder])

    return (
        <>
            <div className='w-1/2 shadow-xl p-8 rounded-xl'>

                <h1 className='text-3xl font-semibold'>LOGIN</h1>

                <form action="" onSubmit={ (e)=> formSubmit(e) }>

                    <ul className='flex flex-col gap-4 my-6'>
                        <li>
                            <label htmlFor="username">
                                <span>Username or Email</span>
                                <input 
                                    onChange={ (e)=>{ setUsername(e.target.value) } }
                                    value={username}
                                    defaultValue={''}
                                    className='w-full border rounded-md p-2'
                                    type="text" id="username" name=""
                                />
                            </label>
                        </li>
                        <li>
                            <label htmlFor="password">
                                <span>Password</span>
                                <input 
                                    onChange={ (e)=>{ setPassword(e.target.value) } }
                                    value={password}
                                    defaultValue={''}
                                    className='w-full border rounded-md p-2'
                                    type="password" id="password" name=""
                                />
                            </label>
                        </li>
                    </ul>
                
                    <button type="submit">SUBMIT</button>
                    
                </form>

            </div>
            <div className='w-1/2 shadow-xl p-8 rounded-xl'>

                <h1 className='text-3xl font-semibold'>REGISTER</h1>

                <form action="">

                    <ul className='flex flex-col gap-4 my-6'>
                        <li>
                            <label htmlFor="username">
                                <span>Username or Email</span>
                                <input 
                                    className='w-full border rounded-md py-2'
                                    type="text" id="username" name="" value=""
                                />
                            </label>
                        </li>
                    </ul>


                </form>

            </div>
        </>
    )
}

export default LoginAndRegisterForms