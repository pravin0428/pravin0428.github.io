import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Box } from "@chakra-ui/react";

const TechSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    const size = containerRef.current.clientWidth;
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 2.5;

    // --- Particles & Symbols ---
    const particleCount = 80;
    const symbols = ["<", ">", "{", "}"];
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Create Canvas Textures for Symbols
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
      
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const symbolTextures = symbols.map(createSymbolTexture);
    const group = new THREE.Group();
    scene.add(group);

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;

        const x = Math.cos(theta) * Math.sin(phi);
        const y = Math.sin(theta) * Math.sin(phi);
        const z = Math.cos(phi);

        // Mix of dots and symbols
        if (i % 3 === 0) {
            const spriteMaterial = new THREE.SpriteMaterial({
                map: symbolTextures[i % symbolTextures.length],
                color: i % 2 === 0 ? 0x8b5cf6 : 0x06b6d4, // Purple : Cyan
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.position.set(x, y, z);
            sprite.scale.set(0.15, 0.15, 0.15);
            group.add(sprite);
            particles.push(sprite);
        } else {
            const dotGeometry = new THREE.SphereGeometry(0.02, 8, 8);
            const dotMaterial = new THREE.MeshBasicMaterial({
                color: i % 2 === 0 ? 0x8b5cf6 : 0x06b6d4,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending
            });
            const dot = new THREE.Mesh(dotGeometry, dotMaterial);
            dot.position.set(x, y, z);
            group.add(dot);
            particles.push(dot);
        }
    }

    // --- Connecting Lines ---
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lineSegments);

    // --- Animation & Interaction ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      targetX = (e.clientX - rect.left - size / 2) * 0.001;
      targetY = (e.clientY - rect.top - size / 2) * 0.001;
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      group.rotation.y += 0.003 + mouseX;
      group.rotation.x += 0.001 + mouseY;

      // Update lines logic (expensive, so only do it for close neighbors)
      let lineIdx = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
            const dist = particles[i].position.distanceTo(particles[j].position);
            if (dist < 0.6) {
                linePositions[lineIdx++] = particles[i].position.x;
                linePositions[lineIdx++] = particles[i].position.y;
                linePositions[lineIdx++] = particles[i].position.z;
                linePositions[lineIdx++] = particles[j].position.x;
                linePositions[lineIdx++] = particles[j].position.y;
                linePositions[lineIdx++] = particles[j].position.z;
            }
        }
      }
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIdx / 3);

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
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
      w="100%"
      h="100%"
      position="relative"
      style={{
        filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.4))",
      }}
    />
  );
};

export default TechSphere;
