import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Box } from "@chakra-ui/react";

const CosmicBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        camera.position.z = 5;

        // --- Starfield ---
        const starCount = 2000;
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount; i++) {
            starPositions[i * 3] = (Math.random() - 0.5) * 50;
            starPositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            starPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        const starGeo = new THREE.BufferGeometry();
        starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
        const starMat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.02,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true
        });
        const stars = new THREE.Points(starGeo, starMat);
        scene.add(stars);

        // --- Distortion Mesh (Gradient Wave) ---
        const meshGeo = new THREE.PlaneGeometry(20, 20, 50, 50);
        const meshMat = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            wireframe: true,
            transparent: true,
            opacity: 0.15,
            side: THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(meshGeo, meshMat);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.y = -2;
        scene.add(mesh);

        // --- Animation & Resize ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            // Stars rotation
            stars.rotation.y = time * 0.02;
            stars.rotation.x = time * 0.01;

            // Mesh Wave Animation
            const pos = meshGeo.attributes.position;
            for (let i = 0; i < pos.count; i++) {
                const x = pos.getX(i);
                const y = pos.getY(i);
                const z = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * 0.3;
                pos.setZ(i, z);
            }
            pos.needsUpdate = true;

            renderer.render(scene, camera);
        };
        animate();

        // --- Cleanup ---
        return () => {
            window.removeEventListener("resize", handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            scene.clear();
            renderer.dispose();
        };
    }, []);

    return (
        <Box
            ref={containerRef}
            position="fixed"
            top={0}
            left={0}
            w="100%"
            h="100%"
            zIndex={-1}
            pointerEvents="none"
            style={{
                background: "radial-gradient(circle at center, #0a0a0a 0%, #000 100%)",
            }}
        />
    );
};

export default CosmicBackground;
