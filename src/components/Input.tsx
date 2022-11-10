import React, { InputHTMLAttributes } from 'react'


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    layout?: "Vertical" | "Horizontal";
}

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    label?: string;
}

export interface OptionProps extends InputHTMLAttributes<HTMLOptionElement> { }




export function Input({ label, className, layout = 'Horizontal', ...rest }: InputProps) {
    return (
        <input {...rest} className={`${className} bg-[#202024] h-12 text-gray-200 py-4 w-full px-5 outline-gray-700 'w-full`} />
    )
}


export function Select({ className, children, label, ...rest }: SelectProps) {
    return (
        <select className={`bg-[#202024] h-14 text-gray-200 py-4 px-5 outline-gray-700 w-full ${className} `} {...rest} placeholder='teste'>
            <Option hidden >{label}</Option>
            {children}
        </select>
    )
}

export function Option({ children, ...rest }: OptionProps) {
    return (
        <option className='text-gray-200' {...rest} >
            {children}
        </option>
    )
}
