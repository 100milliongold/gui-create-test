import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { QPushButtonSignals } from "@nodegui/nodegui";
import { resetData } from "../modules/youtube";
import { View, Button, useEventHandler } from "@nodegui/react-nodegui";
// import { example } from "./test";

import ytdl from "ytdl-core";
const fs = require("fs");

export default function Download() {
  const dispatch = useDispatch();

  //   example().then((driver) => {
  //     console.log(driver);
  //   });

  const youtubeInfo = useSelector((state: RootState) => state.youtube);
  const { id, filePath } = youtubeInfo;
  const resetHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => {
        dispatch(resetData());
      },
    },
    []
  );

  useEffect(() => {
    const result = ytdl(`http://www.youtube.com/watch?v=${id}`).pipe(
      fs.createWriteStream(`${filePath}/${id}.mp4`)
    );
    result.on("close", () => {
      console.log("end");
    });
  });

  return (
    <View>
      <Button text={`초기화`} on={resetHandler} />
    </View>
  );
}
