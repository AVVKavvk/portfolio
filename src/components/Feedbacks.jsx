import {motion} from 'framer-motion'
import {styles} from '../style'
import { SectionWrapper } from '../hoc' 
import {fadeIn,textVariant} from '../utils/motion'
import { testimonials } from '../constants';
// import {testimonials} from '../constants'

const FeedBackCard=({index,testimonial,Name,designation,company,image})=>(
 <motion.div 
 variants={fadeIn("","spring",index*0.5,0.75)}
 class="bg-black-200 p-10 rounded-3xl xs:w-[320px] mb-4  max-w-full "
 >
<p class="text-white font-black text-[48px]  ">"</p>
<div class="mt-1 ">
<p class=" text-white tracking-wider text-[18px] ">{testimonial}</p>

<div class="mt-7 flex justify-between items-center gap-1 ">
  <div class="flex-1 flex flex-col">
<p class=" text-white font-medium text-[16px]">
  <span class="blue-text-gradient" >@</span> {Name}
</p>
<p class="mt-1  text-secondary text-[12px]">
  {designation} of {company}
</p>
  </div>

  <img src={image} alt={Name} class="w-10 h-10 rounded-full object-contain " />
</div>
</div>
 </motion.div> 
)
const Feedbacks = () => {
  return (
    <div class=" mt-12 bg-black-100 rounded-[20px]">
<div class={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}>
<motion.div>
  <p className={styles.sectionSubText}>What others say</p>
  <h2 class={styles.sectionHeadText}>Testimonials</h2>
</motion.div>
</div>
<div class={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-x-7`}>
  {
    testimonials.map((testimonial,index)=>{
      return(
        <FeedBackCard
        
        key={testimonial.Name}
        index={index} 
        {...testimonial}
        />
      )
    })
  }
</div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"feedback")