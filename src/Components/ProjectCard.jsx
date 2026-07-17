import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  const cardRef = useRef(null);
  const highlightColor = "brand.400";

  useGSAP(() => {
    const card = cardRef.current;
    
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      gsap.to(card, {
        rotationY: x * 15,
        rotationX: -y * 15,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.5,
      });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        ease: "power2.out",
        duration: 0.5,
      });
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, { scope: cardRef });

  return (
    <Box
      ref={cardRef}
      h="100%"
      className="glass project-card"
      borderRadius="2xl"
      overflow="hidden"
      border="1px solid"
      borderColor="whiteAlpha.100"
      display="flex"
      flexDirection="column"
      transition="border-color 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        borderColor: "brand.400",
        boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)",
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Box position="relative" overflow="hidden" h="220px">
        <Image
          src={img}
          alt={name}
          w="100%"
          h="100%"
          objectFit="cover"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.1)" }}
        />
        <Box
          position="absolute"
          top={4}
          right={4}
          bg="rgba(0,0,0,0.7)"
          backdropFilter="blur(8px)"
          color="white"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
          fontWeight="bold"
          border="1px solid"
          borderColor="whiteAlpha.200"
        >
          {status}
        </Box>
      </Box>

      <Stack p={6} spacing={5} flex={1}>
        <Flex justify="space-between" align="center">
          <Heading as="h3" size="md" color="white" letterSpacing="tight">
            {name}
          </Heading>
          <Badge
            bg="brand.400"
            color="gray.900"
            px={2}
            py={1}
            borderRadius="md"
            fontSize="2xs"
            fontWeight="black"
          >
            {duration}
          </Badge>
        </Flex>

        <Text fontSize="sm" color="gray.400" lineHeight="tall" noOfLines={3}>
          {about}
        </Text>

        <HStack spacing={4} pt={2}>
          {stacks.map((stack, index) => (
            <Box
              key={index}
              color="gray.500"
              fontSize="xl"
              _hover={{ color: "brand.400", transform: "scale(1.2)" }}
              transition="all 0.2s ease"
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
            variant="ghost"
            size="md"
            flex={1}
            color="whiteAlpha.700"
            border="1px solid"
            borderColor="whiteAlpha.100"
            _hover={{
              bg: "whiteAlpha.100",
              color: "brand.400",
              borderColor: "brand.400",
            }}
          >
            Github
          </Button>
          <Button
            as="a"
            href={link}
            target="_blank"
            rel="noreferrer"
            leftIcon={<FaExternalLinkAlt />}
            bg="brand.400"
            color="gray.900"
            size="md"
            flex={1}
            _hover={{
              bg: "brand.300",
              transform: "translateY(-2px)",
              boxShadow: "0 10px 20px rgba(139, 92, 246, 0.4)",
            }}
          >
            Launch
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
}