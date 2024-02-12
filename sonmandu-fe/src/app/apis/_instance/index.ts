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
          const refreshToken = localStorage.getItem('refresh_token');

          const { data: newAccessToken } = await axios.post(
            `${process.env.NEXT_PUBLIC_DEVELOP_END_POINT}/members/token`,
            {
              refreshToken: refreshToken,
            },
          );
          localStorage.setItem('access_token', newAccessToken.token);

          originRequest.headers['Authorization'] = `Bearer ${newAccessToken.token}`;
          originRequest.headers['Content-Type'] = contentType;

          return await axios(originRequest);
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
