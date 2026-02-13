import Navbar from "./components/layout/header/Navbar";
import Header from "./components/layout/header/Header";
import CartProduit from "./components/Product/CartProduit";
import Footer from "./components/layout/footer/Footer";

export default function App() {

  const cartCount = 0;

  const produit = {
    img: "https://via.placeholder.com/150",
    titre: "Produit Test",
    price: 250
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar cartCount={cartCount} />

      <Header 
        title="Produit"
        subtitle="Détails du produit"
      />

      <main className="p-6">
        <CartProduit 
          img={produit.img}
          titre={produit.titre}
          price={produit.price}
        />
      </main>

      <Footer />
    </div>
  );
}
