import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../features/auth/authSlice";

//  Create Store

const store = configureStore({
  reducer: {
    auth: authreducer,
  },
  middleware: (getDefualtMiddlewares) => getDefualtMiddlewares(),
  devTools: true,
});

// Export

export default store;
