import React from 'react'
import Image from 'next/image'


import img404 from '../assets/404.svg'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main className='flex h-screen justify-center items-center flex-col' >
            <Image src={img404} alt='404' />
            <h1 className='text-white text-3xl mt-14'>Página não encontrada</h1>

            <Link href="/" className='text-redatech-500'>Voltar ao inicio</Link>
        </main>
    )
}
