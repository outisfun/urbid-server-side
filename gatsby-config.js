// require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Urbid',
    description: 'Urbid',
    url: '',
    image: 'src/assets/preview-image.jpg',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-transition-link',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Urbid Server Side x Gatsby`,
        short_name: `Highsnobiety`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require('./firebase-key.json'),
        types: [
          {
            type: 'Nomination',
            collection: 'nominations',
            map: doc => {
              return doc;
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
};
