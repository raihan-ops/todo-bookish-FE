import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book/",
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ data }) => ({
        url: `/review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getComment: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useGetCommentQuery,
  usePostCommentMutation,
} = bookApi;
