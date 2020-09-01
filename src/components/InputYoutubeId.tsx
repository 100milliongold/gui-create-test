import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { LineEdit, useEventHandler } from "@nodegui/react-nodegui";
import { RootState } from "../modules";
import { setId } from "../modules/youtube";

import { QLineEditSignals } from "@nodegui/nodegui";

type InputYoutubeProps = {};

export const InputYoutubeId: React.FC<InputYoutubeProps> = ({}) => {
  const dispatch = useDispatch();

  const youtubeInfo = useSelector((state: RootState) => state.youtube);
  const { id } = youtubeInfo;
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

  return (
    <LineEdit on={idChangeHandler} placeholderText={"유투브 아이디 입력"} />
  );
};

export default InputYoutubeId;
