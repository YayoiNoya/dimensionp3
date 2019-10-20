module.exports = {
  siteMetadata: {
    title: "DimensionP3 - ゲーム企画合宿 | ToC",
    author: "Naga(ToC)",
    description: "ゲーム合宿企画のキャンペーンページ。シングルページアプリケーション（SPA）の実験用サイト"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
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