import { configureStore } from "@reduxjs/toolkit";

import siteReducers from "./site";
import userReducers from "./user";
import categoryReducers from "./category";

export default configureStore({
  reducer: {
    site: siteReducers,
    user: userReducers,
    category: categoryReducers,
  },
});
