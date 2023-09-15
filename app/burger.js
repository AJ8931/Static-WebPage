import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./burger.css"

const Burger = () => {
    const mRef = useRef();
    const linkClass = 'cursor-pointer link-underlined py-4 w-fit h-14';
    const [check, setCheck] = useState(false);
    const mobile_menu = document.querySelector('.mobile-nav');
    const background = document.querySelector('.background_blur')
    function Toggling() {
        mRef.current.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        background.classList.toggle('is-active');
        if (mRef.current.classList.contains('is-active') && background.classList.contains('is-active') && mobile_menu.classList.contains('is-active')) {
            setCheck(true)
        }
    }

    useEffect(() => {
        if (check) {
            mobile_menu.onclick = function () {
                mRef.current.classList.toggle('is-active');
                mobile_menu.classList.toggle('is-active');
                background.classList.toggle('is-active');
                setCheck(false)
            };
            background.onclick = function () {
                mRef.current.classList.toggle('is-active');
                mobile_menu.classList.toggle('is-active');
                background.classList.toggle('is-active');
                setCheck(false)
            };
        }
    }, [check])
    return (
        <>

            <nav className=' bg-hero-pattern flex flex-row justify-between px-5  items-center text-white text-xl py-4 shift  sticky top-0 w-full indexing '>
                <div className='w-36 py-1'>
                    <img className='w-full' src='./razer-logo.png' alt='Logo' />
                </div>
                {/* <div id='searching' class="search">
                    <input type="search" class="search-box" />
                    <span class="search-button" onClick={() => {
                        document.getElementById('searching').classList.toggle('open');
                    }}>
                        <span class="search-icon"></span>
                    </span>
                </div> */}
                <div className='flex gap-3'>

                    <button className='border border-grey w-fit items-center flex justify-center'>
                        <FontAwesomeIcon icon={faSearch} size="lg" className='text-grey w-[48px] aspect-square' />
                    </button>
                    <button id='hamburger1' className="hamburger px-[6px]" ref={mRef} onClick={Toggling}>
                        <div className="bar"></div>
                    </button>
                </div>
            </nav>
            <div className="background_blur bg-grey opacity-40"></div>
            <div className="mobile-nav bg-grey opacity-90">
                <div className='flex flex-col justify-center items-center w-full text-lg max-[1708px]:text-sm gap-[40px] font-semibold'>
                    <ul className='text-center text-white text-xl flex flex-col justify-center items-center'>
                        <li className={linkClass} >
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li className={linkClass} >
                            <a href="#">
                                Hardware
                            </a>
                        </li>
                        <li className={linkClass} >
                            <a href="#">
                                Software
                            </a>
                        </li>
                        <li className={linkClass} >
                            <a href="#">
                                Community
                            </a>
                        </li>
                        <li className={linkClass} >
                            <a href="#">
                                Store
                            </a>
                        </li>
                        <li className={linkClass} >
                            <a href="#">
                                Support
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default Burger