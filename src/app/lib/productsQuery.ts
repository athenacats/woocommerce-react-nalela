import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query PRODUCTS_QUERY($first: Int!, $after: String) {
    products(first: $first, after: $after) {
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
