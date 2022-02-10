module.exports = {
  siteMetadata: {
      title: `atlasxavier.com`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-3EJV664NT4"
    }
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      typekit: {
        id: process.env.TYPEKIT_ID,
      }
    }
  }
]
};