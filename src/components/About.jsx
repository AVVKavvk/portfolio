import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style';
import {services} from'../constants'
import {fadeIn,textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'
const ServiceCard=({index,title,icon})=>{
  return (

<Tilt className="xs:w-[170px] w-full">
<motion.div  variants={fadeIn("right","spring",0.5*index,0.75)}

className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
<div 
options={{
  max:45,
  scale:1,
  speed:450
}}

className="bg-tertiary w-auto text-center rounded-[20px] py-5 px-12 max-h-[280px] min-h-[200px] flex justify-evenly items-center flex-col ">
<img src={icon} alt={title} className="w-16 h-16 object-contain " />

<h3>{title}</h3>
</div>
</motion.div>

</Tilt>
  )
}


const About = () => {


  return (
    <>
    <motion.div variants={textVariant()} className="mt-16">
<p className={`${styles.sectionSubText} px-6  sm:mt-16  `}>Introduction</p>

<h2 className={`${styles.sectionHeadText} px-3 `}>Overview</h2>



    </motion.div>
    <motion.p
     variants={fadeIn
    ("","",0.1,1)}

    className="mt-4 text-justify px-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
    >
      I'm a skilled Full-Stack Developer with expertise in building scalable, user-friendly solutions using technologies like React.js, Node.js, Express.js, Redux, Three.js, Tailwind CSS, Bootstrap, MongoDB, MySQL, JavaScript (ES6+), TypeScript, Django, Django REST Framework, Git, JWT, GraphQL, and CI/CD tools. I’m passionate about clean code, software architecture, and building efficient systems. A quick learner and collaborative team player, I work closely with cross-functional teams to solve real-world problems and create innovative solutions. Let’s work together to bring your ideas to life!
    </motion.p>

    <div className="mt-20 px-2 flex flex-wrap gap-10">
{
  services.map((service,index)=>(<ServiceCard key={service.title} index={index} {...service}/>))
}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about");