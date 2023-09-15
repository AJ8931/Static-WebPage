import { faChevronDown, faCircle, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Hero_Sec = () => {
    return (
        <div className="bg-hero-pattern h-fit w-full flex flex-col justify-center items-center">
            <section id='hero' className="bg-transparent bg-cover bg-no-repeat lg:pt-20 lg:pb-10 h-fit py-10 w-full flex justify-center items-center">
                <div className="grid max-w-screen-xl px-4 py-8 md:py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
                    <div className="col-span-full mr-auto place-self-center h-[220px] py-0 lg:col-span-7">
                        <h1 className="max-w-[450px] mb-4 text-4xl font-semi bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">RAZER MAMBA PRO</h1>
                        <p className="max-w-[450px] mb-6 font-light text-grey lg:mb-6 md:text-lg lg:text-lg">World first automated full control mice developed in 2016, Special for gaming.</p>
                        <a href="#" className="items-center justify-center px-6 py-2 mb-6 text-base font-semibold text-center relative rounded-sm text-white bg-green focus:ring-4 focus:ring-gray-100 cursor-pointer">
                            View More
                        </a>
                    </div>
                    <div className="col-span-full max-w-[450px] lg:mt-0 lg:col-span-5 lg:flex filter drop-shadow-3xl">
                        <img src="./mouse_razer.png" alt="mockup" />
                    </div>
                </div>
            </section>
            <div className='flex flex-row justify-between items-center h-10 px-10 lg:px-32 lg:pt-10 pb-10 max-w-screen-xl w-full'>
                <div className='flex flex-row justify-center items-center gap-1 text-grey'>
                    <FontAwesomeIcon icon={faCircle} size="xs" className='text-green' />
                    <FontAwesomeIcon icon={faCircle} size="xs" />
                    <FontAwesomeIcon icon={faCircle} size="xs" />
                </div>
                <div className='flex justify-center items-center border border-grey/20 w-[28px] aspect-square text-grey'>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className='flex flex-row justify-center items-center gap-2 text-grey'>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
            </div>
        </div>
    )
}

export default Hero_Sec