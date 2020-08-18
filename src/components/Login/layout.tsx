import React, { useState } from "react";
import {
  View,
  LineEdit,
  Text,
  Button,
  useEventHandler,
} from "@nodegui/react-nodegui";
import { LoginState } from "../../modules/login";
import { QPushButtonSignals, QLineEditSignals } from "@nodegui/nodegui";

type layoutProps = {
  onLogin: (data: LoginState) => void;
};

export default function layout({ onLogin }: layoutProps) {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [galleryName, setGalleryName] = useState<string>("");

  const btnHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (...e) => {
        const res = {
          id: id,
          pw: pw,
          galleryName: galleryName,
          login: true,
        };
        onLogin(res);
      },
    },
    [id, pw, galleryName]
  );

  const idChangeHandler = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => {
        setId(text);
      },
    },
    [id]
  );

  const pwChangeHandler = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => {
        setPw(text);
      },
    },
    [pw]
  );

  const galleryNameChangeHandler = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => {
        setGalleryName(text);
      },
    },
    [galleryName]
  );

  return (
    <View>
      <Text>아이디 입력</Text>
      <LineEdit text={id} on={idChangeHandler} />
      <Text>패스워드 입력</Text>
      <LineEdit text={pw} on={pwChangeHandler} />
      <Text>갤러리 아이디 입력</Text>
      <LineEdit text={galleryName} on={galleryNameChangeHandler} />
      <Button text={`시작!`} on={btnHandler} />
    </View>
  );
}
