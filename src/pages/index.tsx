import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'

import Logo from '../assets/logo.svg'

import Preview from '../assets/preview.png'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { firebaseConfig } from '../service/firebase'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function index() {

  const db = getFirestore(firebaseConfig)
  const userCollection = collection(db, 'users')
  const notify = (message: string, type: 'success' | 'error') => toast(message, { type });



  return (

    <div className='bg-black min-w-screen bg-app bg-no-repeat bg-cover '>
      <div className=" lg:max-w-[1124px] h-screen lg:mx-auto  flex justify-center flex-col mx-10">
        <header className="flex items-center justify-between mt-10">
          <Image src={Logo} alt='Redatech logo' />
          <div className='flex gap-2 '>
            <button
              type="submit"
              className=' px-6 py-4 font-bold text-sm uppercase rounded text-white bg-orange-500 hover:bg-orange-900 disabled:bg-orange-800'>Login </button>

            <button
              type="submit"
              className='hidden lg:block px-6 py-4 font-bold text-sm uppercase rounded text-white bg-redatech-500 hover:bg-redatech-900 disabled:bg-redatech-800'>Sign In </button>

          </div>
        </header>

        <main className='grid lg:grid-cols-2 grid-cols-1 items-center gap-28 mx-auto'>

          <section className=''>
            <h1 className='mt-5 lg:mt-14 text-5xl text-white leading-tight font-bold ' >
              Desenvolva suas habilidades em redação e pontue alto no ENEM.
            </h1>

            <p className='lg:mt-10 mt-4 text-white text-xl text-justify'><span className='text-bold text-orange-500'>+ 300</span> alunos consumiram esse conteúdo </p>

            <button
              type="submit"
              className='mt-4 px-6 py-4 font-bold text-sm uppercase rounded text-white bg-orange-500 hover:bg-orange-900 disabled:bg-orange-800'>Entrar </button>

          </section>

          <Image src={Preview} alt='Homem conectando um cabo usb em um cérebro humano' priority className='hidden lg:block' />

        </main >

      </div >
      <ToastContainer autoClose={5000} hideProgressBar />
    </div>

  )
}


