import moment from "moment";
import { Link } from "react-router-dom";
import { IBook } from "../types/booksTypes";

interface IProps {
    book: IBook
}

const Book = ({ book }: IProps) => {

    const { author, genre, publication_date, title, _id :id } = book
    return (
        <div className="h-[400px] bg-gray-100 w-[300px]">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
                <div className="p-4">
                    <span className="bg-place-holder-color-gray1 py-2 px-4 text-sm font-semibold text-white rounded-full cursor-pointer">{genre}</span>
                    <h1 className="mt-4 text-3xl font-bold hover:underline cursor-pointer">{title}</h1>
                    <p className="mt-2 font-sans text-gray-700">by {author}</p>
                    <p className="mt-2 font-sans text-gray-700">Published: {moment(publication_date).format("DD-MM-YYYY")}</p>
                </div>
                <div className="relative">
                    <img className="w-full h-[200px]" src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
                    <p className="absolute text-[14px] transform translate-x-20 -translate-y-20 bg-black1 text-white py-3 px-6 rounded-full cursor-pointer hover:scale-105 duration-500 font-semibold">
                        <Link to={`/book-details/${id}`}>Discover more</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Book;