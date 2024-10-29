import { isEmpty } from "lodash";
import { getSession } from "./session";

export const getApiCart = () => {
  const config = {
    headers: {
      "nalela-session": true,
    },
  };

  const storedSession: any = getSession();

  if (!isEmpty(storedSession)) {
    config.headers["nalela-session"] = storedSession;
  }
  return config;
};
