import { createSlice } from "@reduxjs/toolkit";
import users from "../../Utils/users";

const findUser = (user) => {
  let foundUser;
  users.forEach((info) => {
    if (user.email === info.email) {
      foundUser = info;
    } else {
      foundUser = false;
    }
  });
  return foundUser;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      success: false,
      message: "Not logged in",
    },
  },
  reducers: {
    signIn: (state, action) => {
      const credentials = action.payload;
      const user = findUser(credentials);
      if (!user) {
        const data = {
          success: false,
          message: "User not found",
        };
        state.value = data;
      } else if (
        credentials.password === user.password &&
        credentials.email === user.email
      ) {
        const data = {
          success: true,
          data: user,
        };
        state.value = data;
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        const data = {
          success: false,
          message: "Invalid credentials",
        };
        state.value = data;
      }
    },
    signOut: (state) => {
      const data = {
        success: false,
        message: "Signed out successfully",
      };
      state.value = data;
      localStorage.setItem("user", JSON.stringify(data));
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
