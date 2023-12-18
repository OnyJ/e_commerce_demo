import { combineReducers } from "redux";
import shopItemReducer from "./shopItemReducer";

const rootReducer = combineReducers({
  shopItems: shopItemReducer,
});

export default rootReducer;
