import React from 'react';
import { Input } from '../ui/Input';
import Button from '../ui/Button';
import Comment from '../Comment';

const Review = () => {
    return (
        <div className='mt-[94px] w-[473px] p-[25px]'>
            <p className='text-[24px] font-semibold'>Add a review</p>
            <p className='text-[14px] text-nav-text-color'>Be the first to review
                <span>Spectacular views of Questions</span>
            </p>

            <div className='my-[40px] flex gap-3'>
                <Input
                    type='text'
                    name='comment'
                    placeholder='Share your thoughts'
                />
                <Button>Post it!</Button>
            </div>
            <p className='text-[24px] font-semibold'>3 comments</p>
            <Comment />
            <br />
            <Comment />
            <br />
            <Comment />
            <br />
            <Comment />
        </div>
    );
};

export default Review;