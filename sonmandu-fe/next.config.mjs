/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

// {
//   protocol: 'https',
//   hostname: 'sonmando.s3.ap-northeast-2.amazonaws.com',
//   port: '',
//   pathname: '/**',
// },
