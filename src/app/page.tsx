import ProductIndex from "./components/ProductIndex";

export default async function Home() {
  return (
    <>
      <main className="container d-flex flex-wrap gap-2 justify-content-around">
        <ProductIndex />
      </main>
    </>
  );
}
