import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./Stats.module.css"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
const Stats = () => {
 useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <SimpleGrid columns={[2,4,4]} className={styles.stats} >
         <Box data-aos="fade-up"
        data-aos-duration="1000">
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>1200+</Box>
        <span  style={{color: '#0e7490'}}>
        <Text fontSize='x-large' fontWeight='bolder'>Hours of Coding</Text>
             </span>
         </Box>
        </Box>
       <Box data-aos="fade-up"
       data-aos-duration="1800">
       <Box className={styles.achievement}>
       <Box className={styles.circle} style={{color: '#facc15 '}}>100+</Box>
       <span  style={{color: '#0e7490  '}}>
       <Text fontSize='x-large' fontWeight='bolder'>Github Commits</Text>
       </span>
       </Box>
        </Box>
        <Box data-aos="fade-up"
         data-aos-duration="2200">
       <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color:'#facc15 '}}>5+</Box>
        <span  style={{color: '#0e7490'}}>
            <Text fontSize='x-large' fontWeight='bolder'>Projects Done</Text>
             </span>
           </Box>
        </Box>
       <Box data-aos="fade-up"
       data-aos-duration="3000">
       <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15'}}>100+</Box>
        <span  style={{color: '#0e7490'}}>
            <Text fontSize='x-large' fontWeight='bolder'>Hours of Soft skills</Text>
             </span>
          </Box>
        </Box>
     </SimpleGrid>
    <Box  width={['95%','80%','65%']} m='auto' mb={'50px'} >
    <GitHubCalendar username="pravin0428" />
    </Box>
    </>
  )
}
export default Stats