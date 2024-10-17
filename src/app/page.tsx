import { ApolloProvider } from "@apollo/client";
import Header from "./components/Header";
import client from "./lib/apolloClient";
import { HEADER_QUERY } from "./lib/headerQuery";
import ApolloWrapper from "./lib/apolloProvider";

export default async function Home() {
  const { data } = await client.query({
    query: HEADER_QUERY,
  });
  return (
    <>
      <ApolloWrapper>
        <Header />
        <h1>{data.generalSettings.title}</h1>
        <nav>
          <ul>
            {data.menus.nodes[0].menuItems.edges.map(({ node }: any) => (
              <li key={node.id}>
                <a href={node.path}>{node.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-red-500">Hello</p>
      </ApolloWrapper>
    </>
  );
}
