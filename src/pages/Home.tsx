import React from 'react';
import Footer from '../layouts/Footer';
import Book from '../components/Book';
import { useGetBooksQuery } from '../redux/features/books/bookApi';
import { IBook } from '../types/booksTypes';

const Home = () => {

    const { data } = useGetBooksQuery(undefined)

    return (
        <div>
            <div className='container mx-auto'>
                <p className='text-[32px] font-bold'>Top Recent 10 Books</p>
                <div className='grid grid-cols-4 mt-[30px]'>
                    {data?.data?.books?.map((book: IBook) => <Book key={book._id} book={book} />)}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Home;