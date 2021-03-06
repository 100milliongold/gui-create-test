const UPDATE = "youtube/UPDATE" as const;
const SET_FILE_PATH = "youtube/SET_FILE_PATH" as const;
const SET_ID = "youtube/SET_ID" as const;
const SET_FILE_NAME = "youtube/SET_FILE_NAME" as const;
const SET_MODE = "youtube/SET_MODE" as const;
const SET_FFMPEG_PATH = "youtube/SET_FFMPEG_PATH" as const;

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
export const setMode = (mode: YOUTUBE_MODE) => ({
  type: SET_MODE,
  mode,
});

export const setFfmpegPath = (ffmpeg_path: string) => ({
  type: SET_FFMPEG_PATH,
  ffmpeg_path,
});

type YoutubeAction =
  | ReturnType<typeof updateData>
  | ReturnType<typeof setFilePath>
  | ReturnType<typeof setFileName>
  | ReturnType<typeof setId>
  | ReturnType<typeof resetData>
  | ReturnType<typeof setMode>
  | ReturnType<typeof setFfmpegPath>;

export enum YOUTUBE_MODE {
  InputData = "INPUT",
  Download = "DOWNLOAD",
}

export interface Youtube {
  id: string | undefined;
  filePath: string | undefined;
  mode: YOUTUBE_MODE;
  ffmpeg_path: string | undefined;
}

const initialState: Youtube = {
  id: "",
  filePath: "",
  mode: YOUTUBE_MODE.InputData,
  ffmpeg_path: "",
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

    case SET_MODE:
      const { mode } = action;
      return {
        ...state,
        mode,
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

    case SET_FFMPEG_PATH:
      const { ffmpeg_path } = action;
      return {
        ...state,
        ffmpeg_path,
      };
    case RESET:
      return initialState;

    default:
      return state;
  }
}

export default Index;
