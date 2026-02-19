import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeFromFavorite, clearFavorites } from "../../redux/FavoriteSlice";
import { addToCart, getCartTotals } from "../../redux/CartSlice";


export default function Favorite() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favorite?.items || []);

  const handleAddToCart = (p) => {
    dispatch(addToCart({ id: p.id, name: p.name, price: p.price, image: p.image }));
    dispatch(getCartTotals());
  };

  if (items.length === 0) {
    return (
      <div className="fav-page">
        <div className="fav-container">
          <div className="fav-empty">
            <div className="fav-empty-icon">♡</div>
            <h2 className="fav-empty-title">No favorites yet</h2>
            <p className="fav-empty-text">
              Add products to your favorites to see them here.
            </p>
            <Link className="fav-btn-primary" to="/shop">
              Go to Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fav-page">
      <div className="fav-container">
        <div className="fav-head">
          <div>
            <h1 className="fav-title">Favorites</h1>
            <p className="fav-subtitle">Your saved products</p>
          </div>

          <button className="fav-btn-outline" onClick={() => dispatch(clearFavorites())}>
            Clear
          </button>
        </div>

        <div className="fav-grid">
          {items.map((p) => (
            <div className="fav-card" key={p.id}>
              <div className="fav-img">
                {p.image ? <img src={p.image} alt={p.name} /> : <span>No image</span>}
              </div>

              <div className="fav-info">
                <div className="fav-name">{p.name}</div>
                <div className="fav-price">{Number(p.price).toFixed(2)} DH</div>
              </div>

              <div className="fav-actions">
                <button className="fav-btn-primary" onClick={() => handleAddToCart(p)}>
                  Add to cart
                </button>
                <button
                  className="fav-btn-outline"
                  onClick={() => dispatch(removeFromFavorite(p.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="fav-footer">
          <Link to="/shop" className="fav-link">
            ← Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
