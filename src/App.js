import "./App.css";
import About from "./Components/AboutSection/About"
import {HeroSection} from "./Components/FirstSection/HeroSection";
import {ProjectsSection} from "./Components/ProjectsSection";
import Navbar from "./Components/Navbar";
 
import Stats from "./Components/Stats/Stats";
import SkillsSection from "./Components/SkillsSection";
import {ContactSection} from "./Components/ContactSection"
import Experience from "./Components/ExperianceSection/Experience";
function App() {
  return (
    <div className="App">
      <Navbar/>
       <HeroSection/>  
       <About/>
       <Experience/>
      <SkillsSection/>
      <ProjectsSection/>
      <Stats/>
      <ContactSection/>  
    </div>
  );
}
export default App;
