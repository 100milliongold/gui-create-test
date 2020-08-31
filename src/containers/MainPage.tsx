import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

import { mode } from "../modules/youtube";

import InputData from "./InputData";
import Download from "./Download";

export default function MainPage() {
  const youtubeInfo = useSelector((state: RootState) => state.youtube);

  return (
    <>
      {youtubeInfo.mode === mode.InputData && <InputData />}
      {youtubeInfo.mode === mode.Download && <Download />}
    </>
  );
}
