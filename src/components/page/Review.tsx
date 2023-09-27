/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from 'react';
import { Input } from '../ui/Input';
import Button from '../ui/Button';
import Comment from '../Comment.tsx';
import { useParams } from 'react-router-dom';
import { useGetCommentQuery, usePostCommentMutation } from '../../redux/features/books/bookApi';
import { IComment } from '../../types/booksTypes';

const Review = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const { id } = useParams()
    const { data } = useGetCommentQuery(id,
        {
            refetchOnMountOrArgChange: true,
            pollingInterval: 30000,
        }
    )

    const [postComment, response] = usePostCommentMutation()
    console.log(data)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {

        console.log(inputValue);

        const options = {
            data: {
                comment: inputValue,
                bookId: id,
                name: "MR-X"
            },
        };

        postComment(options);
        setInputValue('');
    };


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
                    value={inputValue}
                    onChange={handleChange}
                    placeholder='Share your thoughts'
                />
                <Button onClick={() => handleSubmit()}>Post it!</Button>
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