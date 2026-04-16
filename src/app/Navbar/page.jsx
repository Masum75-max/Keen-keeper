'use client'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from "next/navigation";

import { faClock, faChartLine } from '@fortawesome/free-solid-svg-icons'


const Navpage = () => {

    
    const path = usePathname();
    return (
        
 <div className="flex justify-between px-4 py-3 shadow-2xl">
    <div className="hidden md:inline-block text-2xl">
       <span className="font-bold ml-3 ">Keen</span>Keeper
    </div>
    <div className="flex gap-2 mr-2 items-center">

         <Link href="/home" className={`flex items-center justify-between gap-1 rounded-sm px-2 py-1 bg-gray-200 ${path=== "/home"?'bg-green-600 text-white':""}`}><FontAwesomeIcon icon={faHome} className="w-6 h-6 text-black" />Home</Link>

         <Link href="/timeline" className={`flex items-center justify-between gap-1 rounded-sm px-2 py-1 bg-gray-200 ${path=== "/timeline"?'bg-green-600 text-white':""}`}><FontAwesomeIcon icon={faClock} className="w-6 h-6 text-gray-600" />Timeline</Link>


         <Link href="/stats" className={`flex items-center justify-between gap-1 rounded-sm px-2 py-1 bg-gray-200 ${path=== "/stats"?'bg-green-600 text-white':""}`}><FontAwesomeIcon icon={faChartLine} className="w-6 h-6 text-blue-500" />Stats</Link>
       
         
    </div>
 </div>
        
    );
};

export default Navpage;