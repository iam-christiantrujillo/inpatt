/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"], // 👈 HERE
  }
};

export default nextConfig;
