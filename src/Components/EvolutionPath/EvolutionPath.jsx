import React, { useRef, useState } from "react";
import { 
    Box, 
    Container, 
    Heading, 
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import EvolutionCard from "./EvolutionCard";
import {
    FaCode,
    FaBolt,
    FaCubes,
    FaFire,
    FaRobot
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    stage: 1,
    year: "2023",
    emoji: "🚀",
    title: "Started My Software Developement Journey",
    description: "Joined Tratoli TMC as a Frontend Software Developer where I transformed Figma designs into responsive React applications, collaborated with product teams, and learned how production software is built and maintained.",
    skillsLabel: "KEY HIGHLIGHTS",
    skills: [
      "Built responsive booking workflows using React",
      "Fixed production issues",
      "Worked closely with designers",
      "Learned large-scale product development"
    ],
    icon: FaCode
  },
  {
    stage: 2,
    year: "2024",
    emoji: "⚡",
    title: "Joined Clodura.ai",
    description: "Transitioned into building SaaS products used by real customers. Expanded from frontend development into backend services, browser extensions, APIs, and production debugging.",
    skillsLabel: "ACHIEVEMENTS",
    skills: [
      "Developed production features using React & Next.js",
      "Built scalable REST APIs",
      "Worked with PostgreSQL & MongoDB",
      "Took ownership of features from design to deployment"
    ],
    icon: FaBolt
  },
  {
    stage: 3,
    year: "2025",
    emoji: "🏗️",
    title: "Led Chrome Extension Development",
    description: "One of the biggest milestones in my career. Owned the architecture and development of Clodura's Chrome Extension, powering LinkedIn and Sales Navigator workflows for hundreds of active users.",
    skillsLabel: "HIGHLIGHTS",
    skills: [
      "Led Manifest V2 → V3 migration",
      "Delivered 10+ production features",
      "Improved extension performance",
      "Integrated LinkedIn & Sales Navigator workflows",
      "Mentored junior developers"
    ],
    icon: FaCubes
  },
  {
    stage: 4,
    year: "2026",
    emoji: "🔥",
    title: "Expanded into Backend Engineering",
    description: "Started contributing to Go backend services while continuing to own frontend architecture. Worked across the full stack—from React interfaces to Go APIs, databases, authentication, debugging, and production releases.",
    skillsLabel: "HIGHLIGHTS",
    skills: [
      "Built Go REST APIs",
      "JWT Authentication",
      "PostgreSQL integration",
      "Scheduler services",
      "Production debugging",
      "End-to-end feature ownership"
    ],
    icon: FaFire
  },
  {
    stage: 5,
    year: "Personal Projects",
    emoji: "🤖",
    title: "AI Documentary Generation Platform",
    description: "Designed and built a modular AI pipeline capable of generating documentary-style videos automatically using LLMs, AI narration, subtitle generation, and video rendering.",
    skillsLabel: "TECHNOLOGIES",
    skills: ["Python", "Ollama", "Edge-TTS", "FFmpeg", "AI Automation"],
    icon: FaRobot
  }
];

const STATS = [
  { value: "3.3+", label: "Years Experience" },
  { value: "10+", label: "Production Features Delivered" },
  { value: "500+", label: "Chrome Extension Users" },
  { value: "4+", label: "Major Product Releases" },
  { value: "V3", label: "Manifest Migration Completed" }
];

const EvolutionPath = () => {
    const containerRef = useRef(null);
    const [activeStage, setActiveStage] = useState(0);

    useGSAP(() => {
        // --- 1. Gentle entrance (plays once, no scrubbed fade-out) ---
        gsap.fromTo(containerRef.current,
            { autoAlpha: 0, y: 60 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    once: true,
                }
            }
        );

        // --- 2. Sequential Unlock (Per Card) ---
        STAGES.forEach((stage, index) => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: `top ${70 - (index * 10)}%`, // Unlock progressively as the section scrolls up
                onEnter: () => setActiveStage((prev) => Math.max(prev, index + 1)),
                onLeaveBack: () => setActiveStage((prev) => Math.min(prev, index)),
            });
        });

    }, { scope: containerRef });

    return (
        <Box 
            id="career"
            ref={containerRef}
            position="relative"
            py={{ base: 16, md: 24 }}
            zIndex={1}
            overflow="hidden"
        >
            <Container maxW="container.xl" position="relative" zIndex={1}>
                <VStack spacing={4} mb={20} textAlign="center">
                    <Text color="brand.400" fontWeight="bold" letterSpacing="widest" fontSize="sm">
                        PROFESSIONAL MILESTONES
                    </Text>
                    <Heading 
                        as="h2" 
                        size="2xl" 
                        color="white"
                        letterSpacing="tight"
                    >
                        Developer Capability Evolution
                    </Heading>
                    <Box w="60px" h="4px" bg="brand.400" borderRadius="full" mt={4} />
                </VStack>

                <SimpleGrid
                    columns={{ base: 2, md: 3, lg: 5 }}
                    spacing={4}
                    mb={16}
                >
                    {STATS.map((stat) => (
                        <VStack
                            key={stat.label}
                            className="glass"
                            p={5}
                            borderRadius="xl"
                            spacing={1}
                            border="1px solid"
                            borderColor="whiteAlpha.100"
                            textAlign="center"
                        >
                            <Text fontSize="2xl" fontWeight="black" color="brand.400" lineHeight="1">
                                {stat.value}
                            </Text>
                            <Text fontSize="xs" color="gray.400" fontWeight="medium">
                                {stat.label}
                            </Text>
                        </VStack>
                    ))}
                </SimpleGrid>

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }} 
                    spacing={8}
                    position="relative"
                >
                    {STAGES.map((s) => {
                        const isActive = activeStage >= s.stage;
                        return (
                            <Box key={s.stage} w="full">
                                <EvolutionCard 
                                    {...s} 
                                    isActive={isActive} 
                                />
                            </Box>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default EvolutionPath;
