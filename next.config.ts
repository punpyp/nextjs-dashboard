// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   experimental: {
//     ppr: "incremental",
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: false, // Disable Persistent Pages Rendering
  },
};

export default nextConfig;
