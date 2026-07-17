import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Box } from "@chakra-ui/react";

const TechDNA = () => {
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

    camera.position.z = 8;

    // --- Helix Parameters ---
    const strandCount = 2;
    const pointsPerStrand = 100;
    const radius = 2;
    const height = 15;
    const turns = 2.5;

    const group = new THREE.Group();
    scene.add(group);

    // Create Canvas Textures for Symbols
    const symbols = ["<", ">", "{", "}", "/"];
    const createSymbolTexture = (char) => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "white";
      ctx.font = "bold 48px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(char, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };
    const symbolTextures = symbols.map(createSymbolTexture);

    const particles = [];
    const strands = [];

    for (let s = 0; s < strandCount; s++) {
      const strandGroup = new THREE.Group();
      const offset = s * Math.PI;

      for (let i = 0; i < pointsPerStrand; i++) {
        const ratio = i / pointsPerStrand;
        const angle = ratio * Math.PI * 2 * turns + offset;
        const y = (ratio - 0.5) * height;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        // Mixture of glow dots and symbols
        if (i % 5 === 0) {
            const spriteMaterial = new THREE.SpriteMaterial({
                map: symbolTextures[i % symbolTextures.length],
                color: s === 0 ? 0x06b6d4 : 0x8b5cf6, // Cyan for strand 1, Purple for strand 2
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.position.set(x, y, z);
            sprite.scale.set(0.3, 0.3, 0.3);
            strandGroup.add(sprite);
            particles.push({ obj: sprite, initialPos: new THREE.Vector3(x, y, z) });
        } else {
            const dotGeo = new THREE.SphereGeometry(0.04, 8, 8);
            const dotMat = new THREE.MeshBasicMaterial({
                color: s === 0 ? 0x06b6d4 : 0x8b5cf6,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });
            const dot = new THREE.Mesh(dotGeo, dotMat);
            dot.position.set(x, y, z);
            strandGroup.add(dot);
            particles.push({ obj: dot, initialPos: new THREE.Vector3(x, y, z) });
        }
      }
      strands.push(strandGroup);
      group.add(strandGroup);
    }

    // --- Connecting Rungs ---
    const rungCount = 30;
    const rungGroup = new THREE.Group();
    group.add(rungGroup);

    for (let i = 0; i < rungCount; i++) {
      const ratio = i / rungCount;
      const angle = ratio * Math.PI * 2 * turns;
      const y = (ratio - 0.5) * height;
      
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x1, y, z1),
        new THREE.Vector3(x2, y, z2)
      ]);
      const material = new THREE.LineBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending
      });
      const line = new THREE.Line(geometry, material);
      rungGroup.add(line);
    }

    // --- Interaction ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX - window.innerWidth / 2) * 0.0001;
      targetY = (e.clientY - window.innerHeight / 2) * 0.0001;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // --- Animation Loop ---
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const scrollY = window.scrollY;

      // Smooth mouse follow (lerping)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Group rotation (influenced by both time, mouse, AND scroll)
      group.rotation.y = time * 0.3 + mouseX * 10 + scrollY * 0.001;
      group.rotation.x = mouseY * 5 + scrollY * 0.0005;

      // Dynamic "floating" wave motion for particles
      particles.forEach((p, idx) => {
        p.obj.position.x = p.initialPos.x + Math.sin(time + idx) * 0.1;
        p.obj.position.z = p.initialPos.z + Math.cos(time + idx) * 0.1;
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      zIndex={0}
      style={{
        filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.2))",
        pointerEvents: "none"
      }}
    />
  );
};

export default TechDNA;
