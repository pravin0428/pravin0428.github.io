import { Link } from "react-scroll";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("gray.900", "gray.900");
  const borderColor = useColorModeValue("gray.700", "gray.700");

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <Box
        bg={bg}
        px={4}
        position="fixed"
        w="100%"
        zIndex={100}
        borderBottom="1px solid"
        borderColor={borderColor}
        boxShadow="sm"
        as="header"
      >
        <Container maxW="container.xl">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            {/* Logo */}
            <Box fontWeight="bold" fontSize="xl" color="brand.400" cursor="pointer">
              <Link
                to="hero"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
              >
                Pravin Mohite
              </Link>
            </Box>

            {/* Desktop Nav */}
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  spy={true}
                  hashSpy={true}
                  offset={-64}
                >
                  <Text
                    cursor="pointer"
                    fontWeight="medium"
                    color="gray.300"
                    _hover={{ color: "brand.400" }}
                    _active={{ color: "brand.400" }}
                    transition="all 0.2s"
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </HStack>

            {/* Right Side (Resume + Mobile Toggle) */}
            <HStack spacing={4}>
              <a
                href="https://drive.google.com/file/d/1mbjKLsqqQWV12ZTEy7g5OMC-pFPPujRf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "contents" }}
              >
                <Button
                  size="sm"
                  variant="solid"
                  display={{ base: "none", md: "flex" }}
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
            <Box pb={4} display={{ md: "none" }}>
              <Stack as="nav" spacing={4}>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={800}
                    spy={true}
                    hashSpy={true}
                    offset={-64}
                    onClick={onClose}
                  >
                    <Text
                      cursor="pointer"
                      fontWeight="medium"
                      color="gray.300"
                      _hover={{ color: "brand.400" }}
                      py={2}
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
    </>
  );
}

export default Navbar;
