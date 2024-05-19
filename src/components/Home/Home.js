import React from 'react'
import {ArrowLongRightIcon} from '@heroicons/react/24/solid'
import climate from '../../assets/climate.png'
import Card from './Card'
import {Links, box} from './Items'

function Home() {
  return (
    <>
    <div className='mt-[75vh] flex justify-around '>
    <div className='my-5'>
      <ul className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:px-8 px-15 py-15 mt-5 '>
      {Links.map((list)=> ( 
      <li key={list.name} className='flex flex-col justify-items-center items-center justify-around text-center
       border rounded border-zinc-400 w-60  hover:shadow-2xl cursor-pointer bg-slate-600 group' > 
        <span className='p-5 text-white'>{list.name}</span>
        <span className="  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn More</span>
        <ArrowLongRightIcon className='w-7 h-7 ml-2 mb-3 text-white group-hover:text-yellow-400'/>        
        </li>
      ))}
      </ul>
    </div>
    </div>
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:px-8 px-15 py-15 mt-5 '>
    {box.map((ele)=> (
      <Card key={ele.id} image={ele.image} title={ele.title} content={ele.content} />
    ))}
  </div>
  <div className='flex justify-center items-center mt-5'>
      <div className='relative w-2/3 h-2/3 group cursor-pointer'>
        <img src={climate} alt='climate' className='w-full h-full object-cover
        transform transition-transform duration-300 group-hover:scale-105' />
        <div className='absolute left-0 bottom-3 w-full text-left p-3'>
          <span className='text-white text-base font-semibold '>RESEARCH</span> <br/>
          <span className='text-white text-3xl font-bold'>How climate change threatens health and what it means for us</span>
          <ArrowLongRightIcon className='w-8 h-8 text-white'/> 
        </div>
      </div>
    </div>
  </>
  )
}

export default Home