import { Metadata } from "next";
import "./styles/index.scss";
import "./globals.css";

export const metadata: Metadata = {
  title: "Woocommerce Nalela",
  description: "A woocommerce theme",
  icons: {
    icon: "favicon.ico",
  },
};

const Layout = (props: any) => {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/quartz/bootstrap.min.css"
        />
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default Layout;
