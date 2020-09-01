import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  LineEdit,
  View,
  Button,
  useEventHandler,
} from "@nodegui/react-nodegui";
import { RootState } from "../modules";
import { setFilePath } from "../modules/youtube";

import { QFileDialog, FileMode, QPushButtonSignals } from "@nodegui/nodegui";

type SetSaveFileSelectProps = {};

export const SetSaveFileSelect: React.FC<SetSaveFileSelectProps> = () => {
  const dispatch = useDispatch();

  const youtubeInfo = useSelector((state: RootState) => state.youtube);

  const { filePath } = youtubeInfo;

  const set_file_path = (filePath: string) => {
    dispatch(setFilePath(filePath));
  };

  const fileStyle = `
  display: flex;
  flex-direction:row;
`;

  const fileHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (e) => {
        const fileDialog = new QFileDialog();
        fileDialog.setFileMode(FileMode.Directory);
        fileDialog.exec();
        const selectedDirectory = fileDialog.selectedFiles();
        if (selectedDirectory.length > 0) {
          set_file_path(selectedDirectory[0]);
        }
      },
    },
    [filePath]
  );

  return (
    <View style={fileStyle}>
      <LineEdit
        style={`flex: 1;`}
        placeholderText={"저장경로 입력"}
        text={filePath}
        readOnly
      />
      <Button text={`파일 선택`} on={fileHandler} />
    </View>
  );
};
export default SetSaveFileSelect;
