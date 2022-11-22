import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://5.189.130.79:2304/v1/',
  }),
  endpoints: builder => ({
    getAccountList: builder.mutation({
      query: credentials => ({
        url: 'account',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response, meta, arg) => response,
    }),
  }),
});

export const {useGetAccountListMutation} = accountApi;
