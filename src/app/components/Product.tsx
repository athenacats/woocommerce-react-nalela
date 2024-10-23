export default function Product({ product }: any) {
  return (
    <div className="card">
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
          dangerouslySetInnerHTML={{ __html: product.price }}
        ></h6>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: product.shortDescription }}
        ></p>
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
