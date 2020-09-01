import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

import { YOUTUBE_MODE } from "../modules/youtube";

import InputData from "./InputData";
import Download from "./Download";

export default function MainPage() {
  const youtubeInfo = useSelector((state: RootState) => state.youtube);

  return (
    <>
      {youtubeInfo.mode === YOUTUBE_MODE.InputData && <InputData />}
      {youtubeInfo.mode === YOUTUBE_MODE.Download && <Download />}
    </>
  );
}
