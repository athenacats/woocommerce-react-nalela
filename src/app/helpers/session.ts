import { isEmpty } from "lodash";

export const storeSession = (session: string) => {
  if (isEmpty(session)) {
    return null;
  }
  localStorage.setItem("nalela-session", session);
};

export const getSession = () => {
  return localStorage.getItem("nalela-session");
};
