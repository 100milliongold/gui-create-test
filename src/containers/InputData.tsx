import React, { useState } from "react";
import {
  View,
  LineEdit,
  Button,
  useEventHandler,
  Text,
} from "@nodegui/react-nodegui";

import { QFileDialog } from "@nodegui/nodegui"


import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { Youtube, updateData, pageName } from "../modules/youtube";

import { QPushButtonSignals, QLineEditSignals } from "@nodegui/nodegui";


export default function InputData() {
  const dispatch = useDispatch();
  const [id, setId] = useState<string | undefined>("");
  const [fileName, setFileName] = useState<string | undefined>("");

  const update = (data: Youtube) => {
    dispatch(updateData(data));
  };

  const idChangeHandler = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => {
        setId(text);
      },
    },
    [id]
  );

  const fileNameChangeHandler = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => {
        setFileName(text);
      },
    },
    [id]
  );

  const submitHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (e) => {
        const res = {
          id,
          fileName,
          pageName: pageName.Download,
        };
        update(res);
      },
    },
    [id, fileName]
  );

  return (
    <View>
      <Text id="welcome-text">유투브 이미지 다운로드 테스트</Text>
      <LineEdit on={idChangeHandler} placeholderText={"유투브 아이디 입력"} />
      <LineEdit on={fileNameChangeHandler} placeholderText={"파일명 입력"} />
      <Button text={`시작!`} on={submitHandler} />
    </View>
  );
}
