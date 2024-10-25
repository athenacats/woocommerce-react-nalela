import { gql } from "@apollo/client";
import client from "./apolloClient";

export const GET_PRODUCT = gql`
  query GET_PRODUCT($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      image {
        altText
        uri
        srcSet
        sourceUrl
        title
      }
      description
      name
      shortDescription
      slug
      ... on SimpleProduct {
        id
        name
        price
      }
    }
  }
`;
