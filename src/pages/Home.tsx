import React from 'react';
import Footer from '../layouts/Footer';
import Book from '../components/Book';

const Home = () => {
    return (
        <div>
            <div className='container'>
                <p>Top Recent 10 Books</p>
                <Book />
                <Book />
            </div>
            <Footer />
        </div>
    );
};

export default Home;