/* eslint-disable @next/next/no-img-element */
import { faBuilding, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCircleNotch, faCloud, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Product_sec = () => {
    return (
        <div className='bg-moreblack flex flex-col justify-center items-center w-full'>
            <div className='w-full flex flex-row justify-center items-center text-white  max-[700px]:flex-col max-[700px]:px-4'>
                <div className=' max-w-lg flex flex-row justify-center items-center'>
                    <div className='hidden text-grey border border-grey/20 w-[60px] max-[700px]:flex justify-center items-center aspect-square'>
                        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                    </div>
                    <img src='./Product-Image/headsetMain.png' alt='Headset_Image' className='min-w-[100px]' />
                    <div className='hidden text-grey border border-grey/20 w-[60px] max-[700px]:flex justify-center items-center aspect-square'>
                        <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    </div>
                </div>
                <div className=' max-w-lg'>
                    <h1 className='text-4xl pb-8 '>RAZER KRAKEN 7.1</h1>
                    <p className="max-w-[450px] mb-6 font-light text-grey lg:mb-6 ">WORLD FIRST AUTOMATED FULL CONTROL HEADSET , Special for gaming</p>
                    <button className="items-center justify-center px-6 py-2 mb-6 text-base font-semibold text-center relative rounded-sm text-moreblack bg-green cursor-pointer"> ViewMore</button>
                </div>
                <div className='relative flex flex-col justify-center items-center px-6 gap-4 max-[700px]:hidden'>
                    <div className='text-grey border border-grey/20 w-[40px] flex justify-center items-center aspect-square cursor-pointer'>
                        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                    </div>
                    <div className='text-grey border border-grey/20 w-[40px] flex justify-center items-center aspect-square cursor-pointer'>
                        <FontAwesomeIcon icon={faChevronRight} size="lg" />
                    </div>
                </div>
            </div>
            <div className='w-full h-full pb-32 flex justify-center items-center px-14 pt-10'>
                <ul className='w-full h-full flex flex-row justify-center gap-10 lg:justify-between items-center max-w-screen-xl flex-wrap justify-items-center'>


                    <li className='min-w-[255px] py-10 border border-grey/10 flex justify-start items-center flex-col hover:bg-hero-pattern focus:bg-hero-pattern bg-cover bg-center max-[1270px]:w-[230px] max-[620px]:w-[270px]'>
                        <div className='w-[150px] aspect-square flex justify-center items-center pb-12'>
                            <img src="./Product-Image/razer-lycosa.png" alt='Product' />
                        </div>
                        <h1 className='text-white text-sm font-semibold pb-4 leading-4'>RAZER FIREFLY LIGHT</h1>
                        <p className='text-[12px] leading-5 text-darkgreen font-bold'>USD $29</p>
                    </li>
                    <li className='min-w-[255px] py-10 border border-grey/10 flex justify-start items-center flex-col hover:bg-hero-pattern focus:bg-hero-pattern bg-cover bg-center max-[1270px]:w-[230px] max-[620px]:w-[270px]'>
                        <div className='w-[150px] aspect-square flex justify-center items-center pb-12'>
                            <img src="./Product-Image/mice.png" alt='Product' />
                        </div>
                        <h1 className='text-white text-sm font-semibold pb-4 leading-4'>RAZER FIREFLY LIGHT</h1>
                        <p className='text-[12px] leading-5 text-darkgreen font-bold'>USD $29</p>
                    </li>
                    <li className='min-w-[255px] py-10 border border-grey/10 flex justify-start items-center flex-col hover:bg-hero-pattern focus:bg-hero-pattern bg-cover bg-center max-[1270px]:w-[230px] max-[620px]:w-[270px]'>
                        <div className='w-[150px] aspect-square flex justify-center items-center pb-12'>
                            <img src="./Product-Image/Headset.png" alt='Product' />
                        </div>
                        <h1 className='text-white text-sm font-semibold pb-4 leading-4'>RAZER FIREFLY LIGHT</h1>
                        <p className='text-[12px] leading-5 text-darkgreen font-bold'>USD $29</p>
                    </li>
                    <li className='min-w-[255px] py-10 border border-grey/10 flex justify-start items-center flex-col hover:bg-hero-pattern focus:bg-hero-pattern bg-cover bg-center max-[1270px]:w-[230px] max-[620px]:w-[270px]'>
                        <div className='w-[150px] aspect-square flex justify-center items-center pb-12'>
                            <img src="./Product-Image/firefly-light.png" alt='Product' />
                        </div>
                        <h1 className='text-white text-sm font-semibold pb-4 leading-4'>RAZER FIREFLY LIGHT</h1>
                        <p className='text-[12px] leading-5 text-darkgreen font-bold'>USD $29</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Product_sec