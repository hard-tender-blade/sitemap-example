/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://domain.com", //  Replace with your site URL
  outDir: "./out", //  Replace with your out directory (build result)
  exclude: ["/admin", "/admin/**", "/admin/**/**", "/admin/**/**/**"], // You can exclude multiple routes

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

  // ...other options
};
