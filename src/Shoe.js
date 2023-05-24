import { useGLTF } from "@react-three/drei";
import React from "react";

export function Model(props) {
  const { nodes, materials } = useGLTF("./asset/shoe.gltf");
  return (
    <group {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customeColor.laces}
      />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customeColor.mesh}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customeColor.caps}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.customeColor.caps} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customeColor.sole}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customeColor.stripes}/>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customeColor.caps} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customeColor.caps} />
    </group>
  );
}
