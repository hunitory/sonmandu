/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['sonmando.s3.ap-northeast-2.amazonaws.com'],
  },
}

export default nextConfig
