import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CartProduit from "./components/CartProduit";
import Categorie from "./components/Categorie";

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
      <Header />

      <main>
        <CartProduit 
          img={produit.img}
          titre={produit.titre}
          price={produit.price}
        />
      </main>

      <footer className="mt-10 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} Ecomerce
        </div>
      </footer>
    </div>
  );
}
