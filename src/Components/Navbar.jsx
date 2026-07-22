import { Link } from "react-scroll";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 1.5, // Appear after hero entrance start
    });
  }, { scope: navRef });

  return (
    <Box
      ref={navRef}
      px={4}
      position="fixed"
      w="100%"
      zIndex={100}
      as="header"
      className="glass"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="container.xl">
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          {/* Logo */}
          <Box 
            fontWeight="black" 
            fontSize="2xl" 
            color="white" 
            cursor="pointer"
            letterSpacing="tight"
          >
            <Link to="hero" smooth={true} duration={1000} spy={true}>
              PM<Text as="span" color="brand.400">.</Text>
            </Link>
          </Box>

          {/* Desktop Nav */}
          <HStack spacing={10} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Box key={link.to} position="relative" role="group">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-80}
                  activeClass="nav-active"
                >
                  <Text
                    cursor="pointer"
                    fontWeight="semibold"
                    fontSize="sm"
                    color="whiteAlpha.700"
                    _groupHover={{ color: "white" }}
                    transition="all 0.3s"
                    textTransform="uppercase"
                    letterSpacing="widest"
                  >
                    {link.name}
                  </Text>
                  <Box
                    position="absolute"
                    bottom="-4px"
                    left="0"
                    width="0"
                    height="2px"
                    bg="brand.400"
                    transition="width 0.3s ease"
                    _groupHover={{ width: "100%" }}
                  />
                </Link>
              </Box>
            ))}
          </HStack>

          {/* Right Side (Resume + Mobile Toggle) */}
          <HStack spacing={4}>
            <a
              href="/Pravin-Mohite-Resume.pdf"
              download="Pravin-Mohite-Resume.pdf"
            >
              <Button
                size="md"
                variant="solid"
                bg="brand.400"
                color="gray.900"
                display={{ base: "none", md: "flex" }}
                px={6}
                _hover={{
                  bg: "brand.300",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
                }}
              >
                Resume
              </Button>
            </a>

            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Toggle Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
            />
          </HStack>
        </Flex>

        {/* Mobile Nav */}
        {isOpen ? (
          <Box pb={8} display={{ md: "none" }} className="glass" mt={2} borderRadius="xl" p={4}>
            <Stack as="nav" spacing={6}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-80}
                  onClick={onClose}
                >
                  <Text
                    cursor="pointer"
                    fontWeight="bold"
                    color="whiteAlpha.800"
                    _hover={{ color: "brand.400" }}
                    fontSize="lg"
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}

export default Navbar;
