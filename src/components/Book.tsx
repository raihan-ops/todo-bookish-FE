
const Book = () => {
    return (
        <div className="h-[400px] bg-gray-100 w-[300px]">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
                <div className="p-4">
                    <span className="bg-place-holder-color-gray1 py-2 px-4 text-sm font-semibold text-white rounded-full cursor-pointer">Genre</span>
                    <h1 className="mt-4 text-3xl font-bold hover:underline cursor-pointer">Super Books</h1>
                    <p className="mt-2 font-sans text-gray-700">by Diseño Constructivo</p>
                    <p className="mt-2 font-sans text-gray-700">Published: 17-02-2022</p>
                </div>
                <div className="relative">
                    <img className="w-full h-[200px]" src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
                    <p className="absolute text-[14px] transform translate-x-20 -translate-y-20 bg-black1 text-white py-3 px-6 rounded-full cursor-pointer hover:scale-105 duration-500 font-semibold">Discover more</p>
                </div>
            </div>
        </div>
    );
};

export default Book;