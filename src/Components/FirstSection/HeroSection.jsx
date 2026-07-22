import { useEffect, useRef } from "react";
import TechDNA from "../TechDNA";
import TechSphere from "../TechSphere";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { RiDownloadLine } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const decoRef = useRef(null);

  const highlightColor = "brand.400";

  useGSAP(() => {
    // 1. Initial State Setup (Immediate)
    gsap.set(containerRef.current, { 
      autoAlpha: 0, 
      z: -500,
      scale: 0.8,
      filter: "blur(15px)" 
    });
    
    // 2. Entrance Animation Timeline
    const tl = gsap.timeline({
        onComplete: () => {
            // Recalculate ScrollTrigger positions after layout is stable
            ScrollTrigger.refresh();
        }
    });

    tl.to(containerRef.current, { 
      autoAlpha: 1, 
      z: 0,
      scale: 1,
      filter: "blur(0px)", 
      duration: 1.5,
      delay: 0.2, // Shorten delay for better user perception
      ease: "power3.out"
    });

    // 3. Cinematic Depth Scroll (Refined for visibility stability)
    const scrollTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    });

    // Explicit fromTo endpoints so a ScrollTrigger.refresh() (triggered by
    // other sections) can never re-capture a stale live value and leave the
    // hero stuck invisible when scrolling back up.
    // Stay fully visible for the first 40% of the scroll journey...
    scrollTl.fromTo(containerRef.current,
            { autoAlpha: 1, scale: 1, z: 0, filter: "blur(0px)" },
            { autoAlpha: 1, duration: 0.4, immediateRender: false }
    )
            // ...then dissolve into depth for the remainder.
            .to(containerRef.current, {
                scale: 1.3,
                z: 300,
                autoAlpha: 0,
                filter: "blur(10px)",
                duration: 0.6,
                ease: "power2.in"
            });

    // Mouse tilt effect for the hero content
    const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        // Subtle parallax tilt (max ~6deg) so hovering elements like the
        // resume button doesn't swing the whole hero.
        const xPos = (clientX / window.innerWidth - 0.5) * 6;
        const yPos = (clientY / window.innerHeight - 0.5) * 6;

        gsap.to(".hero-content-stack", {
            rotateY: xPos,
            rotateX: -yPos,
            duration: 1,
            ease: "power2.out"
        });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);

  }, { scope: containerRef });

  return (
    <Box
      id="hero"
      ref={containerRef}
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      pt={16}
      overflow="hidden"
      bg="transparent"
    >
      <Container maxW="container.xl" position="relative" zIndex={1} sx={{ perspective: "1200px" }}>
        <Flex
          className="hero-content-stack"
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={10}
          transformStyle="preserve-3d" // Enable 3D for children
        >
          <Box flex={1} textAlign={{ base: "center", md: "left" }}>
            <Text
              ref={textRef}
              color={highlightColor}
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl" }}
              mb={4}
              textTransform="uppercase"
              letterSpacing="widest"
              opacity={0.8}
            >
              Hello, I'm
            </Text>

            <Heading
              ref={headingRef}
              as="h1"
              fontSize={{ base: "5xl", md: "6xl", lg: "8xl" }}
              fontWeight="black"
              mb={4}
              lineHeight="shorter"
              bgGradient="linear(to-r, white, gray.300)"
              bgClip="text"
              position="relative"
            >
              Pravin Mohite
            </Heading>

            <Heading
              ref={subHeadingRef}
              as="h2"
              size="xl"
              bgGradient="linear(to-r, brand.400, brand.200)"
              bgClip="text"
              mb={6}
              fontWeight="bold"
              letterSpacing="tight"
            >
              Full Stack Web Developer
            </Heading>

            <Text
              ref={descRef}
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.400"
              maxW="600px"
              mb={8}
              mx={{ base: "auto", md: "0" }}
              lineHeight="tall"
            >
              Building digital experiences that matter. I create responsive,
              performant, and user-friendly web applications with modern
              technologies.
            </Text>

            <Stack
              ref={buttonsRef}
              direction={{ base: "column", sm: "row" }}
              spacing={6}
              justify={{ base: "center", md: "flex-start" }}
              align="center"
            >
              <a
                href="/Pravin-Mohite-Resume.pdf"
                download="Pravin-Mohite-Resume.pdf"
              >
                <Button
                  size="lg"
                  px={8}
                  rightIcon={<RiDownloadLine />}
                  variant="solid"
                  className="glow-shadow"
                  bg="brand.400"
                  color="gray.900"
                  _hover={{
                    transform: "translateY(-2px)",
                    bg: "brand.300",
                    boxShadow: "0 10px 20px rgba(240, 209, 34, 0.4)",
                  }}
                  transition="all 0.3s ease"
                >
                  Download Resume
                </Button>
              </a>

              <Stack direction="row" spacing={4}>
                {[
                  { icon: AiFillLinkedin, url: "https://www.linkedin.com/in/pravin-mohite-40b56221b/" },
                  { icon: AiOutlineGithub, url: "https://github.com/pravin0428" }
                ].map((social, i) => (
                  <a key={i} href={social.url} target="_blank" rel="noreferrer">
                    <Box
                      p={4}
                      borderRadius="xl"
                      className="glass"
                      _hover={{
                        bg: "whiteAlpha.200",
                        transform: "translateY(-3px)",
                        color: "brand.400",
                        borderColor: "brand.400",
                      }}
                      transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                      cursor="pointer"
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                    >
                      <Icon as={social.icon} w={6} h={6} color="gray.300" />
                    </Box>
                  </a>
                ))}
              </Stack>
            </Stack>
          </Box>

          {/* Decorative 3D Tech Sphere */}
          <Box
            ref={decoRef}
            flex={1}
            display={{ base: "none", lg: "flex" }}
            position="relative"
            zIndex={2}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              w="500px"
              h="500px"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                height: "80%",
                borderRadius: "full",
                background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
                filter: "blur(40px)",
                zIndex: -1,
              }}
            >
              <TechSphere />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}