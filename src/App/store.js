import { configureStore } from "@reduxjs/toolkit";

import auth from "./features/authSlice";
import settings from "./features/settingsSlice";
import chat from "./features/chatSlice";

export default configureStore({
  reducer: {
    auth,
    settings,
    chat,
  },
});
