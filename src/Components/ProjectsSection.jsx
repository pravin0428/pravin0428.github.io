import { ProjectCard } from "./ProjectCard"
import styles from "./Styling/ProjectsSection.module.css"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import {SiReact} from "react-icons/si"
import {SiChakraui} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {SiNextdotjs} from "react-icons/si"
          
import Fade from "react-reveal/Fade"
const projects = [
  
  {
    name: "Trouper.com",
    img: "trouperphoto.png",
    link: "https://trouper-com.vercel.app/",
    git: "https://github.com/pravin0428/nutty-form-5506",
    about:
      "Upgrade to a curated experience packed with tools and benefits dedicated to businesses. A customer success manager can match you with the perfect talent.",
    stacks: [
    <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
    ],
    duration : "5 days",
    status : "Group project"
  },
  {
    name: "Sephora.com-Clone",
    img: "/sephora_poster.png",
    link: "https://sephora-clone-five.vercel.app/",
    git: "https://github.com/pravin0428/Sephora.com-Clone/tree/master",
    about:"Discover the latest in beauty at Sephora! Explore an unrivalled selection of makeup",
    stacks: [
     <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      // <SiCss3 className={styles.stackIcon} />,
    ],
    duration : "5 days",
    status : "Individual project"
  },
  
  {
    name: "YOOX.com-Clone",
    img: "/yooxposter.png",
    link: "https://admirable-halva-9f908e.netlify.app/",
    git:"https://github.com/pravin0428/YOOX.com-Clone",
    about:
      "Discover a wide array of products by the best Italian and international designers on YOOX. Fast delivery and secure payments",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
    duration : "5 days",
    status : "Group project"
  },
  {
    name: "Full-stack-curd-app",
    img: "/fullStack-pic.png",
    link: "https://my-app-tau-flame.vercel.app/",
    git: "https://github.com/pravin0428/fullstack",
    about:
        "Costome shop for curd-related product applications",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
    ],
    duration : "3 days",
    status : "Individual project"
  },
  {
    name: "TripBook.com",
    img: "/tripbook-pic.png",
    link: "https://tripbook.vercel.app/",
    git: "https://github.com/rajkumar7859/Tripbook.com",
    about:
      "Book your tickets only on Tripbook.com and enjoy a hassle-free, super-fast booking experience.",
    stacks: [
    <SiNextdotjs className={styles.stackIcon}/>,
    <SiJavascript className={styles.stackIcon} />,
    <SiChakraui className={styles.stackIcon} />,
    ],
    duration : "5 days",
    status : "Group project"
  },
  {
    name: "Boat-lifestyle.com clone",
    img: "/boatPoster.png",
    link: "https://candid-paletas-feef7b.netlify.app",
    git: "https://github.com/chaitanya0319/Collab",
    about:
      "Examine the stunning selection of earbuds, headphones, earphones, and wireless devices. ",
    stacks: [
    <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
    duration : "5 days",
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