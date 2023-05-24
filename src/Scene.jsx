import { useGLTF } from '@react-three/drei'
import React from 'react'

export function Car(props) {
  const { nodes, materials } = useGLTF('./lamborghini_venevo/scene.gltf')
  return (
    <group {...props} dispose={null} scale={0.2}>
      <group position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]}>
        <mesh geometry={nodes.Object_10.geometry} material={materials.material_3} material-color={"black"} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Vt_Liu.002']} />
      </group>
      <group position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]}>
        <mesh geometry={nodes.Object_15.geometry} material={materials.lamp} material-color={"pink"} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Vt_Liu} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['Vt_Liu.001']} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.engine} material-color={"white"} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.material} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.wheel} position={[0.91, 1.32, -4.52]} rotation={[1.58, 0, -0.03]} scale={[-3.65, 3.65, 3.65]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.material_5} position={[0.91, 1.32, -4.52]} rotation={[1.58, 0, -0.03]} scale={[-3.65, 3.65, 3.65]} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.material_9} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.material_10} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.material_11} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.material_12} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.glass} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.material_14} position={[0.89, 1.33, -5.2]} rotation={[1.58, 0, -0.03]} scale={[-3.65, 3.65, 3.65]} />
      <mesh geometry={nodes.Object_31.geometry} material={materials.material_15} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.logo} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.material_17} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.material_18} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.material_19} position={[0.89, 1.33, -5.2]} rotation={[1.58, 0, -0.03]} scale={[-3.65, 3.65, 3.65]} />
      <mesh geometry={nodes.Object_41.geometry} material={materials.glass} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_43.geometry} material={materials.material_20} position={[-1.72, 0.5, 0.05]} rotation={[1.58, 0, -0.03]} scale={[-3.37, 3.37, 3.37]} />
      <mesh geometry={nodes.Object_45.geometry} material={materials.wheel} position={[1.27, 1.18, 4.53]} rotation={[1.58, 0, -0.03]} scale={[-3.27, 3.27, 3.27]} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.material_5} position={[1.27, 1.18, 4.53]} rotation={[1.58, 0, -0.03]} scale={[-3.27, 3.27, 3.27]} />
      <mesh geometry={nodes.Object_49.geometry} material={materials.material_14} position={[1.25, 1.19, 4]} rotation={[1.58, 0, -0.03]} scale={[-3.03, 3.03, 3.03]} />
      <mesh geometry={nodes.Object_51.geometry} material={materials.material_19} position={[1.25, 1.19, 4]} rotation={[1.58, 0, -0.03]} scale={[-3.03, 3.03, 3.03]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
