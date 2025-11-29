import { Box } from "@chakra-ui/react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <Box
            as={motion.div}
            position="fixed"
            top={0}
            left={0}
            right={0}
            height="3px"
            bg="brand.400"
            transformOrigin="0%"
            style={{ scaleX }}
            zIndex={9999}
            boxShadow="0 0 10px rgba(240, 209, 34, 0.5)"
        />
    );
}
