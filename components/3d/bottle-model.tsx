"use client"

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

interface BottleModelProps {
  scale?: number
  position?: [number, number, number]
}

export function BottleModel({ scale = 0.5, position = [0, -4.5, -15] }: BottleModelProps) {
  const { scene } = useGLTF("/bottle_with_magic_shit_inside.glb")

  const groupRef = useRef<any>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload("/bottle_with_magic_shit_inside.glb")