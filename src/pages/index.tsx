import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'

import Logo from '../assets/logo.svg'

import Preview from '../assets/preview.png'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { firebaseConfig } from '../service/firebase'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function index() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const db = getFirestore(firebaseConfig)
  const userCollection = collection(db, 'users')
  const notify = (message: string, type: 'success' | 'error') => toast(message, { type });

  async function addUser(event: FormEvent) {

    event.preventDefault()
    setLoading(true)

    try {

      await addDoc(userCollection, {
        email: email
      })

      notify('Email cadastrado com sucesso!', 'success')

      setLoading(false)
      setEmail('')

    } catch (error) {
      setLoading(false)
      notify('Erro ao cadastrar email!', 'error')
      console.log(error)
    } finally {
      setLoading(false)
    }




  }

  return (

    <>
      <div className="lg:max-w-[1124px] h-screen lg:mx-auto justify-center grid lg:grid-cols-2 grid-cols-1 mx-10 items-center gap-28">
        <main>
          <Image src={Logo} alt='Redatech logo' />

          <h1 className='mt-14 text-5xl text-white leading-tight font-bold ' >
            Desenvolva suas habilidades em redação e pontue alto no ENEM.
          </h1>

          <form className='mt-10 flex gap-2' onSubmit={addUser}>
            <input
              required
              onChange={event => setEmail(event.target.value)}
              value={email}
              type="email"
              placeholder='Digite seu melhor e-mail'
              className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
            />
            <button
              type="submit"
              disabled={loading}
              className=' px-6 py-4 font-bold text-sm uppercase rounded text-white bg-orange-500 hover:bg-orange-900 disabled:bg-orange-800'
            > {loading ? (
              <div className='animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-100'></div>
            ) : 'Cadastrar'} </button>
          </form >


          <p className='mt-4 text-gray-400 text-sm leading-relaxed'>Coloque seu melhor e-mail para entrarmos em contato assim que alguma atualização.</p>
        </main >

        <Image src={Preview} alt='Homem conectando um cabo usb em um cerebro humano' priority className='hidden lg:block' />



      </div >
      <ToastContainer autoClose={5000} />
    </>

  )
}
