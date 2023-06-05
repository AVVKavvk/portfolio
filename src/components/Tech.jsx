import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import {styles} from '../style'
import { textVariant } from "../utils/motion"
import {motion} from "framer-motion"


const Tech = () => {
  return (

    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        What I have gained till now
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
    Skills
        </h2>
      </motion.div>
    <div 
    class=" flex flex-wrap flex-row mt-10 justify-center gap-10 ">

{technologies.map((technology)=>(
  <div class="w-28 h-28 " key={technology.name}>

<BallCanvas icon={technology.icon} />
  </div>
))}
    </div>
    <div class="text-center text-secondary mt-6  ">These are 3D Balls, you can rotate it.</div>
</>
  )
}

export default SectionWrapper(Tech,"tech")