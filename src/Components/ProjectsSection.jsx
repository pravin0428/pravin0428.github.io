import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import {
  SiJavascript,
  SiReact,
  SiChakraui,
  SiExpress,
  SiPython,
  SiFastapi,
  SiFfmpeg,
  SiDocker,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    name: "Video Engine",
    img: "/video-engine.png",
    link: "https://video-engine-xeel.onrender.com",
    git: "https://github.com/pravin0428/videoPipeline",
    about:
      "Turn a script into a fully narrated, subtitled video automatically — AI voiceover, stock footage, and captions rendered into a ready-to-post vertical documentary.",
    stacks: [<SiPython />, <SiFastapi />, <SiFfmpeg />, <SiDocker />],
    duration: "Personal",
    status: "Personal project",
  },
  {
    name: "Trouper.com",
    img: "trouperphoto.png",
    link: "https://trouper-com.vercel.app/",
    git: "https://github.com/pravin0428/nutty-form-5506",
    about:
      "Unlock endless possibilities for your next project with Troper.com – the ultimate freelancing website. Hire top-rated freelancers or apply for exciting freelance opportunities.",
    stacks: [<SiReact />, <SiChakraui />, <SiExpress />],
    duration: "5 days",
    status: "Group project",
  },
  {
    name: "Sephora.com-Clone",
    img: "/sephora_poster.png",
    link: "https://sephora-clone-five.vercel.app/",
    git: "https://github.com/pravin0428/Sephora.com-Clone/tree/master",
    about:
      "E-Commerce Platform: Discover the latest in beauty at Sephora! Explore an unrivaled selection of makeup, skin care, fragrance and more from classic and emerging brands.",
    stacks: [<SiReact />, <SiChakraui />],
    duration: "5 days",
    status: "Solo project",
  },
  {
    name: "TripBook.com",
    img: "/tripbook-pic.png",
    link: "https://tripbook.vercel.app/",
    git: "https://github.com/rajkumar7859/Tripbook.com",
    about:
      "Book your tickets only on Tripbook.com and enjoy a hassle-free, super-fast booking experience. Your journey begins with a simple click.",
    stacks: [<TbBrandNextjs />, <SiJavascript />, <SiChakraui />],
    duration: "5 days",
    status: "Group project",
  },
];

export function ProjectsSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 100,
      scale: 0.9,
      stagger: 0.1,
      duration: 1.2,
      ease: "power4.out",
    });
  }, { scope: containerRef });

  return (
    <Box
      id="projects"
      ref={containerRef}
      bg="gray.900"
      py={32}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={8} mb={20}>
          <Heading
            as="h2"
            size="2xl"
            className="text-gradient"
            textAlign="center"
          >
            Featured Projects
          </Heading>
          
          <Text color="gray.400" maxW="600px" textAlign="center" fontSize="lg">
            Projects I built at the start of my journey while learning web development—
            from full-stack applications to high-fidelity frontend clones.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}