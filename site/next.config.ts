import type { NextConfig } from "next";
// The Docker deployment needs Next.js standalone output; Cloudflare Workers
// uses vinext's own output and must not generate the Node standalone server.
const nextConfig: NextConfig = {
  ...(process.env.VINEXT_BUILD ? {} : { output: "standalone" }),
  poweredByHeader: false,
};
export default nextConfig;
