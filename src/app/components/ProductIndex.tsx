import Product from "./Product";
import client from "../lib/apolloClient";
import ApolloWrapper from "../lib/apolloProvider";
import { PRODUCTS_QUERY } from "../lib/productsQuery";

export default async function ProductIndex() {
  const { data } = await client.query({
    query: PRODUCTS_QUERY,
  });
  const products = data.products.nodes.map((product: any) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    srcset: product.image.srcSet,
    src: product.image.sourceUrl,
  }));
  return (
    <ApolloWrapper>
      {products.map((product: any) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </ApolloWrapper>
  );
}
