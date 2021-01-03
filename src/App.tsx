import CameraControls from "controllers/camera";
import Target from "environment/hud/target";
import Terrain from "environment/terrain";
import Loading from "objects/ArWing/Loading";
import React, { Suspense } from "react";
import ArWing from './objects/ArWing';
import { RecoilRoot } from "recoil";

import "./styles.css";
import Lasers from "environment/lasers";
import LaserController from "controllers/laser-controller";
import Enemies from "objects/Enemy/asteroid";
import GameTimer from "gameTimer";
import ScoreCard from "environment/hud/score-card";
import RecoilCanvas from "components/recoil-canvas";
import SkyBox from "environment/sky-box";
import { DefaultXRControllers, Hands } from "@react-three/xr";
import EventLogger from "objects/event-logger";


export default function App() {
  return (
      <RecoilRoot>
        <ScoreCard />
        <RecoilCanvas style={{ background: "#171717" }}>
          <DefaultXRControllers />
          <Hands />
          <directionalLight intensity={0.5} />
          {/* <Suspense fallback={<Loading />}>
            <ArWing />
          </Suspense> */}
          <Target />
          <EventLogger />
          <Terrain />
          <Lasers />
          <LaserController />
          <Enemies />
          <GameTimer />
        </RecoilCanvas>
      </RecoilRoot>
  );
};