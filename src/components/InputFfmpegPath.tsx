import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  LineEdit,
  View,
  Button,
  useEventHandler,
} from "@nodegui/react-nodegui";

import { RootState } from "../modules";
import { setFfmpegPath } from "../modules/youtube";

import { QFileDialog, FileMode, QPushButtonSignals } from "@nodegui/nodegui";

type InputFfmpegPathProps = {};

export const InputFfmpegPath: React.FC<InputFfmpegPathProps> = ({}) => {
  const dispatch = useDispatch();

  const youtubeInfo = useSelector((state: RootState) => state.youtube);
  const { ffmpeg_path } = youtubeInfo;
  const set_ffmpeg_path = (ffmpeg_path: string) => {
    dispatch(setFfmpegPath(ffmpeg_path));
  };
  const fileStyle = `
  display: flex;
  flex-direction:row;
`;

  const fileHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (e) => {
        const fileDialog = new QFileDialog();
        fileDialog.setFileMode(FileMode.AnyFile);
        fileDialog.exec();
        const selectedFile = fileDialog.selectedFiles();
        if (selectedFile.length > 0) {
          set_ffmpeg_path(selectedFile[0]);
        }
      },
    },
    [ffmpeg_path]
  );

  return (
    <View style={fileStyle}>
      <LineEdit
        style={`flex: 1;`}
        placeholderText={"ffmpeg 경로 입력"}
        text={ffmpeg_path}
        readOnly
      />
      <Button text={`파일 선택`} on={fileHandler} />
    </View>
  );
};

export default InputFfmpegPath;
