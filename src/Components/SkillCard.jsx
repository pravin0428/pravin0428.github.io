import { Paper } from "@material-ui/core"
import styles from "./Styling/SkillCard.module.css"
import { useState } from "react"
  function SkillCard({ skill, icon }) {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
   <Paper elevation={3} className={styles.card}>
      {icon}
    <p className={styles.skillHeading} >{skill}</p>
    </Paper>
  )
}

export default SkillCard