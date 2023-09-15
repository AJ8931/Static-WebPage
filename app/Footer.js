import React from 'react'

const Footer = () => {
    return (
        <div className='bg-footer-pattern w-full h-fit py-10 flex justify-center items-center text-grey gap-20 lg:gap-8 bottom-0 left-0 right-0 flex-wrap'>
            <div className='w-full lg:hidden flex justify-center items-center'>
                <img className='w-[144px]' src='./razer-logo.png' alt='Logo' />
            </div>
            <ul className='flex lg:flex-row flex-col justify-center items-center lg:gap-8 gap-4 text-left'>
                <li className='cursor-pointer hover:underline decoration-grey text-left w-full lg:w-fit'>About</li>
                <li className='cursor-pointer hover:underline decoration-grey text-left w-full lg:w-fit'>Press</li>
                <li className='cursor-pointer hover:underline decoration-grey text-left w-full lg:w-fit'>Careers</li>
                <li className='cursor-pointer hover:underline decoration-grey text-left w-full lg:w-fit'>Store Locator</li>
            </ul>
            <div className='lg:w-36 lg:min-w-[140px] hidden lg:block'>
                <img className='w-full' src='./razer-logo.png' alt='Logo' />
            </div>
            <ul className='flex lg:flex-row flex-col justify-center items-center lg:gap-8 gap-4 text-left'>
                <li className='cursor-pointer hover:underline decoration-grey text-left w-full lg:w-fit'>Affiliate</li>
                <li className='cursor-pointer hover:underline decoration-grey text-left w-full lg:w-fit'>Contact Us</li>
                <li className='cursor-pointer hover:underline decoration-grey text-left w-full lg:w-fit'>Newsletter</li>
                <li className='cursor-pointer hover:underline decoration-grey text-left w-full lg:w-fit'>Social</li>
            </ul>
        </div>
    )
}

export default Footer