import { Metadata } from "next";
import "./styles/index.scss";
import "./globals.css";
import "bootswatch/dist/quartz/bootstrap.min.css";

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
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        ></link>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
          integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
        ></script>
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default Layout;
