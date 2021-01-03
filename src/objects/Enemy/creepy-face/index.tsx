import { shipPositionState } from "gameState";
import { FC, useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { useRecoilState } from "recoil";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface CreepyFaceProps {
    position: {
        x: number,
        y: number,
        z: number
    }
};

const CreepyFace : FC<CreepyFaceProps> = ({ position }) => {
    const model = useRef(null);

    const scene = useLoader(GLTFLoader, "./models/creepy-face.glb");
    const nodes = (scene as unknown as any).nodes;

    return (
        <group ref={model} position={[position.x, position.y, position.z]}>
        <mesh visible geometry={nodes['Quad_Sphere'].geometry}>
            <meshStandardMaterial
            attach="material"
            color="white"
            roughness={0.3}
            metalness={0.3}
            />
        </mesh>
        </group>
    );
}

export default CreepyFace;