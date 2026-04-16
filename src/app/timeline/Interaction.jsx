import Image from 'next/image';
import React from 'react';
import callImage from '../../../public/call.png';
import videoImage from '../../../public/video.png';
import textImage from '../../../public/text.png';

const Interaction = ({ item }) => {
    return (
        <div className='w-4/5 mx-auto bg-gray-100 shadow-2xl px-10 py-5 my-5 rounded-lg flex justify-between items-center'>
            <div className='flex'>
                {item.type === "call"&& <Image src={callImage} alt="Call" />}
                {item.type === "video"&& <Image src={videoImage} alt="Video" />}
                {item.type === "text"&& <Image src={textImage} alt="Text" />}

                <h3 className='mx-2 text-gray-500 font-bold'>{item.type}</h3> <span className='text-gray-500'>with {item.name}</span>
            </div>

            <div>
                {item.timeAndDate}
            </div>
        </div>
    );
};
export default Interaction;