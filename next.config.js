/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // liberar o domínio com as imagens
  images: {
    domains: ["source.unsplash.com"],
  },
}

module.exports = nextConfig
