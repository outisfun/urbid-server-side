import React, { useEffect, useState } from 'react';
//import { withRouter } from 'react-router-dom';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  return <Layout>{JSON.stringify(data.nomination)}</Layout>;
};

export const query = graphql`
  query NominationPageQuery($slug: String!) {
    nomination: nomination(slug: { eq: $slug }) {
      slug
      title
      status
      user {
        displayName
        uid
      }
      countComments
      countVotes
      createdAt
      description
      imageUrls
      address {
        city
        formattedAddress
        neighborhood
        position {
          lat
          lng
        }
      }
    }
  }
`;
