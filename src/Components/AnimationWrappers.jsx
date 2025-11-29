import { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export function FadeInWhenVisible({ children, delay = 0, direction = "up" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
    const controls = useAnimation();

    const directions = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 },
    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, ...directions[direction] },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay,
                        ease: [0.25, 0.1, 0.25, 1],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, staggerDelay = 0.1 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, direction = "up" }) {
    const directions = {
        up: { y: 30 },
        down: { y: -30 },
        left: { x: 30 },
        right: { x: -30 },
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, ...directions[direction] },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function RollingCubeItem({ children }) {
    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    scale: 0.3,
                    rotateX: -90,
                    y: 100
                },
                visible: {
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 15,
                        mass: 1
                    },
                },
            }}
            style={{ transformStyle: "preserve-3d", transformOrigin: "bottom center", perspective: "1000px" }}
        >
            {children}
        </motion.div>
    );
}
