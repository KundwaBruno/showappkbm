import { configureStore } from "@reduxjs/toolkit";
import authActions from "./Actions/auth";
import themeActions from "./Actions/theme";
import loadingActions from "./Actions/loading";

export default configureStore({
  reducer: {
    auth: authActions,
    theme: themeActions,
    loading: loadingActions,
  },
});
