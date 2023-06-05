import React, { useState } from 'react'
import {styles} from'../style'
import { navLinks } from '../constants';
import {logo,menu,close} from '../assets'
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [active,setActive]=useState('');
const [toggle,setToggle]=useState(false);
  return (
   <nav class={ ` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20  bg-primary` }>
  <div class="w-full flex justify-between items-center max-w-7xl mx-auto ">

    <a
    href="/"
    class="flex ic gap-2 "
    onClick={()=>{
      setActive("");

      window.scroll(0.0);
    }} >
    <img src={logo} alt=""  class="w-12 h-15 object-contain"/>

    <p Class="text-white text-[20px] font-bold cursor-pointer ">Vipin Kumawat</p>
    </a>

    <ul class="list-none hidden sm:flex flex-row gap-10 ">

      {
        navLinks.map((link)=>(
          <li 
          key={link.id}
          class={`${
            active===link.title?"text-white":"text-secondary"
          } hover:text-white text-[20px] font-medium cursor-pointer transition-all duration-200 ` }
        onClick={()=>setActive(link.title)}  >
             <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))
      }
    </ul>

    <div class="sm:hidden flex flex-1 justify-end items-center ">
<img src={toggle?close:menu} alt="menu" class="w-[28px] h-[28px] object-contain cursor-pointer " 

onClick={()=>setToggle(!toggle)}/>


<div class={`${!toggle?"hidden":"flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-3 min-w-[140px] z-10 rounded-xl `}>
<ul class="list-none flex flex-col justify-end items-center gap-4 ">

{
  navLinks.map((link)=>(
    <li 
    key={link.id}
    class={`${
      active===link.title?"text-white":"text-secondary"
    } hover:text-white text-[16px] font-poppins font-medium cursor-pointer transition-all duration-200 ` }
  onClick={()=>{setActive(link.title);
  setToggle(!toggle)}}  >
      <a href={ `#${link.id}`}>{link.title}</a>
    </li>
  ))
}
</ul>
  
</div>
    </div>
  </div>
   </nav>
  )
}

export default Navbar