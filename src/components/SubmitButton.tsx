import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, useEventHandler } from "@nodegui/react-nodegui";
import { RootState } from "../modules";
import { updateData, YOUTUBE_MODE, Youtube } from "../modules/youtube";

import { QPushButtonSignals } from "@nodegui/nodegui";

type SubmitButtonProps = {};

export const SubmitButton: React.FC<SubmitButtonProps> = ({}) => {
  const dispatch = useDispatch();

  const youtubeInfo = useSelector((state: RootState) => state.youtube);
  const { id, filePath } = youtubeInfo;

  const update = (data: Youtube) => {
    dispatch(updateData(data));
  };
  const submitHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (e) => {
        const res = {
          id,
          filePath,
          mode: YOUTUBE_MODE.Download,
        };
        update(res);
      },
    },
    [id, filePath]
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
