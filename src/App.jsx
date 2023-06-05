import { BrowserRouter } from "react-router-dom"
import {  Navbar,
  About,Tech, Experience,Hero, Works, Feedbacks, Contact, EarthCanvas,  BallCanvas,  ComputersCanvas,  StarsCanvas} from './components'
import Connect from "./components/Connect";
function App() {
  

  return (
    <BrowserRouter>

    <div className="bg-primary z-0 relative">

      <div className="bg-cover bg-no-repeat bg-hero-pattern bg-center">
       <Navbar/>
        <Hero/>

      </div>
      <div id="about"><About/></div>
      <div id="work"><Experience/></div>      
<Tech/>
<Feedbacks/>
<Connect/>
<div className="relative z-0">
<div  id="contact"><Contact/></div>
<StarsCanvas/>
</div>

    </div>
    </BrowserRouter>
  )
}

export default App
