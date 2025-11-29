import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Button,
  VStack,
  HStack,
  Text,
  Progress,
  Badge,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMaterialui,
  SiChakraui,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiNpm,
  SiPostman,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaChrome, FaCode, FaMagic, FaTrophy, FaRedo, FaLightbulb } from "react-icons/fa";
import SkillCard from "./SkillCard";
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from "./AnimationWrappers";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const skillsData = {
  frontend: [
    { name: "React", icon: <SiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Next.js", icon: <TbBrandNextjs /> },
    { name: "Chakra UI", icon: <SiChakraui /> },
    { name: "Material UI", icon: <SiMaterialui /> },
    { name: "XML", icon: <FaCode /> },
  ],
  backend: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Chrome Ext.", icon: <FaChrome /> },
  ],
  tools: [
    { name: "Git", icon: <SiGit /> },
    { name: "NPM", icon: <SiNpm /> },
    { name: "Postman", icon: <SiPostman /> },
  ],
};

const MotionBox = motion(Box);

const DIFFICULTY_LEVELS = {
  easy: {
    name: "Easy",
    color: "#4ade80",
    chaos: false,
    shuffle: false,
  },
  medium: {
    name: "Medium",
    color: "#fbbf24",
    chaos: "light",
    shuffle: false,
  },
  hard: {
    name: "Hard",
    color: "#ef4444",
    chaos: true,
    shuffle: true,
  },
};

