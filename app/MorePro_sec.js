import { faBuilding, faCircleNotch, faCity, faCloud, faHeadset, faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MorePro_sec = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 bg-moreblack pt-4'>
            <div className='text-center py-12 my-4 justify-center items-center flex flex-col bg-moreblack bg-razer-bg-pattern bg-contain bg-no-repeat bg-center'>
                <p className='text-green font-bold max-[500px]:text-sm'>MORE PRODUCTS</p>
                <h4 className='text-white lg:text-5xl text-2xl md:text-4xl'>RAZER SOFTWARE</h4>
            </div>
            <div className='w-full h-full pb-32 flex justify-center items-center px-14'>
                <ul className='w-full h-full grid grid-cols-1 gap-10 justify-center lg:justify-between md:grid-cols-2 lg:grid-cols-4 items-center max-w-screen-xl flex-wrap'>
                    <li className='min-w-[255px] h-[220px] border border-grey/10 flex justify-center items-center flex-col gap-6 max-[600px]:flex-row max-[600px]:h-fit max-[600px]:pl-5 max-[600px]:gap-3 max-[600px]:justify-start md:min-w-[200px]'>
                        <div className='w-[100px] max-w-[100px] min-w-[50px] aspect-square flex justify-center items-center rounded-full border-green border-4 max-[600px]:w-[60px] max-[600px]:my-4'>
                            <FontAwesomeIcon icon={faHeadset} size="4x" className='text-green max-[600px]:w-[30px] max-[600px]:text-[0px]' />
                        </div>
                        <h1 className='text-white font-bold '>RAZER COMMS</h1>
                    </li>
                    <li className='min-w-[255px] h-[220px] border border-grey/10 flex justify-center items-center flex-col gap-6 max-[600px]:flex-row max-[600px]:h-fit max-[600px]:pl-5 max-[600px]:gap-3 max-[600px]:justify-start md:min-w-[200px]'>
                        <div className='w-[100px] max-w-[100px] min-w-[50px] aspect-square flex justify-center items-center rounded-full border-green border-4 max-[600px]:w-[60px] max-[600px]:my-4'>
                            <FontAwesomeIcon icon={faCloud} size="4x" className='text-green max-[600px]:w-[30px]' />
                        </div>
                        <h1 className='text-white font-bold '>RAZER SYNAPSE</h1>
                    </li>
                    <li className='min-w-[255px] h-[220px] border border-grey/10 flex justify-center items-center flex-col gap-6 max-[600px]:flex-row max-[600px]:h-fit max-[600px]:pl-5 max-[600px]:gap-3 max-[600px]:justify-start md:min-w-[200px]'>
                        <div className='w-[100px] max-w-[100px] min-w-[50px] aspect-square flex justify-center items-center rounded-full border-green border-4 max-[600px]:w-[60px] max-[600px]:my-4'>
                            <FontAwesomeIcon icon={faBuilding} size="4x" className='text-green max-[600px]:w-[30px]' />
                        </div>
                        <h1 className='text-white font-bold '>RAZER ARENA</h1>
                    </li>
                    <li className='min-w-[255px] h-[220px] border border-grey/10 flex justify-center items-center flex-col gap-6 max-[600px]:flex-row max-[600px]:h-fit max-[600px]:pl-5 max-[600px]:gap-3 max-[600px]:justify-start md:min-w-[200px]'>
                        <div className='w-[100px] max-w-[100px] min-w-[50px] aspect-square flex justify-center items-center rounded-full border-green border-4 max-[600px]:w-[60px] max-[600px]:my-4'>
                            <FontAwesomeIcon icon={faCircleNotch} size="4x" className='text-green max-[600px]:w-[30px]' />
                        </div>
                        <h1 className='text-white font-bold '>RAZER CORTEX</h1>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MorePro_sec