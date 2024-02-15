/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sonmando.s3.ap-northeast-2.amazonaws.com',
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

// /*/*/*/*
// https://
// sonmando.s3.ap-northeast-2.amazonaws.com
// /2024
// /02
// /13
// /bba44c18-be1b-403b-91fa-b71a70ceb25a.jpg
