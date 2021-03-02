import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query {
            nominations: allNomination {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `}
        render={data => {
          console.log('my data', data);
          return (
            <header>
              <h1>header</h1>
            </header>
          );
        }}
      />
    </Layout>
  );
};

// export const query = graphql(`
//   query NominationsQuery {
//     nominations: allNomination {
//       edges {
//         node {
//           slug
//         }
//       }
//     }
//   }
// `);
