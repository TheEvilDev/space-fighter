import { enemyPositionState } from "gameState";
import Loading from "objects/ArWing/Loading";
import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import CreepyFace from '../creepy-face';

// Manages Drawing enemies that currently exist in state
function Enemies() {
  const enemies = useRecoilValue(enemyPositionState);
  return (
    <group>
      {enemies.map((enemy) => (
        <Suspense fallback={<Loading />}>
          <CreepyFace position={enemy} key={`${enemy.x}`}></CreepyFace>
        </Suspense>
      ))}
    </group>
  );
}

export default Enemies;


