import React, { InputHTMLAttributes } from 'react'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    layout?: "Vertical" | "Horizontal";
}


export function Input({ label, className, layout = 'Horizontal', ...rest }: InputProps) {
    return (
        <input {...rest} className={`${className} bg-[#202024] h-16 text-gray-200 py-4 w-full px-5 outline-gray-700 'w-full`} />
    )
}
