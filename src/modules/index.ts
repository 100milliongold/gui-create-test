import { combineReducers } from "redux";
import youtube from "./youtube";

const rootReducer = combineReducers({
  youtube,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
