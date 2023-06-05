import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies1 } from "../constants"



const Tech1 = () => {
  return (

    <>   
    <div 
    class=" flex flex-wrap flex-row mt-10 justify-center gap-10 ">

{technologies1.map((technology)=>(
  <div class="w-28 h-28 " key={technology.name}>

<BallCanvas icon={technology.icon} />
  </div>
))}
    </div>
    
</>
  )
}

export default SectionWrapper(Tech1,"tech1")