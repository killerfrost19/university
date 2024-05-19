import React from 'react'
import { Links } from './Menus.js'
import {ArrowLongRightIcon} from '@heroicons/react/24/solid'


function Page({curr}) {
    const filteredItem = Links.find((i)=> i.title.toLowerCase() === curr.toLowerCase())

    if (!filteredItem) {
        return <div className=' mt-[75vh]'>
            Page not found</div>;}
      
  return (
   <>
    <div className=' mt-[75vh] flex justify-center'>
         <div className='m-10 p-1 w-full
         hover:shadow-2xl  group flex flex-col md:flex-row items-start '>
         <img  src={filteredItem.image} alt='pic' className='sm:w-full sm:h-auto md:w-1/2 md:h-full
           transform transition-transform duration-300 group-hover:scale-95 '/> 
         <div className='flex flex-col justify-center items-center w-full md:w-auto'>
            <h1 className='text-3xl font-bold my-4 '>{filteredItem.title}</h1>
            <span className='font-normal text-justify mt-14 mb-14 mx-5 text-xl '>{filteredItem.content}</span>
        
            <ul>
            {filteredItem.elements.map((ele) => (
                 <li className='flex flex-row justify-center items-center text-left cursor-pointer
                 transform transition-transform duration-300 hover:scale-105' key={ele}>
                 <span className='font-light hover:font-normal  mx-5 text-lg '>{ele} </span>
                 <ArrowLongRightIcon className='w-7 h-7 ml-2 mb-3 mt-4'/>
                 </li>
            ))}
           </ul>

            <button className='bg-slate-800 text-white sm:w-1/2 md:w-1/3 lg:w-1/4 border rounded mt-7 mb-5
            hover:shadow-2xl text-lg p-3 '>{filteredItem.title} Portal</button>
        </div>
         </div>      
    </div>
    </>
  )
}

export default Page