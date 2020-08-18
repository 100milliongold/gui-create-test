import { Text, View, Button, useEventHandler } from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";
import React, { useState } from "react";
import open from "open";
import { test } from "./test";

export function StepTwo() {
  const [json, setJson] = useState("");

  const btnHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => open("https://react.nodegui.org").catch(console.log),
    },
    []
  );

  test().then((res) => {
    setJson(`${res.length}`);
  });

  return (
    <View style={containerStyle}>
      <Text style={textStyle} wordWrap={true}>
        {json}
      </Text>
      <Button
        style={btnStyle}
        on={btnHandler}
        text={`Open React NodeGui docs`}
      ></Button>
    </View>
  );
}

const containerStyle = `
  flex: 1;
  justify-content: 'space-around';
`;

const textStyle = `
  padding-right: 20px;
`;

const btnStyle = `
  margin-horizontal: 20px;
  height: 40px;
`;
