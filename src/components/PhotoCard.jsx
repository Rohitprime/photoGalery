
import { useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {BsDownload} from 'react-icons/bs'

const PhotoCard = ({ photo }) => {

    const [open, setOpen] = useState(false)

    const modelHandler = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <>
            {open &&
                <div className='w-screen h-screen absolute z-[5] top-0 backdrop-blur-md bg-white/50
           flex justify-center items-center'>
                    <div className="border  flex flex-col rounded-xl shadow-3xl animate-slideup relative">
                        <AiFillCloseCircle className='absolute top-[-15px] right-[-15px] h-[40px] w-[40px]
                        hover:scale-110 active:scale-90 text-green-600'
                            onClick={modelHandler} />
                        <img src={photo?.urls?.small} className='rounded-t-xl w-[900px] h-[600px]' />
                        <div className="flex flex-row h-[80px] px-5 items-center ">
                            <img className='w-[40px] h-[40px] rounded-full' src={photo?.user?.profile_image?.large} />
                            <div className="w-8/12 h-full flex flex-row">
                                <div className='flex flex-col justify-center ml-2'>
                                    <h1 className=" font-serif font-bold"> {photo?.user?.name}</h1>
                                 <a href={photo?.user?.social?.portfolio_url}><h1 className="text-sm italic text-gray-900">@{photo?.user?.username}</h1></a>
                                </div>
                                <div className='flex flex-row items-center ml-10 gap-4'>
                                    <div className='flex'><AiOutlineInstagram/><h1 className="text-sm italic text-gray-900"> {photo?.user?.social?.instagram_username?
                                    photo?.user?.social?.instagram_username:'Not Available'}</h1></div>

                                    <div className='flex'><FiTwitter/><h1 className="text-sm italic text-gray-900">@{photo?.user?.social?.twitter_username?
                                    photo?.user?.social?.twitter_username:'Not Available' }</h1></div>
                                </div>
                            </div>
                            <div className="w-4/12 h-full self-end mr-4 flex flex-row justify-end items-center gap-1 font-bold">
                                <AiOutlineLike />
                                {photo?.likes}
                            </div>
                        </div>
                        <a href={photo?.links?.download} 
                        className='absolute bg-green-600 top-[81%] right-[1%] flex p-2 rounded-lg gap-2
                        hover:scale-110 active:scale-95 hover:mb-[10px] text-white'>
                            <BsDownload className='text-white mt-1'/>Download
                        </a>
                    </div>
                </div>
            }

            {
                !open &&
                <div className="border flex flex-col rounded-xl shadow-2xl hover:scale-110 animate-slideup"
                    onClick={modelHandler}>
                    <img src={photo?.urls?.small} className='rounded-t-xl w-[350px] h-[350px]' />
                    <div className="flex flex-row h-[70px] p-1 px-3 items-center ">
                        <img className='w-[40px] h-[40px] rounded-full' src={photo?.user?.profile_image?.large} />
                        <div className="w-6/12  h-full flex flex-col justify-center ml-2">
                            <h1 className="font-serif"> {photo?.user?.name}</h1>
                            <a href={photo?.user?.social?. portfolio_url}><h1 className="text-sm  italic text-gray-500">@{photo?.user?.username}</h1></a>
                        </div>
                        <div className="w-4/12 h-full self-end mr-4 flex flex-row justify-end items-center gap-1">
                            <AiOutlineLike />
                            {photo?.likes}
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default PhotoCard