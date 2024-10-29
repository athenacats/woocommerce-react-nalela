// ProductIndex.tsx (Server Component)
import ProductList from "./ProductWrapper";
import client from "../lib/apolloClient";
import { PRODUCTS_QUERY } from "../lib/productsQuery";
import ApolloWrapper from "../lib/apolloProvider";

export default async function ProductIndex() {
  const { data } = await client.query({
    query: PRODUCTS_QUERY,
    variables: { first: 12 },
  });

  const initialProducts = data.products.nodes.map((product: any) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    srcset: product.image.srcSet,
    src: product.image.sourceUrl,
    shortDescription: product.shortDescription,
    slug: product.slug,
  }));

  const initialPageInfo = data.products.pageInfo;
  console.log("initialPageInfo", initialPageInfo);

  return (
    <ApolloWrapper>
      <ProductList
        initialProducts={initialProducts}
        initialPageInfo={initialPageInfo}
      />
    </ApolloWrapper>
  );
}
