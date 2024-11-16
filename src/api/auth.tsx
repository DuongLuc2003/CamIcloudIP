import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface ApiResponse {
  message: string;
  accessToken: string;
  user: any; // Bạn có thể định nghĩa kiểu cho đối tượng user tại đây
}
interface AuthRegister {
    username: string;
    phone: string;
    address: string;
    iphone: string;
    loanAmount:string;
}
const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://sv-icloudip-production.up.railway.app',
    }),
    endpoints: (builder) => ({
        register: builder.mutation<ApiResponse, AuthRegister>({
            query: (credentials) => ({
                url: '/auth/register',
                method: 'POST',
                body: credentials,
            }),
        }),
        getAllUser: builder.query<ApiResponse, void>({
            query: () => '/auth/users', 
        }),
        getUser: builder.query<ApiResponse, void>({
            query: (id) => `/auth/users/${id}`, 
        }),
        removeUser: builder.mutation<ApiResponse, number>({
            query: (id) => ({
                url: `/auth/users/${id}`,
                method: 'DELETE',
            }),
        }),
        
    }),
});
export const { useRegisterMutation,
               useGetAllUserQuery,
               useGetUserQuery, 
               useRemoveUserMutation,  
               } = authApi;

export default authApi;