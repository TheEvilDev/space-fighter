import React from "react";
import { useRecoilBridgeAcrossReactRoots_UNSTABLE } from "recoil";
import { VRCanvas } from '@react-three/xr'


const RecoilCanvas = ({ children, ...props}) => {
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  return (
    <VRCanvas {...props}>
      <RecoilBridge>
        {children}
      </RecoilBridge>
    </VRCanvas>
  );
}

export default RecoilCanvas;