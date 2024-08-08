import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export function Button({ children, onClick }: Readonly<ButtonProps>) {

    return (
        <button onClick={onClick} className='p-3 text-slate-50 bg-slate-800 rounded-full text-sm'>
            {children}
        </button>
    )
}