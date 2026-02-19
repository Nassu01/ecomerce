// src/components/layout/home/Home.jsx
import Header from "../header/Header";
import CartProduit from "../../Product/CartProduit";
import { mockData } from "../../../assets/products";

export default function Home() {
  return (
    <>
      <Header
        title="Welcome to Ecomerce"
        subtitle="Discover our best products"
      />

      <div className="home-content">
        <div className="products-grid">
          {mockData.map((p) => (
            <CartProduit
              key={p.id}
              id={p.id}
              img={p.image}
              titre={p.name}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
