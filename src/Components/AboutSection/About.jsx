import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

export function AboutSection() {
  const textColor = useColorModeValue("gray.300", "gray.300");
  const highlightColor = useColorModeValue("brand.400", "brand.400");

  return (
    <Box
      id="about"
      py={20}
      position="relative"
      bg="gray.900"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Fade bottom>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            gap={{ base: 10, md: 20 }}
          >
            {/* Profile Image */}
            <Box
              flexShrink={0}
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "-10px",
                left: "-10px",
                width: "100%",
                height: "100%",
                border: "2px solid",
                borderColor: highlightColor,
                borderRadius: "50%",
                zIndex: 0,
              }}
            >
              <Image
                src="Mediapravin.png"
                alt="Pravin Mohite"
                borderRadius="50%"
                w={{ base: "200px", md: "280px" }}
                h={{ base: "280px", md: "390px" }}
                objectFit="cover"
                objectPosition="center center"
                border="4px solid"
                borderColor="gray.700"
                position="relative"
                zIndex={1}
                shadow="xl"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.06)" }}
              />
            </Box>

            {/* Content */}
            <Box maxW="600px" textAlign={{ base: "center", md: "left" }}>
              <Heading
                as="h2"
                size="2xl"
                mb={6}
                position="relative"
                display="inline-block"
                _after={{
                  content: '""',
                  width: "50%",
                  height: "4px",
                  bg: highlightColor,
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                  borderRadius: "full",
                }}
              >
                About Me
              </Heading>

              <Heading as="h3" size="lg" mb={4} fontWeight="medium">
                I am <Text as="span" color={highlightColor} fontWeight="bold">Pravin Mohite.</Text>
              </Heading>

              {/* <Text fontSize="lg" color={textColor} lineHeight="tall" mb={6}>
                As a highly skilled full-stack web developer, I demonstrate
                exceptional analytical and detail-oriented capabilities. I deliver
                production-ready code using <b>React, Redux, and CSS</b> on the
                front-end and <b>Node.js and Express</b> on the back-end, with a
                focus on developing efficient single-page applications.
              </Text>

              <Text fontSize="lg" color={textColor} lineHeight="tall">
                I am passionate about coding and highly interested in working with
                a growth-oriented organization that values innovation and
                collaboration.
              </Text> */}

              <Text fontSize="lg" color={textColor} lineHeight="tall" mb={6}>
  A full-stack web developer with nearly 3 years of experience in building production-grade 
  applications and Chrome extensions. I have worked across <b>React, Angular, and Next.js</b> on the 
  frontend, while also contributing to <b>Node.js, Express, and MongoDB</b> on the backend. I take 
  ownership of system workflows, implement scalable UI features, integrate APIs, and optimize 
  application performance.
</Text>

<Text fontSize="lg" color={textColor} lineHeight="tall">
  I have led end-to-end development on a live browser extension, including migration to Manifest V3, 
  data scraping via XHR interception, and mentoring fellow developers. I am passionate about solving 
  real-world challenges, architecting clean solutions, and growing into roles involving technical 
  leadership and high-impact product building.
</Text>

            </Box>
          </Flex>
        </Fade>
      </Container>
    </Box>
  );
}

export default AboutSection;