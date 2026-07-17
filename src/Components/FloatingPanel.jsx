import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatingPanel = ({ children, id }) => {
  const panelRef = useRef(null);

  useGSAP(() => {
    if (!panelRef.current) return;
    const el = panelRef.current;

    // Gentle entrance only — plays once when the panel scrolls into view
    // and then stays put. No scrubbed fade-out (that was blanking tall
    // sections mid-scroll).
    gsap.fromTo(el,
      { autoAlpha: 0, y: 60, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        }
      }
    );

  }, { scope: panelRef });

  return (
    <Box
      id={id}
      ref={panelRef}
      className="floating-panel glass"
      w="full"
      maxW="container.2xl"
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={{ base: 6, md: 12 }}
      borderRadius="3xl"
      position="relative"
      mb={{ base: 12, md: 20 }} // Comfortable spacing between sections
      style={{
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
      border="1px solid"
      borderColor="whiteAlpha.200"
      boxShadow={`
        0 8px 32px 0 rgba(0, 0, 0, 0.8),
        inset 0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 0 20px rgba(139, 92, 246, 0.05)
      `}
      _hover={{
        borderColor: "brand.400",
        boxShadow: `
            0 0 40px rgba(139, 92, 246, 0.2),
            inset 0 0 30px rgba(139, 92, 246, 0.1)
        `,
      }}
    >
      {children}
    </Box>
  );
};

export default FloatingPanel;
