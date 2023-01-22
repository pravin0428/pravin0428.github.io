import { Link } from "react-scroll";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("#35383d", "#35383d")}
        px={4}
        bgPos={"center"}
        bgSize="cover"
        pos="fixed"
        w="100%"
        zIndex={1}
        color="#f0d122"
        borderBottom="1px solid white"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"90%"}
          margin="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link
                to="hero"
                smooth={true}
                duration={1000}
                spy={true}
                hashSpy={true}
                // activeClass={styles.active}
              >
                <div>Home</div>
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                to="about"
                smooth={true}
                duration={1000}
                //  activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div>About</div>
              </Link>

              <Link
                to="skills"
                smooth={true}
                duration={1000}
                // activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div>Skills</div>
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={1000}
                // activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div>Projects</div>
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={1000}
                // activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div>Contact</div>
              </Link>

              <a
                href="https://drive.google.com/file/d/1mbjKLsqqQWV12ZTEy7g5OMC-pFPPujRf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>Resume</div>
              </a>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={"p_image.jpeg"} />
              </MenuButton>
              {/* <MenuList>
                 <MenuItem   >Link 1</MenuItem>   
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}

            //  border="2px solid green"
          >
            <Stack
              as={"nav"}
              spacing={4}
              //  border="3px solid yellow"
            >
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                // activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div>Skills</div>
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={1000}
                // activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div>Projects</div>
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={1000}
                // activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div>Contact</div>
              </Link>

              <a
                href="https://drive.google.com/file/d/1mbjKLsqqQWV12ZTEy7g5OMC-pFPPujRf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>Resume</div>
              </a>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={10}></Box>
    </>
  );
}

export default Navbar;
