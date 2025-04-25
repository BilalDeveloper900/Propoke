/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'solidstayproperties.s3.eu-west-2.amazonaws.com',
        },
      ],
    },
  }

export default nextConfig;
