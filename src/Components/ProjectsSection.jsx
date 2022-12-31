import { ProjectCard } from "./ProjectCard"
import styles from "./Styling/ProjectsSection.module.css"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import {SiReact} from "react-icons/si"
import {SiChakraui} from "react-icons/si"
import {SiExpress} from "react-icons/si"
 
import Fade from "react-reveal/Fade"
const projects = [
  
  {
    name: "Trouper.com",
    img: "trouperphoto.png",
    link: "https://trouperpro.netlify.app/",
    git: "https://github.com/pravin0428/nutty-form-5506",
    about:
      "Upgrade to a curated experience packed with tools and benefits, dedicated to businesses. Get matched with the perfect talent by a customer success manager ",
    stacks: [
    <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
    ],
    duration : "5 Days",
    status : "Group project"
  },
  {
    name: "Sephora.com-Clone",
    img: "/sephora_poster.png",
    link: "https://sephora-clone-five.vercel.app/",
    git: "https://github.com/pravin0428/Sephora.com-Clone/tree/master",
    about:"Discover the latest in beauty at Sephora! Explore an unrivaled selection of makeup",
    stacks: [
     <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      // <SiCss3 className={styles.stackIcon} />,
    ],
    duration : "5 Days",
    status : "Individual project"
  },
  
  {
    name: "YOOX.com-Clone",
    img: "/yooxposter.png",
    link: "https://admirable-halva-9f908e.netlify.app/",
    git:"https://github.com/pravin0428/YOOX.com-Clone",
    about:
      "Discover a wide array of products by the best Italian and international designers on YOOX. Fast delivery and secure payments.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
    duration : "5 Days",
    status : "Group project"
  },
  {
    name: "Boat-lifestyle.com clone",
    img: "/boatPoster.png",
    link: "https://candid-paletas-feef7b.netlify.app",
    git: "https://github.com/chaitanya0319/Collab",
    about:
      "Check out the breathtaking collection of Earbuds, Headphones, Earphones & Wireless…",
    stacks: [
    <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
    duration : "5 Days",
    status : "Group project"
  }
  ]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p className={styles.prohead} >Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}