import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

import { pageName } from "../modules/youtube";

import InputData from "./InputData";
import Download from "./Download";

export default function MainPage() {
  const youtubeInfo = useSelector((state: RootState) => state.youtube);

  return (
    <>
      {youtubeInfo.pageName === pageName.InputData && <InputData />}
      {youtubeInfo.pageName === pageName.Download && <Download />}
    </>
  );
}
