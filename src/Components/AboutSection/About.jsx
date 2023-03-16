//import styles from "./Styling/About.module.css";
import { Box, Text } from "@chakra-ui/react";
import styles from "../../Components/AboutSection/About.module.css";

function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Box bottom>
        <p className={styles.aboutHeading}>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img src="ProPic.jpeg" alt="" className={styles.profilePic} />
          </div>
          <div className={styles.headingAndText}>
            <h2 className={styles.headName}>
              I am <span>Pravin Mohite.</span>{" "}
            </h2>

            <Text className={styles.text}>
              As a highly skilled full-stack web developer, the individual
              demonstrates exceptional analytical and detail-oriented
              capabilities, delivering production-ready code using React, Redux,
              and CSS on the front-end and Node.js and Express on the back-end
              with a focus on developing efficient single-page applications.
              passionate about coding and highly interested in working with a
              growth-oriented organization that values innovation and
              collaboration.
            </Text>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default AboutSection;
