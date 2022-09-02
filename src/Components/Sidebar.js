import React, { useState } from "react";
import Navbar from "./Navbar";
import { ImCogs, ImSwitch } from "react-icons/im";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { ImHome3 } from "react-icons/im";
import { ImCog } from "react-icons/im";
import { IoAccessibilityOutline } from "react-icons/io5";
import { FaBalanceScale } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import Main from "./Main";

const Sidebar = () => {
 
const [show ,setShow] =  useState(true);
  return (
    <div className="flex"> 
        <div className="absolute mt-[-42px]">
        
        <button className="ml-[40px] animate-bounce" onClick={()=>setShow(!show)} ><IoIosOptions className='text-white w-[17px] ml-[-21px]' /></button>
         
        </div>
        {/*  */}
       
    
     {show ?  <aside className={`w-[220px] ${!show ? false :"block" }  md:block`} aria-label="Sidebar">
       <div className="overflow-y-auto  bg-[#626f80]  dark:bg-gray-800 piyal h-[91vh] ">
         <ul className="space-y-2">
           <li>
             <a
               href="#"
               className="flex items-center p-2 text-base font-normal text-white  dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black"
             >
              <ImHome3 />
               <span className="ml-1">Samsurddin Ahmed</span>
               <ImSwitch className="ml-[0.3rem]" />
             </a>
           
           </li>
           <li>
             <a
               href="#"
               className="flex items-center p-2 text-base font-normal text-white  dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black"
             >
               <ImHome3 />
               <span className="ml-3">Dashboard</span>
             </a>
           
           </li>
           <li>
             <a
               href="#"
               className="flex items-center p-2 text-base font-normal text-white  dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black"
             >
               <IoAccessibilityOutline />
               <span className="ml-3">Customers</span>
             </a>
           
           </li>
           <li>
             <a
               href="#"
               className="flex items-center p-2 text-base font-normal text-white  dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black"
             >
               <FaBalanceScale />
               <span className="ml-3">Sales</span>
             </a>
           
           </li>
           <li>
             <a
               href="#"
               className="flex items-center p-2 text-base font-normal text-white  dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black"
             >
              <ImCogs />
               <span className="ml-3">Utilities</span>
             </a>
           
           </li>
           <li>
             <a
               href="#"
               className="flex items-center p-2 text-base font-normal text-white  dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 hover:text-black"
             >
               <IoBarChartSharp />
               <span className="ml-3">Reports</span>
             </a>
           
           </li>
           <li>
             <a
               href="#"
               className="flex items-center p-2 text-base font-normal text-white  dark:text-black hover:bg-gray-100 dark:hover:bg-gray-300 hover:text-black"
             >
              <ImCog />
               <span className="ml-3"> Setup </span>
             </a>
           
           </li>
         </ul>
       </div>
     </aside>:null
     }
{/* <Main /> */}
    </div>
  );
};

export default Sidebar;
