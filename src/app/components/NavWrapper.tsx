import client from "../lib/apolloClient";
import ApolloWrapper from "../lib/apolloProvider";
import { HEADER_QUERY } from "../lib/headerQuery";
import Navigation from "./Nav";

export default async function NavWrapper() {
  const { data } = await client.query({
    query: HEADER_QUERY,
  });

  return <Navigation data={data} />;
}
