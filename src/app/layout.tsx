import { Metadata } from "next";
import "./styles/index.scss";
import "./globals.css";

export const metadata: Metadata = {
  title: "Woocommerce Nalela tHEME",
  description: "A woocommerce theme",
  icons: {
    icon: "favicon.ico",
  },
};

const Layout = (props: any) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

export default Layout;
