/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://domain.com",
  outDir: "./out",
  exclude: ["/admin", "/admin/**", "/admin/**/**", "/admin/**/**/**"],
  sitemapSize: 7000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin", "/admin/**", "/admin/**/**", "/admin/**/**/**"],
      },
    ],
  },
};
