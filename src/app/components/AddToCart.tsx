import { addToCart } from "../helpers/addToCart";

export default function AddToCart(product: any) {
  console.log(product.product);
  console.log(product.product.id);
  return (
    <button
      onClick={() => addToCart(product.product?.id ?? 0)}
      type="button"
      className="btn btn-primary"
    >
      Add To Cart
    </button>
  );
}
