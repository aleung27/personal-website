module.exports = {
  siteMetadata: {
    siteUrl: "https://www.adam-leung.com",
    title: "Adam Leung - Software Engineer | Personal Website",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-smoothscroll",
    "gatsby-transformer-gitinfo",
    "gatsby-optional-chaining",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-emotion",
      options: {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
            edges {
              node {
                fields {
                  gitLogLatestDate
                }
                name
              }
            }
          }
        }`,
        resolvePages: ({
          allSitePage: { nodes: sitePages },
          allFile: { edges: pageFiles },
        }) => {
          return sitePages.map((page) => {
            const pageFile = pageFiles.find(({ node }) => {
              const fileName = node.name === "index" ? "/" : `/${node.name}/`;
              return page.path === fileName;
            });

            return { ...page, ...pageFile?.node?.fields };
          });
        },
        serialize: ({ path, gitLogLatestDate }) => {
          return {
            url: path,
            lastmod: gitLogLatestDate,
          };
        },
        createLinkInHead: true,
      },
    },
    {
      resolve: "gatsby-plugin-html-comments",
      options: {
        files: ["./public/**/*.html", "./public/*.html"],
        comment: [
          {
            regexp: /<ct><\/ct>/g,
            comment: `
<!--                                                                                          
AAA               DDDDDDDDDDDDD                  AAA               MMMMMMMM               MMMMMMMM
A:::A              D::::::::::::DDD              A:::A              M:::::::M             M:::::::M
A:::::A             D:::::::::::::::DD           A:::::A             M::::::::M           M::::::::M
A:::::::A            DDD:::::DDDDD:::::D         A:::::::A            M:::::::::M         M:::::::::M
A:::::::::A             D:::::D    D:::::D       A:::::::::A           M::::::::::M       M::::::::::M
A:::::A:::::A            D:::::D     D:::::D     A:::::A:::::A          M:::::::::::M     M:::::::::::M
A:::::A A:::::A           D:::::D     D:::::D    A:::::A A:::::A         M:::::::M::::M   M::::M:::::::M
A:::::A   A:::::A          D:::::D     D:::::D   A:::::A   A:::::A        M::::::M M::::M M::::M M::::::M
A:::::A     A:::::A         D:::::D     D:::::D  A:::::A     A:::::A       M::::::M  M::::M::::M  M::::::M
A:::::AAAAAAAAA:::::A        D:::::D     D:::::D A:::::AAAAAAAAA:::::A      M::::::M   M:::::::M   M::::::M
A:::::::::::::::::::::A       D:::::D     D:::::DA:::::::::::::::::::::A     M::::::M    M:::::M    M::::::M
A:::::AAAAAAAAAAAAA:::::A      D:::::D    D:::::DA:::::AAAAAAAAAAAAA:::::A    M::::::M     MMMMM     M::::::M
A:::::A             A:::::A   DDD:::::DDDDD:::::DA:::::A             A:::::A   M::::::M               M::::::M
A:::::A               A:::::A  D:::::::::::::::DDA:::::A               A:::::A  M::::::M               M::::::M
A:::::A                 A:::::A D::::::::::::DDD A:::::A                 A:::::A M::::::M               M::::::M
AAAAAAA                   AAAAAAADDDDDDDDDDDDD   AAAAAAA                   AAAAAAAMMMMMMMM               MMMMMMMM

\\-(o)-(o)-/ You found the secret ascii art cache. Check out the src code @ https://github.com/aleung27 \\-(o)-(o)-/
-->
            `,
          },
        ],
      },
    },
  ],
};
