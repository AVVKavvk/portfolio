import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style';
import {activities} from'../constants'
import {fadeIn,textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'
const ServiceCard=({index,title,icon,link})=>{
  return (

<Tilt className="xs:w-[170px] w-full mx-auto max-w-[250px] sm:max-w-[300px]">

  <a href={link} target="_blank">

<motion.div  variants={fadeIn("right","spring",0.5*index,0.75)}

className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
<div 
options={{
  max:45,
  scale:1,
  speed:450
}}

className="bg-tertiary w-auto text-center rounded-[20px] py-5 px-12 max-h-[280px] min-h-[180px] flex justify-evenly items-center flex-col ">
<img src={icon} alt={title} className="w-16 h-16 object-contain " />

<h3>{title}</h3>
</div>
</motion.div>
  </a>

</Tilt>
  )
}


const About = () => {


  return (
    <>
    <motion.div variants={textVariant()}>

<h2 className={`${styles.sectionHeadText} px-3`}>Activites</h2>


  </motion.div>
   

    <div className="mt-20 px-2 flex flex-wrap gap-10">
{
  activities.map((service,index)=>(<ServiceCard key={service.title} index={index} {...service}/>))
}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about");