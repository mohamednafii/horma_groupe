import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* AVIF first, WebP as the fallback: both are smaller than the JPEG/PNG
       originals, and next/image picks per request. */
    formats: ["image/avif", "image/webp"],
    /* A year in the browser cache; the URL changes when the source does. */
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
