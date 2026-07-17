import { Box, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function SkillCard({ name, icon, color = "#f0d122" }) {
  return (
    <MotionBox
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      h="150px"
      p={4}
      bg="gray.800"
      border="2px solid"
      borderColor="gray.700"
      borderRadius="xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="default"
      role="group"
      boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
      _hover={{
        borderColor: color,
        boxShadow: `0 10px 30px ${color}33`,
      }}
      sx={{ transition: "border-color 0.3s ease, box-shadow 0.3s ease" }}
    >
      <VStack spacing={4}>
        <Box
          fontSize="4xl"
          color={color}
          lineHeight="1"
          _groupHover={{
            transform: "scale(1.15)",
            filter: `drop-shadow(0 0 12px ${color}88)`,
          }}
          sx={{ transition: "transform 0.3s ease, filter 0.3s ease" }}
        >
          {icon}
        </Box>
        <Text fontSize="md" fontWeight="semibold" color="white" textAlign="center">
          {name}
        </Text>
      </VStack>
    </MotionBox>
  );
}
