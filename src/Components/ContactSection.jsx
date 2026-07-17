import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Input,
  Textarea,
  Button,
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
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ContactSection() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

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
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            background: "#1a202c",
            color: "#fff",
            confirmButtonColor: "#8b5cf6",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.text,
            background: "#1a202c",
            color: "#fff",
          });
        }
      );
    e.target.reset();
  };

  useGSAP(() => {
    gsap.from([formRef.current, infoRef.current], {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  const highlightColor = "brand.400";

  return (
    <Box
      id="contact"
      ref={containerRef}
      bg="gray.900"
      py={32}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          mb={20}
          className="text-gradient"
        >
          Let's Build Something
        </Heading>

        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={16}
          align="stretch"
        >
          {/* Contact Form */}
          <Box 
            ref={formRef} 
            flex={1} 
            className="glass" 
            p={10} 
            borderRadius="3xl"
            border="1px solid"
            borderColor="whiteAlpha.100"
          >
            <form onSubmit={handleOnSubmit}>
              <VStack spacing={8}>
                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.700" fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">Name</FormLabel>
                  <Input
                    name="from_name"
                    placeholder="Your Full Name"
                    bg="whiteAlpha.50"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    color="white"
                    _placeholder={{ color: "gray.600" }}
                    _hover={{ borderColor: highlightColor }}
                    _focus={{
                      borderColor: highlightColor,
                      boxShadow: `0 0 20px rgba(139, 92, 246, 0.2)`,
                      bg: "whiteAlpha.100",
                    }}
                    size="lg"
                    borderRadius="xl"
                    h={14}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.700" fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="yourmail@example.com"
                    bg="whiteAlpha.50"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    color="white"
                    _placeholder={{ color: "gray.600" }}
                    _hover={{ borderColor: highlightColor }}
                    _focus={{
                      borderColor: highlightColor,
                      boxShadow: `0 0 20px rgba(139, 92, 246, 0.2)`,
                      bg: "whiteAlpha.100",
                    }}
                    size="lg"
                    borderRadius="xl"
                    h={14}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="whiteAlpha.700" fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    bg="whiteAlpha.50"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    color="white"
                    _placeholder={{ color: "gray.600" }}
                    _hover={{ borderColor: highlightColor }}
                    _focus={{
                      borderColor: highlightColor,
                      boxShadow: `0 0 20px rgba(139, 92, 246, 0.2)`,
                      bg: "whiteAlpha.100",
                    }}
                    rows={6}
                    size="lg"
                    borderRadius="xl"
                    pt={4}
                  />
                </FormControl>

                <Button
                  type="submit"
                  size="lg"
                  width="100%"
                  bg="brand.400"
                  color="gray.900"
                  h={14}
                  fontWeight="black"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  _hover={{ 
                    transform: "translateY(-3px)", 
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                    bg: "brand.300"
                  }}
                  transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>

          {/* Contact Info */}
          <Box ref={infoRef} flex={0.8}>
            <VStack spacing={12} align="stretch" h="100%" justify="center">
              <Box>
                <Text fontSize="2xl" color="white" mb={4} fontWeight="black" letterSpacing="tight">
                  Let's Connect
                </Text>
                <Text fontSize="lg" color="gray.400" lineHeight="tall">
                  I'm always open to discussing new projects, creative ideas or 
                  opportunities to be part of your visions.
                </Text>
              </Box>

              <VStack align="stretch" spacing={8}>
                <HStack spacing={6}>
                  <Box p={4} borderRadius="2xl" className="glass" border="1px solid" borderColor="whiteAlpha.100">
                    <Icon as={AiOutlineMail} w={6} h={6} color={highlightColor} />
                  </Box>
                  <Box>
                    <Text fontSize="xs" color="gray.500" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">Email Me</Text>
                    <Text color="white" fontSize="lg" fontWeight="semibold">mohite461998@gmail.com</Text>
                  </Box>
                </HStack>

                <HStack spacing={6}>
                  <Box p={4} borderRadius="2xl" className="glass" border="1px solid" borderColor="whiteAlpha.100">
                    <Icon as={FaPhone} w={6} h={6} color={highlightColor} />
                  </Box>
                  <Box>
                    <Text fontSize="xs" color="gray.500" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">Call Me</Text>
                    <Text color="white" fontSize="lg" fontWeight="semibold">+91 8766535472</Text>
                  </Box>
                </HStack>
              </VStack>

              <Box>
                <Text fontSize="sm" color="whiteAlpha.600" mb={6} fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
                  Find me on
                </Text>
                <HStack spacing={6}>
                  {[
                    { icon: AiFillLinkedin, url: "https://www.linkedin.com/in/pravin-mohite-40b56221b/" },
                    { icon: AiOutlineGithub, url: "https://github.com/pravin0428" },
                    { icon: AiOutlineMail, url: "mailto:mohite461998@gmail.com" }
                  ].map((social, i) => (
                    <a key={i} href={social.url} target="_blank" rel="noreferrer">
                      <Box
                        p={5}
                        borderRadius="2xl"
                        className="glass"
                        _hover={{
                          bg: "whiteAlpha.200",
                          transform: "translateY(-5px) rotate(5deg)",
                          color: highlightColor,
                          borderColor: highlightColor,
                        }}
                        transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                        cursor="pointer"
                        border="1px solid"
                        borderColor="whiteAlpha.100"
                      >
                        <Icon as={social.icon} w={7} h={7} color="gray.400" />
                      </Box>
                    </a>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}