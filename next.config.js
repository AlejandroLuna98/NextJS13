const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  images: {
    remotePatterns: [
      {
        hostname: "rickandmortyapi.com",
      },
    ],
  },
};

export default nextConfig;
