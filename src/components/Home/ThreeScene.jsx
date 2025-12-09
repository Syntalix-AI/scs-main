"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const AnimatedSphere = () => {
    const meshRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.2;
            meshRef.current.rotation.y = t * 0.3;
        }
    });

    return (
        <mesh ref={meshRef} scale={2.4}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                color="#8b5cf6"
                roughness={0.2}
                metalness={0.8}
                wireframe
            />
        </mesh>
    );
};

const ThreeScene = () => {
    return (
        <div className="h-full w-full absolute inset-0 -z-10 opacity-60">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#ec4899" />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};

export default ThreeScene;
