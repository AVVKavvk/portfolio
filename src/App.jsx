import {  Navbar,
  About,Tech,Tech1,Tech2, Experience,Hero, Works, Feedbacks, Contact, EarthCanvas,  BallCanvas,  ComputersCanvas,  StarsCanvas} from './components'
import Connect from "./components/Connect";
function App() {
  

  return (
    <>

    <div className="bg-primary z-0 relative">

      <div className="bg-cover bg-no-repeat bg-hero-pattern bg-center">
       <Navbar/>
        <Hero/>

      </div>
      <div id="about"><About/></div>
      <div id="work"><Experience/></div>      
   <div id="skills" >

      
   <div  class=" hidden lg:block">
<Tech/>
   </div>
    

<div class=" flex flex-wrap flex-col lg:hidden">

<Tech1/>
<Tech2/>
</div>
   </div>
<Feedbacks/>

<div id="activity"> <Connect/></div>

<div className="relative z-0">
<div  id="contact"><Contact/></div>
<StarsCanvas/>
</div>

    </div>
    </>
  )
}

export default App
