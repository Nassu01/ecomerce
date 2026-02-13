import Categorie from "./Categorie";

const categories = [
  { icon: "📱", name: "Téléphone & Tablette" },
  { icon: "📺", name: "TV & High Tech" },
  { icon: "💻", name: "Informatique" },
  { icon: "🏠", name: "Maison, Cuisine & Bureau" },
  { icon: "🔌", name: "Électroménager" },
  { icon: "👕", name: "Vêtements & Chaussures" },
  { icon: "💄", name: "Beauté & Santé" },
  { icon: "🎮", name: "Jeux Vidéos & Consoles" },
  { icon: "🛒", name: "Supermarché" },
  { icon: "⚽", name: "Sports & Loisirs" },
  { icon: "👶", name: "Bébé & Jouets" },
  { icon: "🧸", name: "Jouets et Jeux" },
  { icon: "🐶", name: "Animalerie" },
  { icon: "🚗", name: "Accessoire Auto Moto" },
  { icon: "📚", name: "Bibliothèque : Livres & Papeterie" },
  { icon: "🎸", name: "Instruments de Musique" },
  { icon: "🌿", name: "Jardin et Plein Air" },
  { icon: "🏭", name: "Industriel & Scientifique" },
  { icon: "🏪", name: "Boutiques Officielles" },
  { icon: "🚚", name: "Livraison à 0 DH" },
  { icon: "📦", name: "Divers" },
];

function ListeCategories() {
  return (
    <div className="liste-categories">
      {categories.map((cat, i) => (
        <Categorie key={i} icon={cat.icon} name={cat.name} />
      ))}
    </div>
  );
}

export default ListeCategories;
