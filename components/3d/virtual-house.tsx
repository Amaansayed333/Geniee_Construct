"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { PointerLockControls, Sky, Environment } from "@react-three/drei"
import * as THREE from "three"
import { useKeyboardControls } from "@/hooks/use-keyboard-controls"

export function VirtualHouse() {
  const { camera } = useThree()
  const controlsRef = useRef<any>()
  const velocity = useRef(new THREE.Vector3())
  const direction = useRef(new THREE.Vector3())
  const { forward, backward, left, right } = useKeyboardControls()

  const [currentRoom, setCurrentRoom] = useState("Entrance")

  useEffect(() => {
    console.log("[v0] VirtualHouse component mounted, camera position:", camera.position)
  }, [camera])

  useFrame((state, delta) => {
    if (!controlsRef.current) return

    const speed = 5
    const damping = 0.85

    // Calculate movement direction
    direction.current.set(0, 0, 0)
    if (forward) direction.current.z -= 1
    if (backward) direction.current.z += 1
    if (left) direction.current.x -= 1
    if (right) direction.current.x += 1

    direction.current.normalize()

    // Apply velocity
    velocity.current.x = velocity.current.x * damping + direction.current.x * speed * delta
    velocity.current.z = velocity.current.z * damping + direction.current.z * speed * delta

    // Get camera direction
    const cameraDirection = new THREE.Vector3()
    camera.getWorldDirection(cameraDirection)
    cameraDirection.y = 0
    cameraDirection.normalize()

    const cameraRight = new THREE.Vector3()
    cameraRight.crossVectors(camera.up, cameraDirection).normalize()

    // Move camera
    const movement = new THREE.Vector3()
    movement.addScaledVector(cameraDirection, -velocity.current.z)
    movement.addScaledVector(cameraRight, -velocity.current.x)
    camera.position.add(movement)

    // Keep camera at eye level
    camera.position.y = 1.6

    // Boundaries
    camera.position.x = Math.max(-15, Math.min(15, camera.position.x))
    camera.position.z = Math.max(-15, Math.min(15, camera.position.z))

    // Detect current room based on position
    detectRoom(camera.position, setCurrentRoom)
  })

  return (
    <>
      {/* Sky and Lighting */}
      <Sky sunPosition={[100, 20, 100]} />
      <Environment preset="apartment" />
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[0, 3, 0]} intensity={0.8} />

      {/* First Person Controls */}
      <PointerLockControls ref={controlsRef} />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 3.5, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Entrance Hall */}
      <group position={[0, 0, 8]}>
        {/* Walls */}
        <mesh position={[0, 1.75, -3]} castShadow>
          <boxGeometry args={[12, 3.5, 0.2]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>
        <mesh position={[-6, 1.75, 0]} castShadow>
          <boxGeometry args={[0.2, 3.5, 6]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>
        <mesh position={[6, 1.75, 0]} castShadow>
          <boxGeometry args={[0.2, 3.5, 6]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>

        {/* Decorative Console Table */}
        <mesh position={[0, 0.5, -2.5]} castShadow>
          <boxGeometry args={[2, 1, 0.5]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>

        {/* Decorative Vase */}
        <mesh position={[0, 1.2, -2.5]} castShadow>
          <cylinderGeometry args={[0.15, 0.2, 0.5, 16]} />
          <meshStandardMaterial color="#4a5568" />
        </mesh>
      </group>

      {/* Living Room */}
      <group position={[-8, 0, 0]}>
        {/* Walls */}
        <mesh position={[0, 1.75, -5]} castShadow>
          <boxGeometry args={[10, 3.5, 0.2]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
        <mesh position={[-5, 1.75, 0]} castShadow>
          <boxGeometry args={[0.2, 3.5, 10]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>

        {/* Sofa */}
        <mesh position={[0, 0.4, -3]} castShadow>
          <boxGeometry args={[3, 0.8, 1]} />
          <meshStandardMaterial color="#4a5568" />
        </mesh>
        <mesh position={[0, 0.8, -3.4]} castShadow>
          <boxGeometry args={[3, 0.8, 0.2]} />
          <meshStandardMaterial color="#4a5568" />
        </mesh>

        {/* Coffee Table */}
        <mesh position={[0, 0.3, -1.5]} castShadow>
          <boxGeometry args={[1.5, 0.6, 0.8]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>

        {/* TV Stand */}
        <mesh position={[0, 0.4, -4.7]} castShadow>
          <boxGeometry args={[2.5, 0.8, 0.5]} />
          <meshStandardMaterial color="#2d3748" />
        </mesh>

        {/* Decorative Plant */}
        <mesh position={[-3, 0.8, -3]} castShadow>
          <cylinderGeometry args={[0.2, 0.25, 1.6, 16]} />
          <meshStandardMaterial color="#38a169" />
        </mesh>
      </group>

      {/* Kitchen */}
      <group position={[8, 0, 0]}>
        {/* Walls */}
        <mesh position={[0, 1.75, -5]} castShadow>
          <boxGeometry args={[10, 3.5, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[5, 1.75, 0]} castShadow>
          <boxGeometry args={[0.2, 3.5, 10]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Kitchen Counter */}
        <mesh position={[3, 0.5, -3]} castShadow>
          <boxGeometry args={[4, 1, 0.8]} />
          <meshStandardMaterial color="#718096" />
        </mesh>

        {/* Upper Cabinets */}
        <mesh position={[3, 2.3, -4.6]} castShadow>
          <boxGeometry args={[4, 1.2, 0.5]} />
          <meshStandardMaterial color="#2d3748" />
        </mesh>

        {/* Dining Table */}
        <mesh position={[-1, 0.4, -1]} castShadow>
          <boxGeometry args={[2, 0.8, 1.5]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>

        {/* Chairs */}
        <mesh position={[-1, 0.5, -2]} castShadow>
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial color="#4a5568" />
        </mesh>
        <mesh position={[-1, 0.5, 0]} castShadow>
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial color="#4a5568" />
        </mesh>
      </group>

      {/* Bedroom */}
      <group position={[0, 0, -8]}>
        {/* Walls */}
        <mesh position={[0, 1.75, -3]} castShadow>
          <boxGeometry args={[12, 3.5, 0.2]} />
          <meshStandardMaterial color="#f7fafc" />
        </mesh>
        <mesh position={[-6, 1.75, 0]} castShadow>
          <boxGeometry args={[0.2, 3.5, 6]} />
          <meshStandardMaterial color="#f7fafc" />
        </mesh>
        <mesh position={[6, 1.75, 0]} castShadow>
          <boxGeometry args={[0.2, 3.5, 6]} />
          <meshStandardMaterial color="#f7fafc" />
        </mesh>

        {/* Bed */}
        <mesh position={[0, 0.3, -2]} castShadow>
          <boxGeometry args={[2.5, 0.6, 2]} />
          <meshStandardMaterial color="#4a5568" />
        </mesh>
        <mesh position={[0, 0.7, -2.9]} castShadow>
          <boxGeometry args={[2.5, 1.4, 0.2]} />
          <meshStandardMaterial color="#2d3748" />
        </mesh>

        {/* Nightstands */}
        <mesh position={[-1.5, 0.3, -2]} castShadow>
          <boxGeometry args={[0.5, 0.6, 0.5]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>
        <mesh position={[1.5, 0.3, -2]} castShadow>
          <boxGeometry args={[0.5, 0.6, 0.5]} />
          <meshStandardMaterial color="#8b7355" />
        </mesh>

        {/* Wardrobe */}
        <mesh position={[4, 1, 0]} castShadow>
          <boxGeometry args={[0.6, 2, 1.5]} />
          <meshStandardMaterial color="#2d3748" />
        </mesh>
      </group>
    </>
  )
}

function detectRoom(position: THREE.Vector3, setCurrentRoom: (room: string) => void) {
  // Entrance Hall
  if (position.z > 5 && position.z < 11 && Math.abs(position.x) < 6) {
    setCurrentRoom("Entrance Hall")
  }
  // Living Room
  else if (position.x < -3 && position.x > -13 && Math.abs(position.z) < 5) {
    setCurrentRoom("Living Room")
  }
  // Kitchen
  else if (position.x > 3 && position.x < 13 && Math.abs(position.z) < 5) {
    setCurrentRoom("Kitchen")
  }
  // Bedroom
  else if (position.z < -5 && position.z > -11 && Math.abs(position.x) < 6) {
    setCurrentRoom("Bedroom")
  }
  // Hallway/Transition
  else {
    setCurrentRoom("Hallway")
  }
}
