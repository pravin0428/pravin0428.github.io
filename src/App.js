import { useEffect } from "react";
import "./App.css";
import About from "./Components/AboutSection/About";
import { HeroSection } from "./Components/FirstSection/HeroSection";
import { ProjectsSection } from "./Components/ProjectsSection";
import Navbar from "./Components/Navbar";
import { ScrollProgress } from "./Components/ScrollProgress";
import SkillsSection from "./Components/SkillsSection";
import { ContactSection } from "./Components/ContactSection";
import ExperienceSlider from "./Components/ExperienceSlider";

import { Box } from "@chakra-ui/react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Overhaul Components
import CosmicBackground from "./Components/CosmicBackground";
import TechDNA from "./Components/TechDNA";
import FloatingPanel from "./Components/FloatingPanel";
import EvolutionPath from "./Components/EvolutionPath/EvolutionPath";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize Lenis with cinematic settings
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Drive Lenis from GSAP's ticker ONLY (a second manual rAF loop would
    // advance scroll twice per frame → jank and inconsistent speed).
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Recalculate all trigger positions once layout has settled.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const refreshTimer = setTimeout(refresh, 600);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("load", refresh);
      clearTimeout(refreshTimer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CosmicBackground />
      
      {/* Global Cinematic Layer (Fixed) */}
      <Box position="fixed" top={0} left={0} w="full" h="full" zIndex={0} pointerEvents="none">
        <TechDNA />
        <Box 
            className="parallax-bg"
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            background="radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(240, 209, 34, 0.05) 0%, transparent 50%)"
        />
      </Box>

      <Box className="App" position="relative" zIndex={1}>
        <ScrollProgress />
        <Navbar />
        
        {/* Cinematic Journey Content */}
        <Box>
            <HeroSection />
            
            <FloatingPanel id="about">
                <About />
            </FloatingPanel>

            <EvolutionPath />

            <FloatingPanel id="experience">
                <ExperienceSlider />
            </FloatingPanel>

            <FloatingPanel id="skills">
                <SkillsSection />
            </FloatingPanel>

            <FloatingPanel id="projects">
                <ProjectsSection />
            </FloatingPanel>

            <FloatingPanel id="contact">
                <ContactSection />
            </FloatingPanel>
        </Box>
      </Box>
    </>
  );
}

export default App;
