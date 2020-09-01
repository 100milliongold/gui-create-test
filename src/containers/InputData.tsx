import React, { useRef, useEffect } from "react";
import { View, Text } from "@nodegui/react-nodegui";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { Youtube, YOUTUBE_MODE, updateData } from "../modules/youtube";

import InputYoutubeId from "../components/InputYoutubeId";
import SetSaveFileSelect from "../components/SetSaveFileSelect";
import SubmitButton from "../components/SubmitButton";

import ytdl from "ytdl-core";
const fs = require("fs");

const prism = require("prism-media");

export default function InputData() {
  const youtubeInfo = useSelector((state: RootState) => state.youtube);
  const { id, filePath, mode } = youtubeInfo;

  const dispatch = useDispatch();

  const update = (data: Youtube) => {
    dispatch(updateData(data));
  };

  useEffect(() => {
    if (mode === YOUTUBE_MODE.Download) {
      const result = ytdl(`http://www.youtube.com/watch?v=${id}`).pipe(
        fs.createWriteStream(`${filePath}/${id}.mp4`)
      );
      result.on("close", () => {
        //` -i ${filePath}/${id}.mp4 -vf select='between(t,2,6)+between(t,15,24)' -vsync 0 out%d.png`

        // const transcoder = new prism.FFmpeg({
        //   args: [
        //     "-vf",
        //     `select='between(t,2,6)+between(t,15,24)'`,
        //     "-vsync",
        //     "0 out%d.png",
        //   ],
        // });

        // fs.createReadStream(`${filePath}/${id}.mp4`).pipe(transcoder);

        console.log("end");
      });
    }
  });

  return (
    <View>
      <View style="border: 1px solid blue;">
        <Text id="welcome-text">유투브 이미지 다운로드 테스트</Text>
      </View>
      <View
        style={`
            display: flex;
            flex-direction:row;
            border: 1px solid red;
        `}
      >
        <View>
          <Text>이미지 미리보기</Text>
        </View>
        <View style={`flex: 1;`}>
          <InputYoutubeId />
          <SetSaveFileSelect />
        </View>
        <View style={`width: 100%;`}>
          <SubmitButton />
        </View>
      </View>
      <View style="border: 1px solid green;">
        <Text>테이블 부분</Text>
        <View style="width: 100%; height : 100%;"></View>
      </View>
    </View>
  );
}

const fileStyle = `
  display: flex;
  flex-direction:row;
`;
