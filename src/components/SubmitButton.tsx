import React from "react";
import { useDispatch } from "react-redux";

import { Button, useEventHandler } from "@nodegui/react-nodegui";
import { setMode, YOUTUBE_MODE } from "../modules/youtube";

import { QPushButtonSignals } from "@nodegui/nodegui";

type SubmitButtonProps = {};

export const SubmitButton: React.FC<SubmitButtonProps> = ({}) => {
  const dispatch = useDispatch();
  const set_mode = () => {
    dispatch(setMode(YOUTUBE_MODE.Download));
  };
  const submitHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (e) => {
        set_mode();
      },
    },
    []
  );

  return (
    <Button
      text={`시작!`}
      on={submitHandler}
      style={`
        width: 100%;
        height: 100%;
        `}
    />
  );
};

export default SubmitButton;
