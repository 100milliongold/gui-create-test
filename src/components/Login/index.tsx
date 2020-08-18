import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Login from "./layout";
import { RootState } from "../../modules";
import { login, LoginState } from "../../modules/login";

export default function Index() {
  const login_info = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  const onLogin = (login_info: LoginState) => {
    dispatch(login(login_info));
  };

  return <Login onLogin={onLogin} />;
}
