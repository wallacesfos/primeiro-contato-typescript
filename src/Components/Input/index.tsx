import {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string;
    label?: string;
}

export default function Input({label, placeholder, ...rest}: InputProps){

    return(
        <div>
            {label && <label>{label}</label>}
            <input placeholder={placeholder} {...rest} />
        </div>
    )
}