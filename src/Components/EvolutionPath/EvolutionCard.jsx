import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon
} from "@chakra-ui/react";

const EvolutionCard = ({ year, emoji, title, description, skills, skillsLabel, isActive, icon: StageIcon }) => {
  return (
    <Box
      className="evolution-card glass"
      p={8}
      borderRadius="2xl"
      w="full"
      position="relative"
      border="1px solid"
      borderColor={isActive ? "brand.400" : "whiteAlpha.100"}
      opacity={isActive ? 1 : 0.4}
      transform={isActive ? "scale(1.02)" : "scale(0.95)"}
      transition="all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      boxShadow={isActive ? "0 0 40px rgba(139, 92, 246, 0.15)" : "none"}
      backdropFilter="blur(16px)"
      filter={isActive ? "none" : "grayscale(80%)"}
      cursor={isActive ? "default" : "pointer"}
      _hover={isActive ? {} : {
        opacity: 1,
        transform: "scale(1)",
        filter: "none",
        borderColor: "brand.400",
        boxShadow: "0 0 40px rgba(139, 92, 246, 0.15)"
      }}
    >
      {/* Achievement Unlocked Badge */}
      {isActive && (
        <Box
          position="absolute"
          top="-15px"
          right="20px"
          bg="brand.400"
          color="gray.900"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
          fontWeight="black"
          letterSpacing="tighter"
          boxShadow="0 4px 15px rgba(240, 209, 34, 0.5)"
          animation="popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          zIndex={10}
        >
          CAPABILITY UNLOCKED
        </Box>
      )}

      <VStack align="start" spacing={5}>
        <HStack w="full" justify="space-between" align="center">
          <Box>
            <Text fontSize="xs" fontWeight="bold" color="brand.400" letterSpacing="widest" mb={1}>
              {emoji} {year}
            </Text>
            <Heading as="h3" size="md" color="white">
              {title}
            </Heading>
          </Box>
          <Icon as={StageIcon} w={8} h={8} color={isActive ? "brand.400" : "whiteAlpha.400"} />
        </HStack>

        <Text color="gray.400" fontSize="sm" lineHeight="tall">
          {description}
        </Text>

        <Box
            p={4}
            bg="whiteAlpha.100"
            borderRadius="xl"
            w="full"
            borderLeft="4px solid"
            borderColor={isActive ? "brand.400" : "whiteAlpha.300"}
        >
            <Text fontSize="sm" fontWeight="bold" color="whiteAlpha.700" mb={3}>
                {skillsLabel}
            </Text>
            <VStack align="start" spacing={2}>
                {skills.map((skill, index) => (
                    <HStack key={index} align="start" spacing={2}>
                        <Box
                            as="span"
                            mt="6px"
                            w="6px"
                            h="6px"
                            borderRadius="full"
                            flexShrink={0}
                            bg={isActive ? "brand.400" : "whiteAlpha.400"}
                        />
                        <Text fontSize="sm" color="white" lineHeight="short">
                            {skill}
                        </Text>
                    </HStack>
                ))}
            </VStack>
        </Box>
      </VStack>

      <style jsx>{`
        @keyframes popIn {
            0% { transform: scale(0) translateY(20px); opacity: 0; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </Box>
  );
};

export default EvolutionCard;
