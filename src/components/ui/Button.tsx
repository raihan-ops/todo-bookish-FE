import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, ...attributes }: Props) {
    return (
        <button
            type="button"
            className="border border-gray-800 px-4 py-2 rounded-full w-full text-white bg-black1 font-DM font-bold drop-shadow-button-drop-shadow"
            {...attributes}
        >
            {children}
        </button>
    );
}