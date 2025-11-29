import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const experiences = [
  {
    name: "Tratoli TMC",
    location: "Mumbai",
    logo: "tratoli.svg",
    role: "Front End Software Developer",
    period: "Mar 2023 - Jan 2024",
    responsibilities: [
      "Fixed bugs and maintained clean code for tratoli.com",
      "Developed UI of tratoli.com using Figma",
      "Deployed updates on Azure staging platform",
    ],
  },
  {
    name: "Clodura.AI",
    location: "Pune",
    logo: "Clo_Logo.png",
    role: "Associate Software Developer",
    period: "Feb 2024 - Present",
    responsibilities: [
      "Handling chrome extension of clodura.ai",
      "Implementing new features and product improvements",
      "Maintaining application compatibility and solving bugs",
    ],
  },
];

export default function ExperienceSlider() {
  const textColor = useColorModeValue("gray.300", "gray.300");
  const highlightColor = useColorModeValue("brand.400", "brand.400");
  const animation = `${scroll} 40s linear infinite`;

  return (
    <Box
      bg="gray.900"
      py={20}
      overflow="hidden"
      id="experience"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(240, 209, 34, 0.05) 0%, transparent 50%)",
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl" mb={8} position="relative" zIndex={1}>
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
          Professional Experience
        </Heading>

        <Box position="relative" w="100%" overflow="hidden" py={4} minH="400px">
          <Flex
            w="max-content"
            animation={animation}
            gap={8}
            _hover={{ animationPlayState: "paused" }}
          >
            {experiences.concat(experiences).concat(experiences).map((exp, index) => (
              <Box
                key={index}
                bg="gray.800"
                p={6}
                borderRadius="xl"
                boxShadow="lg"
                w={{ base: "300px", md: "450px" }}
                flexShrink={0}
                overflow="hidden"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(240, 209, 34, 0.4)`,
                  borderColor: "brand.400",
                }}
                border="2px solid"
                borderColor="gray.700"
              >
                <Flex align="center" mb={4} gap={4}>
                  <Box
                    p={2}
                    bg="white"
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.200"
                  >
                    <Image
                      src={exp.logo}
                      alt={exp.name}
                      h="50px"
                      w="auto"
                      objectFit="contain"
                    />
                  </Box>
                  <Box>
                    <Heading as="h3" size="md" mb={1}>
                      {exp.name}
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      {exp.location}
                    </Text>
                  </Box>
                </Flex>

                <Text
                  fontWeight="bold"
                  color={highlightColor}
                  mb={2}
                  fontSize="sm"
                >
                  {exp.role} | {exp.period}
                </Text>

                <UnorderedList spacing={2} pl={4}>
                  {exp.responsibilities.map((item, i) => (
                    <ListItem key={i} fontSize="sm" color={textColor}>
                      {item}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
