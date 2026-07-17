import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const onMouseMove = (e) => {
      // Main glowing ring with lag (trailing)
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
      // Center dot (no lag)
      gsap.set(dot, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    const onMouseEnterLink = () => {
      setIsHovering(true);
      gsap.to(cursor, { 
        scale: 2, 
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        borderColor: "rgba(139, 92, 246, 0.8)",
        duration: 0.3 
      });
      gsap.to(dot, { scale: 0, duration: 0.3 });
    };

    const onMouseLeaveLink = () => {
      setIsHovering(false);
      gsap.to(cursor, { 
        scale: 1, 
        backgroundColor: "transparent",
        borderColor: "rgba(139, 92, 246, 0.4)",
        duration: 0.3 
      });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Glowing Ring */}
      <Box
        ref={cursorRef}
        position="fixed"
        top={0}
        left={0}
        w="40px"
        h="40px"
        borderRadius="full"
        border="1px solid"
        borderColor="rgba(139, 92, 246, 0.4)"
        pointerEvents="none"
        zIndex={9999}
        transform="translate(-50%, -50%)"
        mixBlendMode="screen"
        style={{
          boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
          backdropFilter: "blur(2px)",
        }}
      />
      {/* Center Dot */}
      <Box
        ref={dotRef}
        position="fixed"
        top={0}
        left={0}
        w="6px"
        h="6px"
        borderRadius="full"
        bg="brand.400"
        pointerEvents="none"
        zIndex={9999}
        transform="translate(-50%, -50%)"
        style={{
            boxShadow: "0 0 10px rgba(139, 92, 246, 0.8)",
        }}
      />
    </>
  );
};

export default CustomCursor;
