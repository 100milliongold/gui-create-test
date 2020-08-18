import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Login from "./layout";
import Article from "../Article";

import { RootState } from "../../modules";
import { login, logout, LoginState } from "../../modules/login";

export default function Index() {
  const login_info = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch();

  const onLogin = (login_info: LoginState) => {
    dispatch(login(login_info));
  };
  const onLogout = () => {
    dispatch(logout());
  };

  return login_info.login ? (
    <Article onLogout={onLogout} login_info={login_info} />
  ) : (
    <Login onLogin={onLogin} />
  );
}
