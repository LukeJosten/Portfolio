module.exports = {
  siteMetadata: {
    title: "Luke Josten Portfolio",
    author: "Luke Josten",
    description: "Portfolio website for Luke Josten",
    keywords: "Luke Josten"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Luke Josten',
        short_name: 'Luke Josten',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143542181-1",
      },
    },
  ],
}
