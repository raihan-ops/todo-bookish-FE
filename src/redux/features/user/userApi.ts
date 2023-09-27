import { api } from "../../api/apiSlice";
import { setUserCredentials } from "./userSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postCreateUser: builder.mutation({
      query: ({ data }) => ({
        url: `/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user-tag"],
    }),
    postLoginUser: builder.mutation({
      query: ({ data }) => ({
        url: `/user/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user-tag"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("eikhan thei diche",result?.data?.data?.token);
          if (result?.data?.data?.token) {
            localStorage.setItem(
              "token",
              result?.data?.data?.token
            );
            dispatch(setUserCredentials(result?.data?.data?.token));
          }
        } catch (err) {}
      },
    }),
    getUserProfile: builder.query({

      query: () => `user/get-profile`,
      providesTags: ["user-tag"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          // if (result?.data?.data?.meta?.token) {
          //   localStorage.setItem(
          //     AUTH_TOKEN_KEY,
          //     result?.data?.data?.meta?.token
          //   );
          //   dispatch(setUserInfo(result.data?.data?.user));
          // }
        } catch (err) {}
      },
    }),
  }),
});

export const {
useGetUserProfileQuery,
usePostLoginUserMutation,
usePostCreateUserMutation
} = userApi;
