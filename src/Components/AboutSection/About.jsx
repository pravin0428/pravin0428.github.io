import { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function AboutSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const textChunksRef = useRef([]);

  const highlightColor = "brand.400";

  useGSAP(() => {
    // Keep only the "Anti-gravity" floating image logic
    gsap.to(imageRef.current, {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  const addToRefs = (el) => {
    if (el && !textChunksRef.current.includes(el)) {
      textChunksRef.current.push(el);
    }
  };

  return (
    <Box
      id="about"
      ref={containerRef}
      py={20}
      position="relative"
      bg="transparent"
      overflow="hidden"
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={{ base: 10, md: 24 }}
        >
          {/* Profile Image */}
          <Box
            ref={imageRef}
            flexShrink={0}
            position="relative"
            zIndex={2}
          >
            <Box
              position="absolute"
              top="-20px"
              left="-20px"
              width="calc(100% + 40px)"
              height="calc(100% + 40px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
              animation="morph 8s ease-in-out infinite"
              zIndex={0}
            />
            <Image
              src="Mediapravin.png"
              alt="Pravin Mohite"
              borderRadius="2xl"
              w={{ base: "260px", md: "340px" }}
              h={{ base: "360px", md: "460px" }}
              objectFit="cover"
              position="relative"
              zIndex={1}
              className="glow-shadow"
              border="1px solid"
              borderColor="whiteAlpha.200"
            />
          </Box>

          {/* Content */}
          <Box 
            ref={contentRef} 
            maxW="600px" 
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              ref={titleRef}
              as="h2"
              size="2xl"
              mb={8}
              className="text-gradient"
              letterSpacing="tight"
            >
              About Me
            </Heading>

            <Heading 
              ref={addToRefs}
              as="h3" 
              size="lg" 
              mb={6} 
              fontWeight="medium"
              color="whiteAlpha.900"
            >
              I am <Text as="span" color={highlightColor} fontWeight="bold">Pravin Mohite.</Text>
            </Heading>

            <Text
              ref={addToRefs}
              fontSize="lg"
              color="gray.400"
              lineHeight="tall"
              mb={6}
            >
              I'm a Full Stack Software Engineer with <b>3.5+ years of experience</b> developing web
              applications, Chrome Extensions, and backend services used in production. Over the years, I've
              worked with <b>React, Next.js, Angular, TypeScript, Node.js, Python (FastAPI), and Go</b>, building
              features from the UI all the way to the backend APIs and databases.
            </Text>

            <Text
              ref={addToRefs}
              fontSize="lg"
              color="gray.400"
              lineHeight="tall"
              mb={6}
            >
              At <b>Clodura.ai</b>, I've taken ownership of complete features—from planning and implementation
              to testing, debugging, and production releases. I've worked extensively on Chrome Extension
              development (<b>Manifest V3</b>), LinkedIn and Sales Navigator integrations, REST APIs,
              authentication, and database-driven applications using <b>PostgreSQL and MongoDB</b>.
            </Text>

            <Text
              ref={addToRefs}
              fontSize="lg"
              color="gray.400"
              lineHeight="tall"
            >
              I enjoy solving engineering problems, improving existing systems, and building software that's
              reliable, easy to maintain, and delivers a good user experience. Outside of my day-to-day work,
              I like exploring AI automation and building personal projects that help me learn new technologies
              and improve my engineering skills.
            </Text>
          </Box>
        </Flex>
      </Container>

      <style jsx>{`
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 50% 20% 80% / 50% 20% 80% 50%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
      `}</style>
    </Box>
  );
}

export default AboutSection;