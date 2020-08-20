const UPDATE = "youtube/UPDATE" as const;
const RESET = "youtube/RESET" as const;

export const updateData = (youtube: Youtube) => ({
  type: UPDATE,
  youtube,
});
export const resetData = () => ({
  type: RESET,
});

type YoutubeAction =
  | ReturnType<typeof updateData>
  | ReturnType<typeof resetData>;

export enum pageName {
  InputData = "INPUT",
  Download = "DOWNLOAD",
}

export interface Youtube {
  id: string | undefined;
  fileName: string | undefined;
  pageName: pageName;
}

const initialState: Youtube = {
  id: undefined,
  fileName: undefined,
  pageName: pageName.InputData,
};

export function Index(state: Youtube = initialState, action: YoutubeAction) {
  switch (action.type) {
    case UPDATE:
      const { youtube } = action;
      return {
        id: youtube.id,
        fileName: youtube.fileName,
        pageName: youtube.pageName,
      };
    case RESET:
      console.log(action);

      return initialState;
    default:
      return state;
  }
}

export default Index;
