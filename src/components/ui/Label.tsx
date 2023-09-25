import React from 'react';

interface Props {
    children: React.ReactNode;
}
const Label = ({ children }: Props) => {
    return (
        <>
            <label className='text-label-color-gray1 font-inter text-sm font-medium'>{children}</label>
        </>
    );
};

export default Label;