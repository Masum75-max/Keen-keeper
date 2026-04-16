'use client'
import React, { useContext } from 'react';
import { LengthOfTotal } from '../layout';

const Count = () => {

    const {total,on_track,need_attention} = useContext(LengthOfTotal);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-3'>
            <div className='bg-gray-100 shadow-2xl px-10 py-5'>
                <h1 className='text-xl font-bold text-center'>{total}</h1>

                <p className='text-gray-500 text-center'>total friends</p>
                
            </div>
            <div className='bg-gray-100 shadow-2xl px-10 py-5'>
                <h1 className='text-xl font-bold text-center'>{on_track}</h1>

                <p className='text-gray-500 text-center'>active friends</p>
                
            </div>
            <div className='bg-gray-100 shadow-2xl px-10 py-5'>
                <h1 className='text-xl font-bold text-center'>{need_attention}</h1>

                <p className='text-gray-500 text-center'>Need attention</p>
                
            </div>
            <div className='bg-gray-100 shadow-2xl px-10 py-5'>
                <h1 className='text-xl font-bold text-center'>12</h1>

                <p className='text-gray-500 text-center'>total friends</p>
                
            </div>
            
        </div>
    );
};

export default Count;