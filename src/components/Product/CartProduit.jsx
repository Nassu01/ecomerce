import React from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartTotals } from "../../redux/CartSlice";
import { toggleFavorite } from "../../redux/FavoriteSlice";

function CartProduit({ id, img, titre, price }) {
  const dispatch = useDispatch();

  const isFav = useSelector((state) =>
    state.favorite?.items?.some((p) => p.id === id)
  );

  const handleAdd = () => {
    if (id == null) {
      console.error("CartProduit: missing 'id' prop");
      return;
    }

    dispatch(
      addToCart({
        id,
        name: titre,
        price: Number(price),
        image: img,
      })
    );
    dispatch(getCartTotals());
  };

  const handleFav = () => {
    dispatch(
      toggleFavorite({
        id,
        name: titre,
        price: Number(price),
        image: img,
      })
    );
  };

  return (
    <div className="cartProduit">
      <div className="cartProduitImage">
        <img src={img} alt={titre} />
      </div>

      <div className="cartProduitDetails">
        <h1>{titre}</h1>
        <p>{Number(price).toFixed(2)} DH</p>
        <p>avis</p>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button type="button" onClick={handleAdd}>
          Ajouter au panier
        </button>

        <button
          type="button"
          onClick={handleFav}
          className={`fav-btn ${isFav ? "is-fav" : ""}`}
          aria-label="Add to favorites"
          title="Favorite"
        >
          {isFav ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}

export default CartProduit;
