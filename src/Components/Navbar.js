import React, { useState } from 'react';
import { IoIosOptions } from "react-icons/io";
import { ImRedo2} from "react-icons/im";
import { ImSearch} from "react-icons/im";
import { ImClock} from "react-icons/im";
import { ImBell} from "react-icons/im";
import { FaAngleDown } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";

import Sidebar from './Sidebar';


function Navbar(props) {
	
	const [open,setOpen] = useState(false);
  return (
	<div className='shadow-sm w-full  top-0 left-0'>
	  <div className='h-[63px] py-4 md:flex items-center justify-between bg-[#51647c]  md:px-10 px-7'>
	  <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
       <span className='hidden'><IoIosOptions className='text-white w-[17px] ml-[-21px]' onClick={props.data} /></span>
	   <span><img src='https://alviline.com/crm/uploads/company/062b2f063603dddf3edb306fc5c3053d.png'  className='w-24 mx-4'/></span>
      </div>
	  	<div onClick={()=>setOpen(!open)} className='md:hidden text-3xl absolute mb-3 text-white right-[20px] mt-[-34px]'>
		  <ion-icon name={open ? 'close':'menu'} className=' '></ion-icon>
			{/* <FaAngleDown /> */}
		</div>
		<ul className='hidden md:flex items-center relative'>
			<div className=''>
			<input type="text"  className='outline-none h-[63px] w-[320px] bg-[#51647c] hover:bg-[#415165] px-4 text-white' placeholder='Search'/>
			</div>
				<li className='md:ml-8 text-[22px] text-gray-400'><ImSearch /></li>
				<li><img src='https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg' className='w-[40px] ml-4 rounded-full'/></li>
				<li className='md:ml-8 text-lg text-white'><ImRedo2 /></li>
				<li className='md:ml-8 text-lg text-white'><IoCreate /></li>
				<li className='md:ml-8 text-lg text-white'><ImClock /></li>
				<li className='md:ml-8 text-lg text-white'><ImBell /></li>
			<li>
				
			</li>
		</ul>
		
				<ul className={`md:hidden flex-col mt-[-15px] pb-1 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
					<li className='pl-5 text-lg text-black py-1 hover:bg-gray-300 hover:border-b-2'>My Profile</li>
					<li className='pl-5  text-lg text-black py-1 hover:bg-gray-300 hover:border-b-2'>My Timesheets</li>
					<li className='pl-5 text-lg text-black py-1 hover:bg-gray-300 hover:border-b-2'>Edit Profile</li>
					<li className='pl-5 text-lg text-black py-1 hover:bg-gray-300 hover:border-b-2'>Shere Documents,ideas</li>
					<li className='pl-5 text-lg text-black pt-1  hover:bg-gray-300 hover:border-b-2'>logout</li>
				</ul>
		
		
	  </div>
	</div>
  );
}

export default Navbar;

