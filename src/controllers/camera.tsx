import { useEffect, useRef } from "react";
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

import {
  useFrame,
  useThree,
} from "react-three-fiber";

const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
      camera,
      gl: { domElement },
    } = useThree();

    useEffect(() => {
      const controls = new PointerLockControls(camera, domElement);
      controls.connect();

      return () => {
        controls.disconnect();
      };
    }, [camera, domElement]);

    return null;
  };

export default CameraControls;