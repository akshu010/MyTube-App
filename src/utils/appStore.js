import { configureStore } from "@reduxjs/toolkit";
import appSLice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSLice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default store;
