import React from "react";
import "../App.css"

function CartProduit({ img, titre, price }) {
  return (
    <div className="cartProduit">
      <div className="cartProduitImage">
        <img src={img} alt={titre} />
      </div>

      <div className="cartProduitDetails">
        <h1>{titre}</h1>
        <p>{price} DH</p>
        <p>avis</p>
      </div>

      <button>Ajouter au panier</button>
    </div>
  );
}



export default CartProduit;
