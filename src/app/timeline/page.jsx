'use client';
import React from 'react';
import { useContext } from "react";
import { historyContext } from '../Context/Contextpage';
import { typeContext } from '../Context/InteractionContex';

import Interaction from './Interaction';
const Timelinepage = () => {
    const { arr } = useContext(historyContext);
    const { type,typeHandler } = useContext(typeContext);

    console.log(arr);
    return (
        <div className='w-4/5 mx-auto'>
        
            <h1 className='text-2xl font-bold my-4'>TimeLine</h1>

            <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Filter By</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
       <li><button onClick={() => typeHandler ("call")}>Call</button></li>
       <li><button onClick={() => typeHandler("text")}>Text</button></li>
       <li><button onClick={() => typeHandler("video")}>Video</button></li>
       <li><button onClick={() => typeHandler("none")}>None</button></li>
      </ul>
      </div> 


           {
            type === "none" &&  arr.map((item)=><Interaction key={item.id} item={item}></Interaction>)
           }
            {
            type === "video" && arr.filter(item=>item.type === "video").map((item)=><Interaction key={item.id} item={item}></Interaction>)
           }
            {
            type === "call" && arr.filter(item=>item.type === "call").map((item)=><Interaction key={item.id} item={item}></Interaction>)
           }
            {
            type === "text" && arr.filter(item=>item.type === "text").map((item)=><Interaction key={item.id} item={item}></Interaction>)
           }
        </div>
    );
};

export default Timelinepage;