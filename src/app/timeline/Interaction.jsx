import Image from 'next/image';
import React from 'react';
import callImage from '../../../public/call.png';
import videoImage from '../../../public/video.png';
import textImage from '../../../public/text.png';

const Interaction = ({ item }) => {
    return (
        <div className='w-full sm:w-4/5 mx-auto bg-gray-100 shadow-2xl px-4 sm:px-10 py-4 sm:py-5 my-4 sm:my-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0'>
            
            <div className='flex items-center flex-wrap'>
                {item.type === "call" && <Image src={callImage} alt="Call" />}
                {item.type === "video" && <Image src={videoImage} alt="Video" />}
                {item.type === "text" && <Image src={textImage} alt="Text" />}

                <h3 className='mx-2 text-gray-500 font-bold text-sm sm:text-base'>
                    {item.type}
                </h3> 
                
                <span className='text-gray-500 text-sm sm:text-base'>
                    with {item.name}
                </span>
            </div>

            <div className='text-gray-500 text-xs sm:text-base'>
                {item.timeAndDate}
            </div>

        </div>
    );
};

export default Interaction;