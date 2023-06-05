import { motion } from "framer-motion";
import img2 from '../../public/56587.jpg'
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
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
   className="text-[#915eff] text-3xl ">Founder </span> of Notes Website of IIIT Pune </p>
</div>
      </div>
<div className={`relative hidden cursor-pointer sm:block w-full h-screen mx-auto`}>


      <ComputersCanvas />
</div>
<div className={`relative sm:hidden pt-[150px]  w-full h-screen mx-auto`}>

<div class="w-full px-4 h-[100%]   absolute flex justify-center mx-auto  items-center  ">
<img src={img2} alt="" />
      
</div>
</div>

      <div className="absolute bottom-8 hidden sm:flex  sm:-bottom-8 mb-3  w-full justify-center items-center">
        <a href='#about'>
          <div className="w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;