import React from 'react'
import './Header.css';
import { CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
function Header() {
    return (
        <header>
            <div className='container'>
                <ul className='d-flex justify-content-end align-items-center gap-4'>
                    <li>
                        <a href='/' className='text-uppercase font-weight-normal text-white text-decoration-none'>Placeholder Title <MdKeyboardArrowDown />
                            <ul className='subMenu justify-content-end align-items-center gap-2'>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title</a>
                                </li>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title</a>
                                </li>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title</a>
                                </li>
                            </ul>
                        </a>
                    </li>
                    <li>
                        <a href='/' className='text-uppercase font-weight-normal text-white text-decoration-none'>Placeholder Title <MdKeyboardArrowDown />
                        <ul className='subMenu justify-content-end align-items-center gap-2'>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title</a>
                                </li>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title</a>
                                </li>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title</a>
                                </li>
                            </ul>
                        </a>
                        
                    </li>
                    <li>
                        <a href='/' className='text-uppercase font-weight-normal text-white text-decoration-none'>Placeholder Title <MdKeyboardArrowDown />
                        <ul className='subMenu justify-content-end align-items-center gap-2'>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title</a>
                                </li>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title</a>
                                </li>
                                <li>
                                    <a href='/' className='font-weight-light text-white text-decoration-none'>Placeholder Title</a>
                                </li>
                            </ul>
                        </a>
                        
                    </li>
                    <li>
                        <a href='/' className='signinBtn text-uppercase font-weight-normal text-white text-decoration-none'><CiUser /> Sign In</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
