import { ProjectCard } from "./ProjectCard"
import styles from "./Styling/ProjectsSection.module.css"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  
  {
    name: "Trouper.com",
    img: "/geekbuying.com.png",
    link: "https://geekbuyingapp.netlify.app/",
    git: "https://github.com/mr-ashu/nutty-form-5506",
    about:
      "This is a clone of the e-commerce website Geekbuying.com, where you can get the best deals on electronics and home appliances. ",
    stacks: [
    <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
    duration : "5 Days",
    status : "Group project"
  },
  {
    name: "Sephora.com-Clone",
    img: "/sephora_poster.png",
    link: "https://sephora-clone-five.vercel.app/",
    git: "https://github.com/pravin0428/Sephora.com-Clone/tree/master",
    about:"This is a clone of an e-commerce website named Sephora.com. Here you will find all the makeup products.",
    stacks: [
     <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
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
      "This is a clone of the e-commerce website YOOX.com, where you can find all of your fashion accessories.",
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
      "This is a clone of an e-commerce website named Boat-Lifestyle. Users can buy headphones, earphones, earbuds, speakers, and smartwatches on this platform.",
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