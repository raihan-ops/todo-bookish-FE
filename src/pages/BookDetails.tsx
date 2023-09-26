import React from 'react';
import Footer from '../layouts/Footer';
import Bookdescription from '../components/page/Bookdescription';
import Review from '../components/page/Review';

const BookDetails = () => {
    return (
        <div>
            <div className='px-[25px]'>
                <Bookdescription />
                <Review />
            </div>
            <Footer />
        </div>
    );
};

export default BookDetails;