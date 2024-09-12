import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getDataEndpoint } from '../Components/Home/dataApi';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.REACT_APP_API_BASE_URL }),
    reducerPath: 'auth',
    tagTypes: [
      'data'
    ],
    endpoints: (build) => ({
       
        getData: getDataEndpoint(build),
       
    }),
});

export const {
   
    useGetDataQuery,
    
} = api;
