import React from 'react'
import { useTexture } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import { Canvas } from '@react-three/fiber'
import { MotionConfig } from 'framer-motion'

type Body = {
  src: string;
  size?: number;
  selected?: boolean;
}

function AstralBody(props: Body) {
  const { size = 2, src, selected, ...rest } = props;
  const texture = useTexture(src)
  console.log({ selected })

  // const onClick = useCallback(() => setOn(!isOn), [isOn])

  return (
      <motion.group {...rest} dispose={null}   >
        <motion.mesh
          variants={{
            on: { rotateY: 20 },
            off: { rotateY: 0 }
          }}
          animate={selected ? "on" : "off" }
          transition={{ ease: "linear", duration: selected ? 20 : 1000, repeat: Infinity}}
          >
          <sphereGeometry args={[size, 64, 64]} />
          <motion.meshStandardMaterial roughness={0.5} map={texture} />
        </motion.mesh>
      </motion.group>
  )
}

export function Scene(props: Body) {
 return (
    <Canvas >
      <motion.perspectiveCamera
        fov={90}
        position={[0, 0, 20]}
      />
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
