import { Box, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuestion } from "react-icons/fa";

const MotionBox = motion(Box);

export default function SkillCard({ name, icon, gameMode = false, onReveal, showHint = false }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasBeenRevealed, setHasBeenRevealed] = useState(false);

  // When gameMode starts, flip all cards to hidden (question mark)
  useEffect(() => {
    if (gameMode) {
      setIsFlipped(true); // Show question mark side
      setHasBeenRevealed(false); // Reset reveal state
    } else {
      setIsFlipped(false); // Show skill side (default)
      setHasBeenRevealed(false);
    }
  }, [gameMode]);

  const handleClick = () => {
    if (gameMode && isFlipped && !hasBeenRevealed) {
      setIsFlipped(false); // Reveal the skill
      setHasBeenRevealed(true);
      if (onReveal) {
        onReveal(); // Notify parent component
      }
    }
  };

  //Show hint pulse for unrevealed cards
  const shouldPulse = showHint && gameMode && isFlipped && !hasBeenRevealed;

  return (
    <Box
      h="150px"
      perspective="1000px"
      cursor={gameMode ? "pointer" : "default"}
      onClick={handleClick}
    >
      <MotionBox
        position="relative"
        w="100%"
        h="100%"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front - The Skill (default visible) */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="gray.800"
          border="2px solid"
          borderColor="gray.700"
          borderRadius="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
          _hover={{
            borderColor: gameMode ? "gray.700" : "#f0d122",
            boxShadow: gameMode ? "0 4px 15px rgba(0, 0, 0, 0.2)" : "0 8px 25px rgba(240, 209, 34, 0.3)",
          }}
          transition="all 0.3s ease"
        >
          <VStack spacing={4}>
            <MotionBox
              fontSize="4xl"
              color="gray.200"
              whileHover={!gameMode ? { scale: 1.2, color: "#f0d122" } : {}}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </MotionBox>
            <Text
              fontSize="md"
              fontWeight="semibold"
              color="white"
              textAlign="center"
            >
              {name}
            </Text>
          </VStack>
        </Box>

        {/* Back - The "Door" (question mark) */}
        <MotionBox
          position="absolute"
          w="100%"
          h="100%"
          bg="gray.800"
          border="2px solid"
          borderColor="#f0d122"
          borderRadius="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          boxShadow="0 4px 15px rgba(240, 209, 34, 0.2)"
          _hover={{
            boxShadow: "0 8px 25px rgba(240, 209, 34, 0.4)",
            borderColor: "#ffd44d",
          }}
          animate={shouldPulse ? {
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 4px 15px rgba(240, 209, 34, 0.2)",
              "0 8px 40px rgba(240, 209, 34, 0.8)",
              "0 4px 15px rgba(240, 209, 34, 0.2)",
            ],
          } : {}}
          transition={{ duration: 0.6, repeat: shouldPulse ? Infinity : 0 }}
        >
          <VStack spacing={2}>
            <Box fontSize="4xl" color="#f0d122">
              <FaQuestion />
            </Box>
            <Text fontSize="xs" color="gray.400" fontWeight="bold">
              CLICK TO REVEAL
            </Text>
          </VStack>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}