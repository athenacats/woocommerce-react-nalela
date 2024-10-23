import Header from "./components/Header";
import Product from "./components/Product";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="container-fluid">
        <Product />
      </main>
    </>
  );
}
