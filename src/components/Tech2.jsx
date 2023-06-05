import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies2 } from "../constants"



const Tech2 = () => {
  return (

    <>   
    <div 
    class=" flex flex-wrap flex-row  justify-center gap-10 ">

{technologies2.map((technology)=>(
  <div class="w-28 h-28 " key={technology.name}>

<BallCanvas icon={technology.icon} />
  </div>
))}
    </div>
    <div class="text-center text-secondary mt-6  ">These are 3D Balls, you can rotate it.</div>
</>
  )
}

export default SectionWrapper(Tech2,"tech2")