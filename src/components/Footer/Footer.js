import React from 'react'
import Item from "./Item";
import { MAIN_MENU, INFORMATION_FOR, QUICK_LINKS } from "./Menus";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

function Footer() {
  return (
    <footer className=' mt-7  w-full bg-gray-900 text-white pt-6'>
        <div className=' grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-15'>
            <Item Links={MAIN_MENU} title='MAIN MENU'/>
            <Item Links={INFORMATION_FOR} title='INFORMATION FOR'/>
            <Item Links={QUICK_LINKS} title='QUICK LINKS' />
            
            <h3 className='text-white font-semibold '>CONTACT <br/> 
            <div className='mt-1'>
            <span className='text-gray-400 text-sm font-normal'> Varsha <br/> +91 3434452251 <br/> Bachupally <br/> Hyderabad <br/></span>          
            </div></h3>             
        </div>

        <div
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8">
         <span>© 2024 GRIET . All rights reserved.</span>
         <span>Terms · Privacy Policy</span>
         <SocialIcons Icons={Icons} />
        </div>
    </footer>
  )
}

export default Footer