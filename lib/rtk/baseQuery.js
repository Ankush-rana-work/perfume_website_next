import { fetchBaseQuery } from "@reduxjs/toolkit/query";


export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL+'/api',
  prepareHeaders: (headers, { getState }) => {
    const { user } = getState().auth;
    if (user) {
      headers.set('Authorization', user.accessToken);
    }
    return headers
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
/*   if (result.error && result.error.status === 401) {
    const { user } = api.getState().auth;
    const refreshResult = await baseQuery({ 
      url: '/Auth/refresh-token',
      method: 'POST',
      headers:{
        RefreshToken :user.refreshToken
      }
    }, api, extraOptions)
    if (refreshResult.data) {
      api.dispatch(updateRefeshTokenAndToken(refreshResult.data))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logout())
    }

  } */
  return result
}