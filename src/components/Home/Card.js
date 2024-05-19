import React from 'react'
import {ArrowLongRightIcon} from '@heroicons/react/24/solid'


function Card({image , title, content}) {
  return (
    <div className='m-7 p-1 border rounded border-zinc-400 
    hover:shadow-2xl cursor-pointer bg-white group' >
      <img src={image} alt='pic' className='w-full h-6/7 
      transform transition-transform duration-300 group-hover:scale-95'/>
       <div className='pt-4 flex flex-col justify-center items-center transform transition-transform duration-300 group-hover:scale-105'>
         <span className='font-bold '>{title}</span> <br/>
         <span className='font-light '>{content}</span>
         <ArrowLongRightIcon className=' w-10 h-10 p-2 text-black '/>
       </div>
     
    </div>
  )
}

export default Card