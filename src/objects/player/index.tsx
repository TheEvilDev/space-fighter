import React, { FC, useEffect, useRef } from 'react';
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import { useRecoilState } from 'recoil';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { playerPositionState } from "../../gameState";


interface PlayerProps {
}

const Player : FC<PlayerProps> = () => {
    const mesh = useRef(null);
    const { gl, camera } = useThree();
    
    const [playerPosition, setPlayerPosition] = useRecoilState(playerPositionState);

    useEffect(() => {
        const cam = gl.xr.isPresenting ? gl.xr.getCamera(camera) : camera
        mesh.current.add(cam)
        return () => mesh.current.remove(cam)
      }, [gl.xr.isPresenting, gl.xr, camera, mesh]);

    useFrame(({ mouse }) => {
        setPlayerPosition({
            position: { x: mouse.x * 6, y: mouse.y * 2 },
            rotation: { z: -mouse.x * 0.5, x: -mouse.x * 0.5, y: -mouse.y * 0.2 },
        });
    });

    useFrame(() => {
        mesh.current.rotation.z = playerPosition.rotation.z;
        mesh.current.rotation.y = playerPosition.rotation.x;
        mesh.current.rotation.x = playerPosition.rotation.y;
        mesh.current.position.y = playerPosition.position.y;
        mesh.current.position.x = playerPosition.position.x;
    });

    return (
        <group ref={mesh}>
        </group>
    );
}

export default Player;