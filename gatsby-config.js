module.exports = {
  siteMetadata: {
    title: "DimensionP3 - ゲーム合宿企画 | ToC",
    author: "Naga(ToC)",
    description: "ゲーム合宿企画のキャンペーンページ。SPA実験用サイト"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'DimensionP3',
        short_name: 'DP3',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/dice-icon-red.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
