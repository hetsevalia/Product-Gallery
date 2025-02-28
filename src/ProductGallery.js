import React, { useState } from "react";
import ProductCard from "./ProductCard";
import EditModal from "./EditModal";
import "./styles.css";


const ProductGallery = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", description: "High-performance laptop", price: "₹1,20,000", image: "/IMAGES/asus_tyf.png" },
    { id: 2, name: "Smartphone", description: "Latest model iPhone", price: "₹60,000", image: "/IMAGES/iphone_16e.jpg" },
    { id: 3, name: "Headphones", description: "Bose Noise-canceling headphones", price: "₹27,900", image: "/IMAGES/bose_head.jpg" },
    { id: 4, name: "Tablet", description: "Apple iPad", price: "₹40,000", image: "/IMAGES/apple_ipad.jpg" },
    { id: 5, name: "Camera", description: "Professional camera", price: "₹82,500", image: "/IMAGES/Camera.jpg" },
    { id: 6, name: "Speaker", description: "Wireless speaker", price: "₹12,500", image: "/IMAGES/Speakers.jpg" },
    { id: 7, name: "Smartwatch", description: "Fitness tracking smartwatch", price: "₹20,500", image: "/IMAGES/Smartwatch.png" },
    { id: 8, name: "Monitor", description: "4K resolution monitor", price: "₹49,500", image: "/IMAGES/monitor1.jpg" },
    { id: 9, name: "Airpods", description: "Apple Airpods", price: "₹12,500", image: "/IMAGES/Airpods.jpg" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", image: "" });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.description && newProduct.price) {
      setProducts([...products, { id: Date.now(), ...newProduct, image: newProduct.image || "https://source.unsplash.com/150x150/?product" }]);
      setNewProduct({ name: "", description: "", price: "", image: "" });
      setShowAddForm(false);
    } else {
      alert("Please fill in all fields before adding the product.");
    }
  };

  const updateProduct = () => {
    setProducts(products.map((product) => (product.id === editingProduct.id ? editingProduct : product)));
    setEditingProduct(null);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-gallery">
      <div className="controls">
        <input
          type="text"
          placeholder="Search product..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setShowAddForm(!showAddForm)} className="add-button">
          {showAddForm ? "Cancel" : "Add Product"}
        </button>
      </div>

      {showAddForm && (
        <div className="add-product-form">
          <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} />
          <input type="text" name="description" placeholder="Product Description" value={newProduct.description} onChange={handleInputChange} />
          <input type="text" name="price" placeholder="Price (₹)" value={newProduct.price} onChange={handleInputChange} />
          <input type="text" name="image" placeholder="Image URL (optional)" value={newProduct.image} onChange={handleInputChange} />
          <button onClick={addProduct} className="save-button">Save Product</button>
        </div>
      )}

      <div className="grid-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onEdit={setEditingProduct} onDelete={deleteProduct} />
        ))}
      </div>

      {editingProduct && <EditModal product={editingProduct} setProduct={setEditingProduct} updateProduct={updateProduct} />}
    </div>
  );
};

export default ProductGallery;
