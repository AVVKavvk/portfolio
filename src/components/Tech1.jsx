import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies1 } from "../constants"
import {styles} from '../style'
import React from "react";
import { textVariant } from "../utils/motion";
import {motion} from 'framer-motion'


const Tech1 = () => {
  return (

    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}  text-center`}>
        What I have acquired till now
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-16`}>
    Skills
        </h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies1.map((technology) => (
      <div className="w-28 h-28"  key={technology.name}>
        <BallCanvas icon={technology.icon} />
      </div>
    ))}
    
  </div>
    </>
    

  )
}

export default SectionWrapper(Tech1,"tech1")