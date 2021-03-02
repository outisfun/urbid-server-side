const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        nominations: allNomination {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const nominations = result.data.nominations.edges;
      nominations.forEach((nomination, i) => {
        const slug = nomination.node.slug;
        // const nextSlug = projects[(i === projects.length - 1) ? (0) : (i + 1)].node.slug;
        if (i < 3) {
          createPage({
            path: `/nominations/${slug}`,
            component: path.resolve(`./src/templates/nomination.js`),
            context: {
              slug: slug,
            },
          });
        }
      });

      resolve();
    });
  });
};
