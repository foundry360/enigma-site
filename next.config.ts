import type { NextConfig } from "next";

/* Static HTML export is disabled so /api/contact can send mail with Resend.
   Pages remain statically generated; only the contact route runs on the server. */
const nextConfig: NextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
