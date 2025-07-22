/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/krs-ti",
        destination:
          "https://www.canva.com/design/DAGt48z9CcI/OJv2gCSPpBJbcfMX8kspLA/edit?utm_content=DAGt48z9CcI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
