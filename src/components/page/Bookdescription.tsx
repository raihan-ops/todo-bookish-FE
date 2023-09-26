import React from 'react';
import Button from '../ui/Button';
import { useParams } from 'react-router-dom';
import { useSingleBookQuery } from '../../redux/features/books/bookApi';

const Bookdescription = () => {
    const { id } = useParams();

    const { data } = useSingleBookQuery(id);
    const { author, genre, publication_date, title,description} = data?.data?.book
    return (
        <div className="grid grid-cols-2">
            <div className='p-[25px]'>
                <img className="w-full h-[500px] rounded-[20px]" src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
            </div>
            <div className='p-[25px] flex flex-col justify-between'>

                <div>
                    <p className='text-[32px] font-bold truncate'>Chocolate CheeseCake</p>
                    <p className='text-[24px] font-bold'>by: Jhon</p>
                    <p className='text-[#626264] text-ellipsis overflow-y-auto h-[250px] mt-2 '>{description}
                    </p>
                    <p className='font-bold mt-2'>Genre:Hunting</p>
                    <p className='mt-2'>published by:20-05-2023</p>
                </div>

                <div className='flex gap-2'>
                    <Button>Edit book</Button>
                    <Button>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default Bookdescription;