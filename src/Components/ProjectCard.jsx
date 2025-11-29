import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Flex,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function ProjectCard({
  name,
  img,
  git,
  link,
  stacks,
  about,
  duration,
  status,
}) {
  const highlightColor = useColorModeValue("brand.400", "brand.400");

  return (
    <Box
      bg="gray.800"
      border="1px solid"
      borderColor="gray.700"
      borderRadius="xl"
      overflow="hidden"
      transition="all 0.4s ease"
      _hover={{
        transform: "translateY(-8px)",
        borderColor: highlightColor,
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(240, 209, 34, 0.3)`,
      }}
      display="flex"
      flexDirection="column"
      h="100%"
    >
      <Box position="relative" overflow="hidden" bg="gray.900">
        <Image
          src={img}
          alt={name}
          w="100%"
          h="200px"
          objectFit="cover"
          transition="transform 0.4s ease"
          _hover={{ transform: "scale(1.1)" }}
        />
        <Box
          position="absolute"
          top={2}
          right={2}
          bg="rgba(0,0,0,0.8)"
          color="white"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
          fontWeight="bold"
          border="1px solid"
          borderColor="gray.700"
        >
          {status}
        </Box>
      </Box>

      <Stack p={6} spacing={4} flex={1}>
        <Flex justify="space-between" align="center">
          <Heading as="h3" size="md" noOfLines={1} color="white">
            {name}
          </Heading>
          <Badge
            colorScheme="yellow"
            variant="solid"
            px={2}
            py={1}
            borderRadius="md"
          >
            {duration}
          </Badge>
        </Flex>

        <Text fontSize="sm" color="gray.300" noOfLines={3} lineHeight="tall">
          {about}
        </Text>

        <HStack spacing={3} wrap="wrap" pt={2}>
          {stacks.map((stack, index) => (
            <Box
              key={index}
              color="gray.400"
              fontSize="2xl"
              transition="all 0.2s ease"
              _hover={{ color: highlightColor, transform: "scale(1.2)" }}
            >
              {stack}
            </Box>
          ))}
        </HStack>

        <Box flex={1} />

        <HStack spacing={4} pt={4}>
          <Button
            as="a"
            href={git}
            target="_blank"
            rel="noreferrer"
            leftIcon={<FaGithub />}
            variant="outline"
            size="sm"
            flex={1}
            borderColor="gray.600"
            color="white"
            _hover={{
              bg: "gray.700",
              borderColor: highlightColor,
              transform: "translateY(-2px)",
            }}
          >
            Code
          </Button>
          <Button
            as="a"
            href={link}
            target="_blank"
            rel="noreferrer"
            leftIcon={<FaExternalLinkAlt />}
            variant="solid"
            size="sm"
            flex={1}
            boxShadow="0 4px 14px 0 rgba(240, 209, 34, 0.25)"
          >
            Demo
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
}