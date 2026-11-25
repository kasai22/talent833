import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Hiring was split into Executive Hiring and Bulk Hiring; keep the old URL working.
  async redirects() {
    return [
      { source: "/services/executive-search", destination: "/services/hiring/executive-hiring", permanent: true },
      // Older links pointed at a /training page; the programmes are listed on the Corporate Training page.
      // Temporary, so a dedicated /training page can replace it later.
      { source: "/training", destination: "/services/signature-programmes", permanent: false },
    ];
  },
  // The brochure route reads these files to attach them to emails.
  outputFileTracingIncludes: {
    "/api/brochure": ["./public/brochures/**/*"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
