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
        name: 'luke-josten',
        short_name: 'luke-josten',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
