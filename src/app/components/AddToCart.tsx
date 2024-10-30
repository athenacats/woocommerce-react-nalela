import { addToCart } from "../helpers/addToCart";

export default function AddToCart(product: any) {
  return (
    <button
      onClick={() => addToCart(product?.id ?? 0)}
      type="button"
      className="btn btn-primary"
    >
      Add To Cart
    </button>
  );
}
