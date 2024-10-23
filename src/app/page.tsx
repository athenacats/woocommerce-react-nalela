import Header from "./components/Header";

import ProductIndex from "./components/ProductIndex";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="container-fluid">
        <ProductIndex />
      </main>
    </>
  );
}
