import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../baseQuery";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    list: builder.query({
      query: (payload) => {
        return {
          url: `/v1/blog/list?page_no=${payload.pageNo}&per_page=10`,
        }
      }
    }),
  }),
});

export const {
  useListQuery
} = productApi;