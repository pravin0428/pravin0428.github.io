import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { RiDownloadLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export function HeroSection() {
  const textColor = useColorModeValue("gray.300", "gray.300");
  const highlightColor = useColorModeValue("brand.400", "brand.400");

  return (
    <Box
      id="hero"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      pt={16}
      overflow="hidden"
      bg="gray.900"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(240, 209, 34, 0.1) 0%, transparent 50%)",
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Fade bottom>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={10}
          >
            <Box flex={1} textAlign={{ base: "center", md: "left" }}>
              <Text
                color={highlightColor}
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
                mb={4}
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Hello, I'm
              </Text>

              <Heading
                as="h1"
                fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                fontWeight="black"
                mb={4}
                lineHeight="shorter"
                bgGradient="linear(to-r, white, gray.300)"
                bgClip="text"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: { base: "50%", md: "0" },
                  transform: { base: "translateX(-50%)", md: "none" },
                  width: "100px",
                  height: "4px",
                  background: "linear-gradient(90deg, #f0d122 0%, #ffd44d 100%)",
                  borderRadius: "full",
                }}
              >
                Pravin Mohite
              </Heading>

              <Heading
                as="h2"
                size="xl"
                bgGradient="linear(to-r, brand.400, brand.200)"
                bgClip="text"
                mb={6}
                fontWeight="bold"
              >
                Full Stack Web Developer
              </Heading>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={textColor}
                maxW="600px"
                mb={8}
                mx={{ base: "auto", md: "0" }}
                lineHeight="tall"
              >
                Building digital experiences that matter. I create responsive,
                performant, and user-friendly web applications with modern
                technologies.
              </Text>

              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                justify={{ base: "center", md: "flex-start" }}
                align="center"
              >
                <a
                  href="https://drive.google.com/file/d/1mbjKLsqqQWV12ZTEy7g5OMC-pFPPujRf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    rightIcon={<RiDownloadLine />}
                    variant="solid"
                    boxShadow="0 4px 14px 0 rgba(240, 209, 34, 0.39)"
                    _hover={{
                      boxShadow: "0 6px 20px rgba(240, 209, 34, 0.5)",
                    }}
                  >
                    Download Resume
                  </Button>
                </a>

                <Stack direction="row" spacing={4}>
                  <a
                    href="https://www.linkedin.com/in/pravin-mohite-40b56221b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Box
                      as="span"
                      display="inline-block"
                      p={3}
                      borderRadius="lg"
                      bg="whiteAlpha.100"
                      backdropFilter="blur(10px)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{
                        bg: "whiteAlpha.200",
                        transform: "translateY(-2px)",
                        borderColor: highlightColor,
                      }}
                      transition="all 0.3s ease"
                      cursor="pointer"
                    >
                      <Icon
                        as={AiFillLinkedin}
                        w={6}
                        h={6}
                        color="gray.300"
                        _hover={{ color: highlightColor }}
                      />
                    </Box>
                  </a>
                  <a
                    href="https://github.com/pravin0428"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Box
                      as="span"
                      display="inline-block"
                      p={3}
                      borderRadius="lg"
                      bg="whiteAlpha.100"
                      backdropFilter="blur(10px)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{
                        bg: "whiteAlpha.200",
                        transform: "translateY(-2px)",
                        borderColor: highlightColor,
                      }}
                      transition="all 0.3s ease"
                      cursor="pointer"
                    >
                      <Icon
                        as={AiOutlineGithub}
                        w={6}
                        h={6}
                        color="gray.300"
                        _hover={{ color: highlightColor }}
                      />
                    </Box>
                  </a>
                </Stack>
              </Stack>
            </Box>

            {/* Decorative element */}
            <Box
              flex={1}
              display={{ base: "none", lg: "block" }}
              position="relative"
            >
              <Box
                w="400px"
                h="400px"
                borderRadius="full"
                bg="transparent"
                border="2px solid"
                borderColor="whiteAlpha.100"
                position="relative"
                animation={`${float} 6s ease-in-out infinite`}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "300px",
                  height: "300px",
                  borderRadius: "full",
                  background: "radial-gradient(circle, rgba(240, 209, 34, 0.1) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
            </Box>
          </Flex>
        </Fade>
      </Container>
    </Box>
  );
}