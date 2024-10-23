import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query PRODUCTS_QUERY {
    products(first: 20) {
      nodes {
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
  }
`;
