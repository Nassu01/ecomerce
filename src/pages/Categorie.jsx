import { Link } from "react-router-dom";

function Categorie({ icon, name }) {
  return (
    <Link
      to={`/categorie/${name}`}
      className="categorie"
    >
      <span className="categorie-icon">{icon}</span>
      <span className="categorie-name">{name}</span>
    </Link>
  );
}

export default Categorie;
