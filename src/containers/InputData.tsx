import React, { useRef, useEffect } from "react";
import {
  View,
  LineEdit,
  Button,
  useEventHandler,
  Text,
} from "@nodegui/react-nodegui";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import {
  Youtube,
  updateData,
  setId,
  setFilePath,
  mode,
} from "../modules/youtube";

import {
  QPushButtonSignals,
  QLineEditSignals,
  QFileDialog,
  FileMode,
  QTableView,
  QTableWidget,
  QTableWidgetItem,
  QWidget,
  QMainWindow,
} from "@nodegui/nodegui";

export default function InputData() {
  const dispatch = useDispatch();
  const test = useRef<QWidget>();
  const youtubeInfo = useSelector((state: RootState) => state.youtube);
  const { id, filePath } = youtubeInfo;
  const update = (data: Youtube) => {
    dispatch(updateData(data));
  };
  const set_file_path = (filePath: string) => {
    dispatch(setFilePath(filePath));
  };
  const set_id = (id: string) => {
    dispatch(setId(id));
  };

  const idChangeHandler = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => {
        set_id(text);
      },
    },
    [id]
  );

  const submitHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (e) => {
        const res = {
          id,
          filePath,
          mode: mode.Download,
        };
        update(res);
      },
    },
    [id, filePath]
  );

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

  const setTable = (e: any) => {
    console.log(e);
  };

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
          <LineEdit
            on={idChangeHandler}
            placeholderText={"유투브 아이디 입력"}
          />
          <View style={fileStyle}>
            <LineEdit
              placeholderText={"저장경로 입력"}
              text={filePath}
              readOnly
            />
            <Button text={`파일 선택`} on={fileHandler} />
          </View>
        </View>
        <View>
          <Button
            text={`시작!`}
            on={submitHandler}
            style={`
            width: 100%;
            height: 100%;
        `}
          />
        </View>
      </View>
      <View style="border: 1px solid green;">
        <Text>테이블 부분</Text>
        <View ref={test} style="width: 100%; height : 100%;"></View>
      </View>
    </View>
  );
}

const fileStyle = `
  display: flex;
  flex-direction:row;
`;
