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

  return (
    <>
      <div
        className="card border-primary mb-3 mt-4 m-auto"
        style={{
          maxHeight: "90vh",
          maxWidth: "80vw",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div className="card-body d-flex flex-wrap">
          <img
            srcSet={data.product.image.srcSet}
            src={data.product.image.src}
            className="card-img-top img-fluid"
            alt="..."
            style={{ maxHeight: "auto", width: "50%" }}
          />
          <div className="w-50">
            <h4 className="card-title pt-2">{data.product.name}</h4>

            <h6
              className="card-subtitle mb-2 text-muted"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.product.price),
              }}
            ></h6>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.product.shortDescription),
              }}
            ></div>
            <button type="button" className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
