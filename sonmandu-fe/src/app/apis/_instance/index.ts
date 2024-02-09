import axios from 'axios';

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

  dynamicContentInstance.interceptors.response.use(
    (response) => response,
    async (err) => {
      const {
        config: originRequest,
        response: { status },
      } = err;

      if (status === 401) {
        if (err.response.data.error === 'UNAUTHORIZED') {
          const accessToken = localStorage.getItem('access_token');
          const refreshToken = localStorage.getItem('refresh_token');

          originRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          originRequest.headers['x-refresh-token'] = refreshToken;
          originRequest.headers['Content-Type'] = contentType;

          return await axios(originRequest).then((res) => {
            const newAccessToken = res.headers['authorization'];
            localStorage.setItem('access_token', newAccessToken);
            console.log(`newAccessToken :`, newAccessToken);

            return res;
          });
        }
      }
      console.log('response err', err);
      return Promise.reject(err);
    },
  );

  return dynamicContentInstance;
};

export const instanceJsonContent = customInstance('application/json');
export const instanceMultipartContent = customInstance('multipart/form-data');
