import React from 'react'
import Button from '../components/Button'
import { Input } from '../components/Input'
import Logo from '../components/Logo'
import { GoogleLogo, FacebookLogo } from "phosphor-react";

export default function Cadastrar() {
    return (
        <div className='mx-10 lg:mx-auto max-w-[1140px]'>
            <main className='flex h-screen items-center justify-center '>


                <div className='flex justify-center flex-col gap-10'>


                    <div className="flex justify-center">
                        <Logo />
                    </div>
                    <div className="">
                        <p className='mb-2 text-gray-500 font-thin text-sm'>Conecte-se através: </p>
                        <div className=' grid grid-cols-2 gap-2 justify-start'>

                            <div className='rounded-md bg-red-700 cursor-pointer hover:bg-red-900 p-2 flex items-center justify-center gap-2'>
                                <GoogleLogo color='#fff' size={30} />
                                <span className='text-white text-md font-light'>Login com Google</span>
                            </div>
                            <div className='rounded-md bg-blue-700 cursor-pointer hover:bg-blue-900 p-2 flex items-center  justify-center gap-2'>
                                <FacebookLogo color='#fff' size={30} />
                                <span className='text-white text-md font-light'>Login com Facebook</span>
                            </div>
                        </div>
                    </div>
                </div>




            </main>

        </div>
    )
}
