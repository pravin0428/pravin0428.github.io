import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiChakraui,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FadeInWhenVisible, StaggerContainer, RollingCubeItem } from "./AnimationWrappers";

const projects = [
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
    name: "YOOX.com-Clone",
    img: "/yooxposter.png",
    link: "https://admirable-halva-9f908e.netlify.app/",
    git: "https://github.com/pravin0428/YOOX.com-Clone",
    about:
      "Shop the best of Italian and international design on YOOX – the ultimate e-commerce platform. Join the stylish community today and experience fast delivery.",
    stacks: [<SiJavascript />, <SiHtml5 />, <SiCss3 />],
    duration: "5 days",
    status: "Group project",
  },
  {
    name: "Full-stack-curd-app",
    img: "/fullStack-pic.png",
    link: "https://my-app-tau-flame.vercel.app/",
    git: "https://github.com/pravin0428/fullstack",
    about:
      "A responsive and efficient full-stack CRUD application that showcases my development skills, enabling seamless data management and user interaction.",
    stacks: [<SiReact />, <SiChakraui />, <SiExpress />],
    duration: "3 days",
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
  {
    name: "Boat-lifestyle.com clone",
    img: "/boatPoster.png",
    link: "https://candid-paletas-feef7b.netlify.app",
    git: "https://github.com/chaitanya0319/Collab",
    about:
      "Examine the stunning selection of earbuds, earphones, headphones, and wireless devices. Experience high-quality sound and style.",
    stacks: [<SiJavascript />, <SiHtml5 />, <SiCss3 />],
    duration: "5 days",
    status: "Group project",
  },
];

export function ProjectsSection() {
  const highlightColor = useColorModeValue("brand.400", "brand.400");

  return (
    <Box
      id="projects"
      bg="gray.900"
      py={20}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <FadeInWhenVisible>
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            mb={16}
            position="relative"
            _after={{
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              bg: highlightColor,
              margin: "0.5rem auto 0",
              borderRadius: "full",
            }}
          >
            Projects
          </Heading>
        </FadeInWhenVisible>

        <StaggerContainer staggerDelay={0.15}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} style={{ perspective: "1000px" }}>
            {projects.map((project, index) => (
              <RollingCubeItem key={index}>
                <ProjectCard {...project} />
              </RollingCubeItem>
            ))}
          </SimpleGrid>
        </StaggerContainer>
      </Container>
    </Box>
  );
}