import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";
import userReducer from "./store/slices/userSlice";

const middleware = [thunkMiddleware, thunk];

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware,
});

export default store;
