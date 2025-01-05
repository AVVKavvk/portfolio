import { motion } from "framer-motion";
// import img2 from '../../public/56587.jpg'
import { styles } from "../style";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full flex-col flex  h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
  <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#915eff]">Vipin  </span> </h1>

  <p className={`${styles.heroSubText} mt-2 text-white-100  `}> <span 
   className="text-[#915eff] text-3xl ">Founder </span> of  <span class="text-red-600 text-2xl ">  <a class="hover:underline" href="https://vipinnotes.onrender.com/" target="_blank">VipinNotes</a> </span> <span class="text-gray-400 text-lg"><br /> Ultimate Academic, Career, and Personal Growth Platform for IIIT Pune Students.</span> </p>
</div>
      </div>
     
      <div
        className={`absolute inset-0 top-[450px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-10 h-40 violet-gradient" />
        </div>

        <div>
 
        <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Education</h1>

  <p className={`${styles.heroSubText} mt-2 text-white-100  `}>
    Indian Institute of Information Technology Pune
      </p>
  <p className={` text-2xl mt-2 text-gray-400  `}>
    Computer Science and Engineering ,   ( 2025 )
      </p>
  <p className={` text-xl mt-2 text-gray-400  `}>
    CGPA : 8.82
    </p>
</div>
      </div>



    </section>
  );
};

export default Hero;