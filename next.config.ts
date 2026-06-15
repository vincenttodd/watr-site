import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Root forwards to the main site. `permanent: false` → 307 (not cached
        // hard by browsers/SEO), so this can be changed later if vincenttodd.com
        // ever gets its own homepage. The exact `/` source does not affect
        // /privacy or /terms.
        source: "/",
        destination: "https://toddagriscience.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
