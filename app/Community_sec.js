import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Community_sec = () => {
    return (<>
        <div className='flex flex-col justify-center items-center bg-moreblack w-full'>
            <div className='bg-razer-war-pattern bg-cover bg-right text-green h-[360px] w-full flex flex-col justify-center items-start lg:pl-32 md:pl-24 pl-12 max-[550px]:pl-6  max-w-screen-xl'>
                <div className='md:w-[180px] w-full'>
                    <h1 className='text-6xl text-white font-medium max-[550px]:text-5xl'>
                        RAZER INSIDER
                    </h1>
                    <p className='text-sm font-bold pt-5 w-full'>FROM GAMES TO GAMERS</p>
                </div>
            </div>
            <div className='w-full m-auto py-10 flex flex-col gap-16 justify-center items-center' style={{ background: 'linear-gradient(360deg, rgba(16,16,16,1) 0%, rgba(20,21,20,1) 100%)' }}>
                <ul className='flex flex-col lg:flex-row justify-between items-center w-full px-6 max-w-6xl'>
                    <li className='flex text-left flex-col justify-center items-start lg:w-[310px] min-[500px]:w-[400px] w-full pb-6 bg-transparent'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className='capitalize text-white text-[14px] leading-5 font-bold pr-4 text-left'>BREAKING THE SEAGE WITH RAZER</h3>
                            <FontAwesomeIcon icon={faChevronRight} className="text-green" />
                        </div>
                        <p className='text-grey pt-6 text-justify'>Join Us at the Sixth Invitation Where we will see new content showcases, developer and Community Panels</p>
                    </li>
                    <li className='flex text-left flex-col justify-center items-start lg:w-[310px] min-[500px]:w-[400px] w-full py-6 bg-transparent'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className='capitalize text-white text-[14px] leading-5 font-bold pr-4 text-left'>WELCOME TO THE RAZER TEAM, NEXTBIT!</h3>
                            <FontAwesomeIcon icon={faChevronRight} className="text-green" />
                        </div>
                        <p className='text-grey pt-6 text-justify'>We are excited to announce that NextBit has joined the Razer family! We welcome the highly-talented Team</p>
                    </li>
                    <li className='flex text-left flex-col justify-center items-start lg:w-[310px] min-[500px]:w-[400px] w-full py-6 bg-transparent'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className='capitalize text-white text-[14px] leading-5 font-bold pr-4 text-left'>THE RAZER BLACKWIDOW CHROMA V2</h3>
                            <FontAwesomeIcon icon={faChevronRight} className="text-green" />
                        </div>
                        <p className='text-grey pt-6 text-justify'>the New Razer Black Widow Chroma V2 - Now Available with the Razer Mechanical Green, Orange and Yellow.</p>
                    </li>
                </ul>
                <button className="items-center justify-center px-6 py-2 mb-6 text-base font-semibold text-center relative rounded-sm text-moreblack bg-green focus:ring-4 focus:ring-gray-100 cursor-pointer">Join Community</button>
            </div>
        </div>
    </>
    )
}

export default Community_sec