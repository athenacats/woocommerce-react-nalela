import DOMPurify from "dompurify";

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
        <img
          srcSet={product.srcSet}
          src={product.src}
          className="card-img-top img-fluid"
          alt="..."
        />
        <h4 className="card-title">{product.name}</h4>
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
          <button type="button" className="btn btn-secondary">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
