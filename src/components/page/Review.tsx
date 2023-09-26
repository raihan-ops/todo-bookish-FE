import React from 'react';
import { Input } from '../ui/Input';
import Button from '../ui/Button';
import Comment from '../Comment.tsx';
import { useParams } from 'react-router-dom';
import { useGetCommentQuery } from '../../redux/features/books/bookApi';
import { IComment } from '../../types/booksTypes';

const Review = () => {
    const { id } = useParams()
    const { data } = useGetCommentQuery(id)
    console.log(data)
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
            <p className='text-[24px] font-semibold'>{data?.data?.reviews?.length} comments</p>
            <div className='mt-[15px]'>
                {
                    data?.data?.reviews?.map((value: IComment, idx: number) => <>
                        <Comment key={idx} value={value} />
                        <br />
                    </>)
                }
            </div>

        </div>
    );
};

export default Review;