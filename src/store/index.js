import { configureStore } from "@reduxjs/toolkit";

import siteReducers from "./site";

export default configureStore({
  reducer: {
    site: siteReducers,
  },
});
