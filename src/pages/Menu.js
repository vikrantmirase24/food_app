import { useState } from "react";
import { useCart } from "../context/CartContext";

const menuItems = [
  { id: 1, name: "Pizza", price: 10, image: "/pizza.jpg" },
  { id: 2, name: "Burger", price: 8, image: "/burger.jpg" },
  { id: 3, name: "Pasta", price: 12, image: "/pasta.jpg" },
  { id: 4, name: "Sandwich", price: 7, image: "/sandwich.jpg" },
  { id: 5, name: "Salad", price: 6, image: "/salad.jpg" },
  { id: 6, name: "Sushi", price: 15, image: "/sushi.jpg" },
];

const Menu = () => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleIncrease = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    addToCart({ ...item, quantity });
  };

  return (
    <div className="p-10 text-center">
      {/* <h2 className="text-3xl font-bold mb-6">Menu</h2> */}
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} className="card-image" />
            <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
            <p className="text-gray-600 text-lg">${item.price}</p>

            {/* Quantity Controls */}
            <div className="quantity-controls">
              <button onClick={() => handleDecrease(item.id)} className="qty-btn">-</button>
              <span className="quantity">{quantities[item.id] || 1}</span>
              <button onClick={() => handleIncrease(item.id)} className="qty-btn">+</button>
            </div>

            {/* Add to Cart Button */}
            <button onClick={() => handleAddToCart(item)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
