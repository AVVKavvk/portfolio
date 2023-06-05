import React from 'react'
import {motion } from 'framer-motion';
import {styles} from '../style'
import { ComputersCanvas } from './canvas';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
 <section className="relative w-full pb-16 h-screen  mx-auto ">

<div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5 `} >

<div className="flex flex-col justify-center items-center mt-5 ">
<div className="w-5 h-5 rounded-full bg-[#915eff]"/>
<div  className="w-1 sm:h-80 h-40 violet-gradient "/>
</div>

<div>
  <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#915eff]">Vipin  </span> </h1>

  <p className={`${styles.heroSubText} mt-2 text-white-100  `}> <span 
   className="text-[#915eff] text-3xl ">Founder </span> of Notes Website of IIIT Pune </p>
</div>


</div>

<br />
 

<ComputersCanvas />
<div class="text-center text-secondary  ">This is a 3D computer model, you can rotate it.</div>

 </section>
  )
}

export default Hero