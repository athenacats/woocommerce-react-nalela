import Head from "next/head";
import Header from "./components/Header";
import { Metadata } from "next";

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
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/quartz/bootstrap.min.css"
        />
      </head>
      <body>
        <Header />
        {props.children}
      </body>
    </html>
  );
};

export default Layout;
