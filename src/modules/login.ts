const LOGIN = "login/LOGIN" as const;
const LOGOUT = "login/LOGOUT" as const;

export const login = (login: LoginState) => ({
  type: LOGIN,
  login,
});

export const logout = () => ({ type: LOGOUT });

type LoginAction = ReturnType<typeof login> | ReturnType<typeof logout>;

export interface LoginState {
  id: string;
  pw: string;
  galleryName: string;
  login: boolean;
}

const initialState: LoginState = {
  id: "",
  pw: "",
  galleryName: "",
  login: false,
};

export function index(state: LoginState = initialState, action: LoginAction) {
  switch (action.type) {
    case LOGIN:
      const { login } = action;
      return {
        id: login.id,
        pw: login.pw,
        galleryName: login.galleryName,
        login: login.login,
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
}

export default index;
