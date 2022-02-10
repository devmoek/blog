module.exports = {
  siteMetadata: {
    title: `moek's blog`,
    author: `Michael Myers`,
    description: `Fullstack Developer talking about Web Development and Freelance`,
    siteUrl: `https://www.yourdomain.tld`,
    social: [{
      name: `Twitter`,
      url: `https://twitter.com/codemoek`,
    },
    {
      name: `GitHub`,
      url:`https://github.com/codemoek`,
    },
    {
      name: `Instagram`,
      url:`https://instagram.com/codemoek`,
    },
    {
      name: `Facebook`,
      url:`https://facebook.com/codemoek`,
    },
  ],
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-201774409-1",
      head: false,
      anonymize: true,
      pageTransitionDelay: 0,
      defer: false,
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "example.com",
      enableWebVitalsTracking: true
    },
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "posts",
      "path": "./src/posts/"
    },
    __key: "posts"
  },
  {
    resolve: `gatsby-plugin-offline`,
    options: {
      precachePages: [`pages/*`],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `moek's blog`,
      short_name: `moek's blog`,
      start_url: `/`,
      icon: 'icon.svg',
      cache_busting_mode: 'none',
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
    }
  },
  {
    resolve: "gatsby-plugin-sitemap",
    options: {
      query: `
      {
        allSitePage {
          nodes {
            path
          }
        }
        allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
          nodes {
            ... on WpPost {
              uri
              modifiedGmt
            }
            ... on WpPage {
              uri
              modifiedGmt
            }
          }
        }
      }
    `,
      resolveSiteUrl: () => siteUrl,
      resolvePages: ({
        allSitePage: { nodes: allPages },
        allWpContentNode: { nodes: allWpNodes },
      }) => {
        const wpNodeMap = allWpNodes.reduce((acc, node) => {
          const { uri } = node
          acc[uri] = node

          return acc
        }, {})

        return allPages.map(page => {
          return { ...page, ...wpNodeMap[page.path] }
        })
      },
      serialize: ({ path, modifiedGmt }) => {
        return {
          url: path,
          lastmod: modifiedGmt,
        }
      },
    },
  }
]
};