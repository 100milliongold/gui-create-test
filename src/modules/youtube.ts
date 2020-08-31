const UPDATE = "youtube/UPDATE" as const;
const SET_FILE_PATH = "youtube/SET_FILE_PATH" as const;
const SET_ID = "youtube/SET_ID" as const;
const SET_FILE_NAME = "youtube/SET_FILE_NAME" as const;

const RESET = "youtube/RESET" as const;

export const updateData = (youtube: Youtube) => ({
  type: UPDATE,
  youtube,
});

export const resetData = () => ({
  type: RESET,
});
export const setId = (id: string) => ({
  type: SET_ID,
  id,
});
export const setFileName = (fileName: string) => ({
  type: SET_FILE_NAME,
  fileName,
});
export const setFilePath = (filePath: string) => ({
  type: SET_FILE_PATH,
  filePath,
});

type YoutubeAction =
  | ReturnType<typeof updateData>
  | ReturnType<typeof setFilePath>
  | ReturnType<typeof setFileName>
  | ReturnType<typeof setId>
  | ReturnType<typeof resetData>;

export enum mode {
  InputData = "INPUT",
  Download = "DOWNLOAD",
}

export interface Youtube {
  id: string | undefined;
  filePath: string | undefined;
  mode: mode;
}

const initialState: Youtube = {
  id: "",
  filePath: "",
  mode: mode.InputData,
};

export function Index(state: Youtube = initialState, action: YoutubeAction) {
  console.log(action);
  switch (action.type) {
    case UPDATE:
      const { youtube } = action;
      return {
        id: youtube.id,
        filePath: youtube.filePath,
        mode: youtube.mode,
      };

    case SET_FILE_PATH:
      const { filePath } = action;
      return {
        ...state,
        filePath,
      };

    case SET_ID:
      const { id } = action;
      return {
        ...state,
        id,
      };

    case SET_FILE_NAME:
      const { fileName } = action;
      return {
        ...state,
        fileName,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
}

export default Index;
