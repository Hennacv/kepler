import React from 'react'
import { useTexture } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import { Canvas } from '@react-three/fiber'
import { MotionConfig } from 'framer-motion'

export type Body = {
  name: string;
  src: string;
  size?: number;
  selected?: boolean;
  position: readonly [x: number, y: number, z: number];
  rotationSpeed: number;
}

function AstralBody(props: Body) {
  const { size = 2, src, selected, position, rotationSpeed, ...rest } = props;
  const texture = useTexture(src)
  console.log({ position })

  return (
      <motion.group {...rest} dispose={null}   >
        <motion.mesh
          position={position}
          variants={{
            on: { rotateY: rotationSpeed},
            off: { }
          }}
          animate={selected ? "on" : "off" }
          transition={{ ease: "linear", duration: selected ? 5 : 600, repeat: Infinity}}
          >
          <sphereGeometry args={[size, 64, 64]} />
          <motion.meshStandardMaterial roughness={0.5} map={texture}/>
        </motion.mesh>
      </motion.group>
  )
}

export function Scene(props: Body) {
 return (
    <Canvas>
      <motion.perspectiveCamera/>
      <MotionConfig >
        <motion.group>
          <ambientLight intensity={0.4} />
        </motion.group>
        <motion.group
          initial={false}
          dispose={null}
        >
          <AstralBody {...props} />
        </motion.group>
      </MotionConfig>
    </Canvas>
  )
}
