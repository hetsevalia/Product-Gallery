import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" onClick={() => onEdit(product)} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="product-price">{product.price}</p>
      <button className="delete-button" onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
};

export default ProductCard;
