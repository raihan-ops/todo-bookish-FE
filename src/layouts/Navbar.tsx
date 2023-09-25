// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { RiBookMarkLine } from "react-icons/ri"


const Navbar: React.FC = () => {
    return (
        <nav className="bg-primary p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">

                    <div className='flex divide-x gap-3'>
                        <div className="text-black text-2xl font-bold flex gap-1 items-center justify-center rounded-[96px] px-[24px] py-[16px] bg-input-inner-bg-gray"><RiBookMarkLine /> Bookish</div>
                        

                        <ul className="flex space-x-4 pl-[12px] items-center">
                            <li>
                                <Link to="#" className="text-nav-text-color text-[16px] font-bold font-DM hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-nav-text-color text-[16px] font-bold font-DM hover:underline">
                                    Discover
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-nav-text-color text-[16px] font-bold font-DM hover:underline">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-nav-text-color text-[16px] font-bold font-DM hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>Login section</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
