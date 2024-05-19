import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import grietImage from '../assets/hd.jpg'
import { NavLink  } from 'react-router-dom';


function Header() {
    let Links =[
        {name:"UNIVERSITY",link:"/university"},
        {name:"RESEARCH",link:"/research"},
        {name:"STUDY",link:"/study"},
        {name:"TRANSFER",link:"/transfer"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full absolute h-3/4 top-0 left-0    '>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>
           
            {/* logo section */}
            <NavLink to='/' className='font-medium text-2xl cursor-pointer flex items-center gap-1 group '>
                <BookOpenIcon className='w-7 h-7 text-gray-900 group-hover:text-gray-500 z-10'/>
                <span  className='z-10 group-hover:text-gray-500'>GRIET</span>
            </NavLink>

            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer z-10 md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomLeftIcon />
                }
            </div>
            {/* link items */}
            <ul className={`bg-black md:bg-transparent md:flex md:items-center md:pb-0 pb-12 absolute md:static  z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-bold text-xl' key={link.name}>
                        <NavLink to={link.link} className={({ isActive }) => `text-white md:text-gray-900 hover:text-gray-500 md:hover:underline hover:decoration-gray-500 
                        hover:underline-offset-6 duration-500 ${isActive? 'underline decoration-gray-800  underline-offset-6' : ''}`
                          }>{link.name}</NavLink>
                    </li>))
                }
            </ul>
            {/* Header image */}
            <div className='absolute top-0 bottom-0 left-0 w-full  md:h-full flex justify-center items-center'>
                    <img  src={grietImage} alt='Header Image' className='object-cover w-full h-full ' />
                </div> 
           </div>
        </div>
    );
}

export default Header