// ProductList.tsx (Client Component)
"use client";

import { useEffect, useState } from "react";
import Product from "./Product";
import client from "../lib/apolloClient";
import { PRODUCTS_QUERY } from "../lib/productsQuery";

interface ProductType {
  id: string;
  name: string;
  description: string;
  price: string;
  srcset: string;
  src: string;
  shortDescription: string;
  slug: string;
  sourceUrl: string;
  image: ImageType;
}

interface ImageType {
  sourceUrl: string;
  srcSet: string;
}

interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
}

interface ProductListProps {
  initialProducts: ProductType[];
  initialPageInfo: PageInfo;
}

export default function ProductList({
  initialProducts,
  initialPageInfo,
}: ProductListProps) {
  const [products, setProducts] = useState<ProductType[]>(initialProducts);
  const [pageInfo, setPageInfo] = useState<PageInfo>(initialPageInfo);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (cursor: string | null) => {
    setLoading(true);
    console.log("here");
    try {
      const { data } = await client.query({
        query: PRODUCTS_QUERY,
        variables: { first: 12, after: cursor },
      });
      console.log("new data", data);
      const newProducts = data.products.nodes.map((product: ProductType) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        srcset: product.image.srcSet,
        src: product.image.sourceUrl,
        shortDescription: product.shortDescription,
        slug: product.slug,
      }));

      setProducts((prev) => [...prev, ...newProducts]);
      setPageInfo(data.products.pageInfo);
    } catch (error) {
      console.error("error is", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (pageInfo.hasNextPage) {
      console.log("Fetching products after cursor:", pageInfo.endCursor);
      fetchProducts(pageInfo.endCursor);
    }

    console.log(typeof pageInfo.endCursor);
  };

  console.log(products);

  return (
    <div className="d-flex flex-column">
      <div className="container d-flex flex-wrap gap-2 justify-content-around">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}{" "}
      </div>
      {pageInfo.hasNextPage && (
        <button onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}
