/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ເພີ່ມບັນທັດນີ້
  images: {
    unoptimized: true, // ຈຳເປັນສຳລັບ Static export
  },
};

export default nextConfig;