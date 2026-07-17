import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
  VStack,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiTailwindcss,
  SiMaterialui,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiGooglechrome,
  SiFfmpeg,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbComponents, TbApi } from "react-icons/tb";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaChrome,
  FaRobot,
  FaTools,
  FaShieldAlt,
  FaLeaf,
  FaFileCode,
  FaCogs,
  FaGlobe,
  FaExchangeAlt,
  FaGem,
  FaBrain,
  FaMagic,
  FaMicrophone,
  FaBolt,
  FaCodeBranch,
} from "react-icons/fa";
import SkillCard from "./SkillCard";
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from "./AnimationWrappers";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Python", icon: <SiPython />, color: "#4B8BBE" },
      { name: "Go", icon: <SiGo />, color: "#00ADD8" },
    ],
  },
  {
    title: "Frontend Development",
    icon: FaLaptopCode,
    skills: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
      { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
      { name: "Context API", icon: <SiReact />, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Material UI", icon: <SiMaterialui />, color: "#007FFF" },
      { name: "Shadcn UI", icon: <TbComponents />, color: "#E4E4E7" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    ],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#E4E4E7" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "REST APIs", icon: <TbApi />, color: "#f0d122" },
      { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "#FB015B" },
      { name: "OAuth 2.0", icon: <FaShieldAlt />, color: "#34A853" },
    ],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Mongoose", icon: <FaLeaf />, color: "#B33A3A" },
    ],
  },
  {
    title: "Browser Engineering",
    icon: FaChrome,
    skills: [
      { name: "Chrome Extensions", icon: <SiGooglechrome />, color: "#4285F4" },
      { name: "Manifest V3", icon: <FaFileCode />, color: "#f0d122" },
      { name: "Content Scripts", icon: <FaCode />, color: "#E8A33D" },
      { name: "Background Services", icon: <FaCogs />, color: "#9CA3AF" },
      { name: "Browser APIs", icon: <FaGlobe />, color: "#4285F4" },
      { name: "Message Passing", icon: <FaExchangeAlt />, color: "#22D3EE" },
    ],
  },
  {
    title: "AI & Automation",
    icon: FaRobot,
    skills: [
      { name: "Ollama", icon: <FaRobot />, color: "#E4E4E7" },
      { name: "Gemini API", icon: <FaGem />, color: "#8E75FF" },
      { name: "GitHub Copilot", icon: <SiGithub />, color: "#E4E4E7" },
      { name: "LLM Integration", icon: <FaBrain />, color: "#F472B6" },
      { name: "AI Automation", icon: <FaMagic />, color: "#A78BFA" },
      { name: "Edge-TTS", icon: <FaMicrophone />, color: "#0EA5E9" },
      { name: "FFmpeg", icon: <SiFfmpeg />, color: "#5CB85C" },
    ],
  },
  {
    title: "Developer Tools",
    icon: FaTools,
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#E4E4E7" },
      { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007ACC" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Thunder Client", icon: <FaBolt />, color: "#7B4BFF" },
      { name: "GitLens", icon: <FaCodeBranch />, color: "#DD6FF0" },
      { name: "NPM", icon: <SiNpm />, color: "#CB3837" },
    ],
  },
];

export function SkillsSection() {
  const highlightColor = useColorModeValue("brand.400", "brand.400");

  return (
    <Box
      id="skills"
      bg="transparent"
      py={20}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "radial-gradient(circle at 20% 80%, rgba(240, 209, 34, 0.08) 0%, transparent 50%)",
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <FadeInWhenVisible>
          <VStack spacing={4} mb={16} textAlign="center">
            <Text
              color="brand.400"
              fontWeight="bold"
              letterSpacing="widest"
              fontSize="sm"
            >
              TECH STACK
            </Text>
            <Heading
              as="h2"
              size="2xl"
              position="relative"
              _after={{
                content: '""',
                display: "block",
                width: "80px",
                height: "4px",
                bg: highlightColor,
                margin: "0.75rem auto 0",
                borderRadius: "full",
              }}
            >
              Technical Skills
            </Heading>
            <Text color="gray.400" fontSize="md" maxW="600px">
              A production-tested full-stack toolkit—from language fundamentals to
              frontend architecture, backend services, and AI automation.
            </Text>
          </VStack>
        </FadeInWhenVisible>

        <VStack spacing={16} align="stretch">
          {skillCategories.map((category) => (
            <FadeInWhenVisible key={category.title}>
              <Box>
                <HStack spacing={3} mb={8}>
                  <Box
                    p={2.5}
                    borderRadius="lg"
                    bg="rgba(240, 209, 34, 0.12)"
                    color="brand.400"
                    display="flex"
                  >
                    <Icon as={category.icon} boxSize={5} />
                  </Box>
                  <Heading
                    as="h3"
                    size="lg"
                    color="white"
                    borderLeft="4px solid"
                    borderColor={highlightColor}
                    pl={4}
                  >
                    {category.title}
                  </Heading>
                </HStack>

                <StaggerContainer staggerDelay={0.06}>
                  <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={6}>
                    {category.skills.map((skill) => (
                      <StaggerItem key={skill.name}>
                        <SkillCard
                          name={skill.name}
                          icon={skill.icon}
                          color={skill.color}
                        />
                      </StaggerItem>
                    ))}
                  </SimpleGrid>
                </StaggerContainer>
              </Box>
            </FadeInWhenVisible>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

export default SkillsSection;
