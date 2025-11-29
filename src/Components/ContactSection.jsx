import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  HStack,
  VStack,
  Icon,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Fade from "react-reveal/Fade";

export function ContactSection() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_908gdqf",
        "template_b76n9pd",
        e.target,
        "KcOBkDiI9xi5b_JZM"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  const textColor = useColorModeValue("gray.300", "gray.300");
  const highlightColor = useColorModeValue("brand.400", "brand.400");
  const inputBg = useColorModeValue("gray.800", "gray.800");
  const inputBorder = useColorModeValue("gray.700", "gray.700");

  return (
    <Box
      id="contact"
      bg="gray.900"
      py={20}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Fade bottom>
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            mb={16}
            color="white"
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
            Get In Touch
          </Heading>

          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={12}
            align="stretch"
          >
            {/* Contact Form */}
            <Box flex={1}>
              <form onSubmit={handleOnSubmit}>
                <VStack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel color="white">Name</FormLabel>
                    <Input
                      name="from_name"
                      placeholder="Your name"
                      bg={inputBg}
                      border="1px solid"
                      borderColor={inputBorder}
                      color="white"
                      _placeholder={{ color: "gray.500" }}
                      _hover={{ borderColor: highlightColor }}
                      _focus={{
                        borderColor: highlightColor,
                        boxShadow: `0 0 0 1px ${highlightColor}`,
                      }}
                      size="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="white">Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      bg={inputBg}
                      border="1px solid"
                      borderColor={inputBorder}
                      color="white"
                      _placeholder={{ color: "gray.500" }}
                      _hover={{ borderColor: highlightColor }}
                      _focus={{
                        borderColor: highlightColor,
                        boxShadow: `0 0 0 1px ${highlightColor}`,
                      }}
                      size="lg"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="white">Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      bg={inputBg}
                      border="1px solid"
                      borderColor={inputBorder}
                      color="white"
                      _placeholder={{ color: "gray.500" }}
                      _hover={{ borderColor: highlightColor }}
                      _focus={{
                        borderColor: highlightColor,
                        boxShadow: `0 0 0 1px ${highlightColor}`,
                      }}
                      rows={6}
                      size="lg"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    size="lg"
                    width="100%"
                    variant="solid"
                    _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
                    transition="all 0.3s ease"
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>

            {/* Contact Info */}
            <Box flex={1}>
              <VStack spacing={8} align="stretch" h="100%" justify="center">
                <Box>
                  <Text fontSize="xl" color="white" mb={4} fontWeight="bold">
                    Let's Connect
                  </Text>
                  <Text fontSize="md" color={textColor} lineHeight="tall">
                    Did you enjoy my work? Want to get in touch? Feel free to
                    reach out to me through any of the channels below.
                  </Text>
                </Box>

                <VStack align="stretch" spacing={4}>
                  <HStack spacing={4}>
                    <Icon
                      as={AiOutlineMail}
                      w={6}
                      h={6}
                      color={highlightColor}
                    />
                    <Box>
                      <Text fontSize="sm" color="gray.500">
                        Email
                      </Text>
                      <Text color="white" fontSize="md">
                        mohite461998@gmail.com
                      </Text>
                    </Box>
                  </HStack>

                  <HStack spacing={4}>
                    <Icon as={FaPhone} w={6} h={6} color={highlightColor} />
                    <Box>
                      <Text fontSize="sm" color="gray.500">
                        Phone
                      </Text>
                      <Text color="white" fontSize="md">
                        +91 8766535472
                      </Text>
                    </Box>
                  </HStack>
                </VStack>

                <Box>
                  <Text fontSize="md" color="white" mb={4} fontWeight="bold">
                    Social Media
                  </Text>
                  <HStack spacing={6}>
                    <a
                      href="https://www.linkedin.com/in/pravin-mohite-40b56221b/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon
                        as={AiFillLinkedin}
                        w={8}
                        h={8}
                        color="gray.400"
                        _hover={{ color: highlightColor, transform: "scale(1.1)" }}
                        transition="all 0.2s"
                        cursor="pointer"
                      />
                    </a>
                    <a
                      href="https://github.com/pravin0428"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon
                        as={AiOutlineGithub}
                        w={8}
                        h={8}
                        color="gray.400"
                        _hover={{ color: highlightColor, transform: "scale(1.1)" }}
                        transition="all 0.2s"
                        cursor="pointer"
                      />
                    </a>
                    <a href="mailto:mohite461998@gmail.com">
                      <Icon
                        as={AiOutlineMail}
                        w={8}
                        h={8}
                        color="gray.400"
                        _hover={{ color: highlightColor, transform: "scale(1.1)" }}
                        transition="all 0.2s"
                        cursor="pointer"
                      />
                    </a>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Stack>
        </Fade>
      </Container>
    </Box>
  );
}