export function SkillsSection() {
  const highlightColor = useColorModeValue("brand.400", "brand.400");
  const [gameMode, setGameMode] = useState(null); // 'easy', 'medium', 'hard' or null
  const [revealedCount, setRevealedCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const timerRef = useRef(null);

  const allSkills = [
    ...skillsData.frontend,
    ...skillsData.backend,
    ...skillsData.tools,
  ];
  const totalSkills = allSkills.length;

  // Timer effect
  useEffect(() => {
    if (isGameActive && revealedCount < totalSkills) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 0.1);
      }, 100);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isGameActive, revealedCount, totalSkills]);

  // Check for completion
  useEffect(() => {
    if (isGameActive && revealedCount === totalSkills) {
      setShowConfetti(true);
      setIsGameActive(false);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [revealedCount, totalSkills, isGameActive]);

  const startGame = (difficulty) => {
    setGameMode(difficulty);
    setRevealedCount(0);
    setTimer(0);
    setShowHint(false);
    // Set chaos flag based on difficulty
    const isChaos = DIFFICULTY_LEVELS[difficulty].chaos;
    // Easy and Medium start immediately, Hard waits for chaos animation
    if (difficulty === "hard") {
      setTimeout(() => {
        setIsGameActive(true);
      }, 3000);
    } else {
      setIsGameActive(true);
    }
  };

  const resetGame = () => {
    setGameMode(null);
    setIsGameActive(false);
    setRevealedCount(0);
    setTimer(0);
    setShowConfetti(false);
    setShowHint(false);
  };

  const handleCardReveal = () => {
    // Increment count whenever a card is revealed in any active game mode
    if (gameMode) {
      setRevealedCount((prev) => prev + 1);
    }
  };

  const triggerHint = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 2000); // Hint lasts 2 seconds
  };

  const getChaosAnimation = (difficulty) => {
    if (!gameMode || !DIFFICULTY_LEVELS[difficulty].chaos) {
      return { x: 0, y: 0, rotate: 0, scale: 1 };
    }

    if (difficulty === "medium") {
      return {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        rotate: Math.random() * 90 - 45,
        scale: Math.random() * 0.3 + 0.9,
      };
    }

    // Hard mode
    return {
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
      rotate: Math.random() * 720 - 360,
      scale: Math.random() * 1.5 + 0.5,
    };
  };

  const renderCategory = (title, skills, categoryIndex) => (
    <FadeInWhenVisible key={title}>
      <Box mb={12}>
        <Heading as="h3" size="lg" mb={8} borderLeft="4px solid" borderColor={highlightColor} pl={4}>
          {title}
        </Heading>
        <StaggerContainer staggerDelay={0.08}>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={6}>
            {skills.map((skill, index) => (
              <StaggerItem key={index}>
                <MotionBox
                  animate={
                    gameMode && DIFFICULTY_LEVELS[gameMode].chaos
                      ? getChaosAnimation(gameMode)
                      : { x: 0, y: 0, rotate: 0, scale: 1 }
                  }
                  transition={{
                    duration: gameMode ? 0.8 : 1.2,
                    type: "spring",
                    stiffness: gameMode ? 200 : 80,
                    damping: gameMode ? 10 : 15,
                  }}
                >
                  <SkillCard
                    name={skill.name}
                    icon={skill.icon}
                    gameMode={!!gameMode}
                    onReveal={handleCardReveal}
                    showHint={showHint}
                  />
                </MotionBox>
              </StaggerItem>
            ))}
          </SimpleGrid>
        </StaggerContainer>
      </Box>
    </FadeInWhenVisible>
  );

  return (
    <Box
      id="skills"
      bg="gray.900"
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
        background: "radial-gradient(circle at 20% 80%, rgba(240, 209, 34, 0.08) 0%, transparent 50%)",
        zIndex: 0,
      }}
    >
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <FadeInWhenVisible>
          <VStack spacing={6} mb={16}>
            <Heading
              as="h2"
              size="2xl"
              textAlign="center"
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
              Technical Skills
            </Heading>

            {/* Game Stats */}
            {isGameActive && (
              <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                w="full"
                maxW="500px"
                bg="gray.800"
                p={6}
                borderRadius="xl"
                border="2px solid"
                borderColor="#f0d122"
                boxShadow="0 4px 20px rgba(240, 209, 34, 0.3)"
              >
                <VStack spacing={4}>
                  <HStack justify="space-between" w="full">
                    <Text color="white" fontWeight="bold" fontSize="lg">
                      ⏱️ Time: {timer.toFixed(1)}s
                    </Text>
                    <Text color="#f0d122" fontWeight="bold" fontSize="lg">
                      {revealedCount}/{totalSkills} Revealed
                    </Text>
                  </HStack>
                  <Progress
                    value={(revealedCount / totalSkills) * 100}
                    w="full"
                    colorScheme="yellow"
                    bg="gray.700"
                    borderRadius="full"
                    h="8px"
                  />

                  {/* Hint Button */}
                  <Button
                    leftIcon={<FaLightbulb />}
                    onClick={triggerHint}
                    size="sm"
                    bg="gray.700"
                    color="#f0d122"
                    _hover={{ bg: "gray.600" }}
                  >
                    Show Unrevealed Cards (2s)
                  </Button>
                </VStack>
              </MotionBox>
            )}

            {/* Achievement Badge */}
            {revealedCount === totalSkills && gameMode && (
              <MotionBox
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Badge
                  fontSize="xl"
                  p={4}
                  bg="#f0d122"
                  color="gray.900"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  boxShadow="0 8px 30px rgba(240, 209, 34, 0.5)"
                >
                  <FaTrophy /> All Skills Mastered in {timer.toFixed(1)}s! 🎉
                </Badge>
              </MotionBox>
            )}

            {/* Difficulty Selection or Reset */}
            {!gameMode ? (
              <VStack spacing={4}>
                <Text color="gray.400" fontSize="sm" textAlign="center">
                  Play with Visuals
                </Text>
                <ButtonGroup spacing={4}>
                  <Button
                    onClick={() => startGame("easy")}
                    bg="#4ade80"
                    color="white"
                    size="lg"
                    fontWeight="bold"
                    _hover={{
                      bg: "#22c55e",
                      transform: "scale(1.05)",
                    }}
                    transition="all 0.3s ease"
                  >
                    😊 Easy
                  </Button>
                  <Button
                    onClick={() => startGame("medium")}
                    bg="#fbbf24"
                    color="gray.900"
                    size="lg"
                    fontWeight="bold"
                    _hover={{
                      bg: "#f59e0b",
                      transform: "scale(1.05)",
                    }}
                    transition="all 0.3s ease"
                  >
                    😎 Medium
                  </Button>
                  <Button
                    onClick={() => startGame("hard")}
                    bg="#ef4444"
                    color="white"
                    size="lg"
                    fontWeight="bold"
                    _hover={{
                      bg: "#dc2626",
                      transform: "scale(1.05)",
                    }}
                    transition="all 0.3s ease"
                  >
                    🔥 Hard
                  </Button>
                </ButtonGroup>
                <Text color="gray.500" fontSize="xs" textAlign="center" maxW="400px">
                  <strong>Easy:</strong> Cards stay in place<br />
                  <strong>Medium:</strong> Light shuffle<br />
                  <strong>Hard:</strong> Full chaos!
                </Text>
              </VStack>
            ) : (
              <Button
                leftIcon={<FaRedo />}
                onClick={resetGame}
                bg="gray.700"
                color="white"
                size="lg"
                fontWeight="bold"
                _hover={{
                  bg: "gray.600",
                  transform: "scale(1.05)",
                }}
                transition="all 0.3s ease"
              >
                Reset Game
              </Button>
            )}
          </VStack>
        </FadeInWhenVisible>

        {renderCategory("Front-End Development", skillsData.frontend, 0)}
        {renderCategory("Back-End Development", skillsData.backend, 1)}
        {renderCategory("Tools & Others", skillsData.tools, 2)}
      </Container>
    </Box>
  );
}

export default SkillsSection;
