import {
  Navbar,
  About,
  Tech,
  Experience,
  Hero,
  Contact,
  StarsCanvas,
} from "./components";
import Connect from "./components/Connect";
import Contact1 from "./components/Contact1";
import Work from "./components/Work";
function App() {
  return (
    <>
      <div className="bg-primary z-0 relative">
        <div className="bg-cover hidden md:block bg-no-repeat bg-hero-pattern bg-center">
          <Navbar />
          <Hero />

          <div id="about">
            <About />
          </div>
        </div>
        <div className="bg-cover md:hidden bg-no-repeat bg-hero-pattern bg-center">
          <Navbar />
          <Hero />
        </div>
        <div id="about" class="md:hidden">
          <About />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="project">
          <Experience />
        </div>
        <div id="skills">
          <Tech />
        </div>
        {/* <Feedbacks/> */}

        <div id="activity">
          {" "}
          <Connect />
        </div>

        <div id="contact" className="relative z-0">
          <div class="md:hidden">
            <Contact />
          </div>
          <div class="hidden md:block">
            <Contact1 />
          </div>
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}

export default App;
