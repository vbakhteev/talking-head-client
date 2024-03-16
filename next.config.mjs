/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [],
  },
  experimental: {
    urlImports: ["https://api-maps.yandex.ru/v3/?apikey=4d948484-d5b9-485d-81b7-6d2779fc702f&lang=en_US"],
  }
};

export default nextConfig;
