import Image from 'next/image'
import React from 'react'

import ImgLogo from '../assets/logo.svg'

export default function Logo() {
    return (
        <Image src={ImgLogo} alt='Redatech logo' />
    )
}
