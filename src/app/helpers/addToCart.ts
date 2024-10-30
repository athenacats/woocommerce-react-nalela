import axios from "axios";
import { getApiCart } from "./api";
import { getSession, storeSession } from "./session";
import { CART_ENDPOINT } from "./endPoints";
import { isEmpty } from "lodash";

export function addToCart(productId: number, qty = 1) {
  const storedSession = getSession();
  const addOrViewCart = getApiCart();

  axios
    .post(
      CART_ENDPOINT,
      {
        product_Id: productId,
        quantity: qty,
      },
      addOrViewCart
    )
    .then((res) => {
      if (isEmpty(storedSession)) {
        storeSession(res?.headers?.["nalela-session"]);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
