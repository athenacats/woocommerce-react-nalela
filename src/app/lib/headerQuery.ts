import { gql } from "@apollo/client";

export const HEADER_QUERY = gql`
  query HEADER_QUERY {
    menus(where: { location: PRIMARY }) {
      nodes {
        id
        databaseId
        name
        locations
        menuItems {
          edges {
            node {
              id
              label
              parentId
              path
            }
          }
        }
      }
    }
    generalSettings {
      title
      url
    }
  }
`;
