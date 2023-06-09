import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { github,arrow } from "../assets";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {


  function Redirect({link}){

    <a href={link} target="_blank"></a>
  }
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
   <a href={experience.link} target="_blank"> 
     <div>
        <h3 className="text-white text-[24px] font-bold hover:scale-105 transition-all duration-500">{experience.title}</h3>
      </div>
      </a>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.skills}
        </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
<ul class="flex flex-wrap flow-row space-x-6 justify-between mt-3 items-center w-[90%] mx-auto ">
  <a href={experience.link1} target="_blank" class=" hover:scale-125  transition-all duration-500" ><li> <img src={github} alt="github"  class=" w-10 h-10 rounded-full "/>   </li></a>   
  <a href={experience.link} target="_blank" class=" hover:scale-125 transition-all duration-500"><li>   <img src={arrow} alt="github"  class=" w-10 h-10 rounded-full "/>  </li></a>   
  
</ul>
      
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
       Projects
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");