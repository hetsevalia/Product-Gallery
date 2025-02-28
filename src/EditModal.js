import React from "react";

const EditModal = ({ product, setProduct, updateProduct }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Product</h2>
        <input type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} placeholder="Product Name" />
        <input type="text" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} placeholder="Description" />
        <input type="text" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} placeholder="Price" />
        <button onClick={updateProduct}>Save Changes</button>
        <button onClick={() => setProduct(null)}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
