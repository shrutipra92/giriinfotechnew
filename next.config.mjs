/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pakhiweb.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'wallpapercave.com',
      },
      {
        protocol: 'https',
        hostname: 'websiteimagessb.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'digitalengage.net',
      },
      {
        protocol: 'https',
        hostname: 'rentblob.blob.core.windows.net',
      },
    ],
  }
};

export default nextConfig;
