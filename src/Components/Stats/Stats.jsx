// import { Box, SimpleGrid, Text } from '@chakra-ui/react'
// import React from 'react'
// import styles from "./Stats.module.css"
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import GitHubCalendar from 'react-github-calendar';
// const Stats = () => {
//  useEffect(() => {
//     Aos.init();
//   }, [])
//   return (
//     <>
//       <SimpleGrid columns={[2,4,4]} className={styles.stats} >
//          <Box data-aos="fade-up"
//         data-aos-duration="1000">
//         <Box className={styles.achievement}>
//         <Box className={styles.circle} style={{color: '#facc15 '}}>1200+</Box>
//         <span  style={{color: '#0e7490'}}>
//         <Text fontSize='x-large' fontWeight='bolder'>Hours of Coding</Text>
//              </span>
//          </Box>
//         </Box>
//        <Box data-aos="fade-up"
//        data-aos-duration="1800">
//        <Box className={styles.achievement}>
//        <Box className={styles.circle} style={{color: '#facc15 '}}>100+</Box>
//        <span  style={{color: '#0e7490  '}}>
//        <Text fontSize='x-large' fontWeight='bolder'>Github Commits</Text>
//        </span>
//        </Box>
//         </Box>
//         <Box data-aos="fade-up"
//          data-aos-duration="2200">
//        <Box className={styles.achievement}>
//         <Box className={styles.circle} style={{color:'#facc15 '}}>5+</Box>
//         <span  style={{color: '#0e7490'}}>
//             <Text fontSize='x-large' fontWeight='bolder'>Projects Done</Text>
//              </span>
//            </Box>
//         </Box>
//        <Box data-aos="fade-up"
//        data-aos-duration="3000">
//        <Box className={styles.achievement}>
//         <Box className={styles.circle} style={{color: '#facc15'}}>100+</Box>
//         <span  style={{color: '#0e7490'}}>
//             <Text fontSize='x-large' fontWeight='bolder'>Hours of Soft skills</Text>
//              </span>
//           </Box>
//         </Box>
//      </SimpleGrid>
//     <Box  width={['95%','80%','65%']} m='auto' mb={'50px'} >
//     <GitHubCalendar username="pravin0428"/>
//     </Box>
//     </>
//   )
// }
// export default Stats

import { Box, Container, Heading, HStack, Stack } from "@chakra-ui/react";
import { Tooltip } from "react-tooltip";
import GitHubCalendar from "react-github-calendar";
import "./GitCalender.css";
function GitCalender() {
  const colorTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <Box p={10} alignItems="center">
      <Container
        maxW={{
          base: "container.sm",
          sm: "container.lg",
          md: "container.md",
          lg: "container.lg",
        }}
        p={5}
        centerContent
      >
        <Heading>Git Hub Stats</Heading>
        <Stack direction={["column", "row"]} m={4} spacing={{ base: 4, md: 8 }}>
          <p align="left">
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=pravin0428&theme=shades-of-purple&show_icons=true&locale=en"
              alt="pravin0428"
            />
          </p>
          <p align="left">
            <img
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=pravin0428&theme=shades-of-purple"
              alt="pravin0428"
            />
          </p>
        </Stack>
        <Stack className="git_calender">
          <GitHubCalendar
            username="pravin0428"
            blockSize={18}
            blockMargin={5}
            fontSize={16}
            // showWeekdayLabels
            //  hideTotalCount={true}
            // hideColorLegend={{base:false,sm:true, md:false}}
            theme={colorTheme}
          >
            {/* <Tooltip delayShow={20} html /> */}
          </GitHubCalendar>
        </Stack>
      </Container>
    </Box>
  );
}

export default GitCalender;
