export default function AddToCart(product: any) {
  return (
    <button
      onClick={() => addToCart(product?.id ?? 0)}
      type="button"
      className="btn btn-primary"
    >
      Buy Now
    </button>
  );
}
