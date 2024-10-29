import { Metadata } from "next";
import "./styles/index.scss";
import "./globals.css";
import "bootswatch/dist/quartz/bootstrap.min.css";
import client from "./lib/apolloClient";
import { HEADER_QUERY } from "./lib/headerQuery";
import Header from "./components/Header";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await client.query({
    query: HEADER_QUERY,
  });
  console.log(data.mediaItems.nodes[0].sourceUrl);
  return {
    title: data.generalSettings.title || "Default",
    description: data.generalSettings.description || "Default",
    icons: {
      icon: data.mediaItems.nodes[0].sourceUrl,
    },
  };
}

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
          crossOrigin="anonymous"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
          integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
          crossOrigin="anonymous"
        ></script>
        <script defer type="text/javascript" src="dist/purify.min.js"></script>
      </head>
      <body>
        <Header />
        <main className="container">{props.children}</main>
      </body>
    </html>
  );
};

export default Layout;
