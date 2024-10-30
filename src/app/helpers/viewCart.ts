import axios from "axios";
import { getApiCart } from "./api";
import { CART_ENDPOINT } from "./endPoints";

export const viewCart = () => {
  const addOrViewCart = getApiCart();

  axios
    .get(CART_ENDPOINT, addOrViewCart)
    .then((res) => {
      console.log("resr", res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
