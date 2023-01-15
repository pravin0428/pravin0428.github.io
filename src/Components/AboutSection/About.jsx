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
              full-stack web developer who is analytical and detail-oriented and
              is capable of writing production-ready code using ReactJS, Redux,
              and CSS on the frontend and NodeJS and Express on the backend to
              build an efficient single-page application. passionate about
              coding and intensely interested in working with a product-based
              company
            </Text>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default AboutSection;
