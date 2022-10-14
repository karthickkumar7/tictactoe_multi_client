import { configureStore } from "@reduxjs/toolkit";

import ttt from "./features/tttSlice";

export default configureStore({
    reducer: {
        ttt,
    },
});
