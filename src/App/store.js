import { configureStore } from "@reduxjs/toolkit";

import auth from "./features/authSlice";
import chat from "./features/chatSlice";

export default configureStore({
  reducer: {
    auth,
    chat,
  },
});
