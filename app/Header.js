"use client";
import React, { useEffect, useState } from 'react'
import Burger from './burger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'

const NavBar = () => {
    const [toggle, setToggle] = useState();

    useEffect(() => {
        // Check if we're on the client side before using window
        if (typeof window !== 'undefined') {
            // Add event listeners for 'load' and 'resize'
            const handleResize = () => {
                if (window.innerWidth < 768) {
                    setToggle(false);
                } else {
                    setToggle(true);
                }
            };

            // Add event listeners
            ["load", "resize"].forEach((e) => {
                window.addEventListener(e, handleResize);
            });

            // Remove event listeners when component unmounts
            return () => {
                ["load", "resize"].forEach((e) => {
                    window.removeEventListener(e, handleResize);
                });
            };
        }
    }, []);

    useEffect(() => {
        // Check if we're on the client side before using window
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                if (window.pageYOffset > 50) {
                    if (document.getElementById("Fixed")) {
                        document.getElementById("Fixed").style.background = "url('/background.jpg')";
                    }
                } else {
                    if (document.getElementById("Fixed")) {
                        document.getElementById("Fixed").style.background = "transparent";
                    }
                }
            };

            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);

            // Remove scroll event listener when component unmounts
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);
    return (
        <>
            {toggle
                ?
                <nav id="Fixed" className='bg-transparent flex flex-row justify-between gap-[40px] px-14 items-center text-white text-xl py-4 fixed top-0 w-full z-50 transition-all duration-100 ease-in-out'>
                    <div className='w-36 min-w-[140px]'>
                        <img className='w-full' src='./razer-logo.png' alt='Logo' />
                    </div>
                    <ul className='flex flex-row justify-end w-3/6 items-center text-lg max-[1708px]:text-sm gap-[25px] min-w-[510px] font-medium lg:gap-[40px] lg:font-semibold lg:min-w-[605px] text-grey'>
                        <li className='cursor-pointer link link-underline link-underline-black pb-2 hover:text-green active' >
                            <a href="#hero">
                                Home
                            </a>
                        </li>
                        <li className='cursor-pointer link link-underline link-underline-black pb-2 hover:text-green' >
                            <a href="#about">
                                Hardware
                            </a>
                        </li>
                        <li className='cursor-pointer link link-underline link-underline-black pb-2 hover:text-green' >
                            <a href="#features" >
                                Software
                            </a>
                        </li>
                        <li className='cursor-pointer link link-underline link-underline-black pb-2 hover:text-green' >
                            <a href="#trainers">
                                Community
                            </a>
                        </li>
                        <li className='cursor-pointer link link-underline link-underline-black pb-2 hover:text-green' >
                            <a href="#trainers">
                                Store
                            </a>
                        </li>
                        <li className='cursor-pointer link link-underline link-underline-black pb-2 hover:text-green' >
                            <a href="#trainers">
                                Support
                            </a>
                        </li>
                        <li className='border border-grey w-[38px] items-center flex justify-center aspect-square' >
                            <FontAwesomeIcon icon={faSearch} size="xl" className='text-grey' />
                        </li>
                    </ul>
                </nav>
                :
                <Burger />

            }
        </>
    )
}

export default NavBar