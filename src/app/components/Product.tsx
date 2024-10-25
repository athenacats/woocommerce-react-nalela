import DOMPurify from "dompurify";
import Link from "next/link";

export default function Product({ product }: any) {
  const sanitizeHtml = (html: any) => {
    if (typeof window !== "undefined") {
      return DOMPurify.sanitize(html);
    }
    return html;
  };

  return (
    <div className="card" style={{ maxWidth: "24rem" }}>
      <div className="card-body">
        <Link
          href={`/product/${product.slug}`}
          className="text-decoration-none"
        >
          <img
            srcSet={product.srcSet}
            src={product.src}
            className="card-img-top img-fluid"
            alt="..."
          />

          <h4 className="card-title">{product.name}</h4>
        </Link>
        <h6
          className="card-subtitle mb-2 text-muted"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(product.price),
          }}
        ></h6>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(product.shortDescription),
          }}
        ></div>
        <div className="d-flex gap-2 ">
          <button type="button" className="btn btn-primary">
            Buy Now
          </button>
          <Link href={`/product/${product.slug}`}>
            <button type="button" className="btn btn-secondary">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
