import axios from 'axios';

// qweqweqwe1
// 123123123

const customInstance = (contentType: string) => {
  const dynamicContentInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DEVELOP_END_POINT,
    headers: {
      'Content-Type': contentType,
    },
  });

  dynamicContentInstance.interceptors.request.use((config) => {
    if (typeof window !== undefined) {
      const token = localStorage.getItem('access_token');
      // const token = '';  // 로그인권한 토큰 여기에
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  return dynamicContentInstance;
};

export const instanceJsonContent = customInstance('application/json');
export const instanceMultipartContent = customInstance('multipart/form-data');

// Authorization: `Bearer ${token}`
// x-refresh-token: `${refreshToken}`

// const responseInterceptorSetting = (instance: AxiosInstance) => {
//   instance.interceptors.response.use(
//     (response) => response,
//     async (err) => {
//       const {
//         config: originalRequest,
//         response: { status },
//       } = err;

//       if (status === 401) {
//         console.log('!!!!! IN 401 !!!!!');
//         if (err.response.data.body === 'unauthorized') {
//           console.log('!!!!! IN EXPIRED !!!!!');
//           const refreshToken = localStorage.getItem('refresh_token');
//           // token refresh 요청

//           const { data } = await instanceJsonContent.post(
//             `/auth/refreshToken`, // token refresh api
//             {},
//             {
//               headers: {
//                 Authorization: `Bearer ${accessToken}`,
//                 'x-refresh-token': `${refreshToken}`,
//               },
//             },
//           );

//           const { apiToken: newAccessToken, refreshToken: newRefreshToken } =
//             data;
//           localStorage.setItem('access_token', newAccessToken);
//           localStorage.setItem('refresh_token', newRefreshToken);
//           originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
//           // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
//           return axios(originalRequest);
//         }
//       }
//       // Any status codes that falls outside the range of 2xx cause this function to trigger
//       // Do something with response err
//       console.log('response err', err);
//       return Promise.reject(err);
//     },
//   );
// };
