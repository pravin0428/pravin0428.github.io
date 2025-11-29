import "./App.css";
import About from "./Components/AboutSection/About";
import { HeroSection } from "./Components/FirstSection/HeroSection";
import { ProjectsSection } from "./Components/ProjectsSection";
import Navbar from "./Components/Navbar";
import { ScrollProgress } from "./Components/ScrollProgress";

import Stats from "./Components/Stats/Stats";
import SkillsSection from "./Components/SkillsSection";
import { ContactSection } from "./Components/ContactSection";
import ExperienceSlider from "./Components/ExperienceSlider";


import { useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { Box } from "@chakra-ui/react";

function App() {
  const { scrollYProgress } = useScroll();
  // Map scroll progress to background opacity (0‑1)
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Convert opacity to percentage for gradient
  const bgOpacityPct = useTransform(bgOpacity, (v) => v * 100);
  // Build the gradient string reactively
  const bgGradient = useMotionTemplate`
    radial-gradient(circle at 50% ${bgOpacityPct}%, rgba(240,209,34,0.05), transparent)
  `;
  // Map scroll progress to subtle shadow intensity
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.2]);
  const boxShadow = useMotionTemplate`0 0 12px rgba(0,0,0,${shadowOpacity})`;

  return (
    <>

      <Box
        className="App"
        style={{ backgroundImage: bgGradient, boxShadow }}
      >
        <ScrollProgress />
        <Navbar />
        <HeroSection />
        <About />
        <ExperienceSlider />
        <SkillsSection />
        <ProjectsSection />
        {/* <Stats/> */}
        <ContactSection />
      </Box>
    </>
  );
}

export default App;
