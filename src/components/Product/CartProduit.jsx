// src/components/Product/CartProduit.jsx
import React from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotals } from "../../redux/CartSlice";

function CartProduit({ id, img, titre, price }) {
  const dispatch = useDispatch();

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

    // keep totals updated
    dispatch(getCartTotals());
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

      <button type="button" onClick={handleAdd}>
        Ajouter au panier
      </button>
    </div>
  );
}

export default CartProduit;
