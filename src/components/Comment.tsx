import React from 'react';
import { IComment } from '../types/booksTypes';
import moment from 'moment';

interface IProps {
    value: IComment
}
const Comment = ({ value }: IProps) => {
    const { comment:desc, name, createdAt } = value
    return (
        <div className='flex gap-3 bg-input-inner-bg-gray p-3 rounded-lg'>
            <div>
                <div className="rounded-full h-[48px] w-[48px] bg-label-color-gray1"></div>
            </div>
            <div>
                <p className='text-[14px] font-semibold'>{name}</p>
                <p className='text-[14px] text-GrayBg'>{desc}</p>
                <p className='text-[12px] text-nav-text-color'>about {moment(createdAt).startOf('hour').fromNow()}</p>
            </div>
        </div>
    );
};

export default Comment;