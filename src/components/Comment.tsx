import React from 'react';

const Comment = () => {
    return (
        <div className='flex gap-3 bg-input-inner-bg-gray p-3 rounded-lg'>
            <div>
                <div className="rounded-full h-[48px] w-[48px] bg-label-color-gray1"></div>
            </div>
            <div>
                <p className='text-[14px] font-semibold'>Osbaldo TTTT</p>
                <p className='text-[14px] text-GrayBg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque mattis molestie eget phasellus tellus amet duis in.</p>
                <p className='text-[12px] text-nav-text-color'>about 1 hour ago</p>
            </div>
        </div>
    );
};

export default Comment;