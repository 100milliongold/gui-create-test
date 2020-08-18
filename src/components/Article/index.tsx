import React from "react";
import { View, LineEdit, Text, Button } from "@nodegui/react-nodegui";

export default function article() {
  return (
    <View>
      <Text>갤러리 아이디 입력</Text>
      <LineEdit />
      <Button text={`시작!`} />
    </View>
  );
}
