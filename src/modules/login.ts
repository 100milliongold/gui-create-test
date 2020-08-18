const LOGIN = "login/LOGIN" as const;

export const login = (login: LoginState) => ({
  type: LOGIN,
  login,
});

type LoginAction = ReturnType<typeof login>;

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
      return {
        id: state.id,
        pw: state.pw,
        galleryName: state.galleryName,
        login: true,
      };
    default:
      return state;
  }
}

export default index;
