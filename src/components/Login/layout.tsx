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
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [galleryName, setGalleryName] = useState("");

  const btnHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (...e) => {
        onLogin({
          id: id,
          pw: pw,
          galleryName: galleryName,
          login: true,
        });
      },
    },
    []
  );

  const idChangeHandler = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => {
        setId(text);
      },
    },
    []
  );

  const pwChangeHandler = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => {
        setPw(text);
      },
    },
    []
  );

  const galleryNameChangeHandler = useEventHandler<QLineEditSignals>(
    {
      textChanged: (text) => {
        setGalleryName(text);
      },
    },
    []
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
