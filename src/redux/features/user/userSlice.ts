import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  user: unknown | null;
  token: string | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface ICredential {
  email: string;
  password: string;
}

const initialState: IUserState = {
  user: null,
  token: null,
  isLoading: false,
  isError: false,
  error: null,
};

// export const createUser = createAsyncThunk(
//   "user/createUser",
//   async ({ email, password }: ICredential) => {
//     const data = await createUserWithEmailAndPassword(auth, email, password);

//     return data.user.email;
//   }
// );

// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async ({ email, password }: ICredential) => {
//     const data = await signInWithEmailAndPassword(auth, email, password);

//     return data.user.email;
//   }
// );

const userSlice = createSlice({
  name: "user ",
  initialState,
  reducers: {
    setUserCredentials: (state, action: PayloadAction<string | null>) => {
      // const { user, accessToken } = action.payload;
      state.token = action.payload;
    },
    // setLoading: (state, action: PayloadAction<boolean>) => {
    //   state.isLoading = action.payload;
    // },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(createUser.pending, (state) => {
  //       state.isLoading = true;
  //       state.isError = false;
  //       state.error = null;
  //     })
  //     .addCase(createUser.fulfilled, (state, action) => {
  //       state.user.email = action.payload;
  //       state.isLoading = false;
  //     })
  //     .addCase(createUser.rejected, (state, action) => {
  //       state.user.email = null;
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.error = action.error.message!;
  //     })
  //     .addCase(loginUser.pending, (state) => {
  //       state.isLoading = true;
  //       state.isError = false;
  //       state.error = null;
  //     })
  //     .addCase(loginUser.fulfilled, (state, action) => {
  //       state.user.email = action.payload;
  //       state.isLoading = false;
  //     })
  //     .addCase(loginUser.rejected, (state, action) => {
  //       state.user.email = null;
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.error = action.error.message!;
  //     });
  // },
});

export const { setUserCredentials, logout } = userSlice.actions;

export default userSlice.reducer;
