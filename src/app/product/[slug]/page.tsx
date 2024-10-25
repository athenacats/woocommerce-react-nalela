import client from "@/app/lib/apolloClient";
import { GET_PRODUCT } from "@/app/lib/singleProductQuery";
import DOMPurify from "dompurify";

export default async function page({ params }: any) {
  const { slug } = params;

  const { data } = await client.query({
    query: GET_PRODUCT,
    variables: { slug },
  });
  const sanitizeHtml = (html: any) => {
    if (typeof window !== "undefined") {
      return DOMPurify.sanitize(html);
    }
    return html;
  };

  return <p>{data.product.name}</p>;
}
