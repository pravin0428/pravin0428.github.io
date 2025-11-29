import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    colors: {
        brand: {
            50: "#fff9e6",
            100: "#ffecb3",
            200: "#ffe080",
            300: "#ffd44d",
            400: "#f0d122", // Primary yellow
            500: "#e0c000",
            600: "#c0a000",
            700: "#a08000",
            800: "#806000",
            900: "#604000",
        },
        accent: {
            purple: "#8b5cf6",
            blue: "#3b82f6",
            cyan: "#06b6d4",
            pink: "#ec4899",
        },
    },
    fonts: {
        heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
        body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    },
    styles: {
        global: {
            body: {
                bg: "gray.900",
                color: "white",
                overflowX: "hidden",
            },
            // Custom scrollbar
            "*::-webkit-scrollbar": {
                width: "10px",
            },
            "*::-webkit-scrollbar-track": {
                background: "gray.900",
            },
            "*::-webkit-scrollbar-thumb": {
                background: "brand.400",
                borderRadius: "10px",
            },
            "*::-webkit-scrollbar-thumb:hover": {
                background: "brand.500",
            },
            // Selection color
            "::selection": {
                background: "brand.400",
                color: "gray.900",
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "bold",
                borderRadius: "md",
            },
            variants: {
                solid: {
                    bg: "brand.400",
                    color: "gray.900",
                    _hover: {
                        bg: "brand.500",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px rgba(240, 209, 34, 0.4)",
                    },
                    _active: {
                        bg: "brand.600",
                    },
                    transition: "all 0.3s ease",
                },
                outline: {
                    borderColor: "brand.400",
                    color: "brand.400",
                    _hover: {
                        bg: "whiteAlpha.100",
                        transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                },
            },
            defaultProps: {
                variant: "solid",
            },
        },
        Container: {
            baseStyle: {
                maxW: "container.xl",
            },
        },
        Heading: {
            baseStyle: {
                fontWeight: "bold",
                letterSpacing: "tight",
            },
        },
    },
    // Custom gradients
    gradients: {
        primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        dark: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        darkRadial: "radial-gradient(circle at top, #1e293b 0%, #0f172a 100%)",
        brand: "linear-gradient(135deg, #ffd44d 0%, #f0d122 50%, #e0c000 100%)",
        accent: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
    },
    // Custom shadows
    shadows: {
        glow: "0 0 20px rgba(240, 209, 34, 0.5)",
        glowSm: "0 0 10px rgba(240, 209, 34, 0.3)",
        glowLg: "0 0 30px rgba(240, 209, 34, 0.6)",
        purple: "0 10px 40px rgba(139, 92, 246, 0.3)",
        card: "0 4px 20px rgba(0, 0, 0, 0.3)",
        cardHover: "0 8px 30px rgba(0, 0, 0, 0.5)",
    },
    // Glass morphism effect
    glass: {
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    // Animation keyframes
    keyframes: {
        float: {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0.7 },
        },
        shimmer: {
            "0%": { backgroundPosition: "-1000px 0" },
            "100%": { backgroundPosition: "1000px 0" },
        },
        gradientShift: {
            "0%, 100%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
        },
    },
});

export default theme;
