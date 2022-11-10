import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    tipo?: 'primary' | 'secondary';
}

export default function Button({ className, title, tipo = 'primary', ...rest }: ButtonProps) {
    return (
        <button
            className={`${className} h-12 w-full ${tipo === 'secondary' ? 'bg-redatech-500' : 'bg-orange-500'} text-gray-200  outline-gray-700 ${tipo === 'secondary' ? 'hover:bg-redatech-800' : 'hover:bg-orange-800 duration-200'}`}
            {...rest}>

            {title}

        </button>
    )
}
