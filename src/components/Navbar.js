import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaHome, FaUtensils, FaShoppingCart } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="nav-container">
      <div className="nav-inner">
        {/* Logo on Left Side */}
        <Link to="/" className="nav-title">
          🍔 Food Order
        </Link>

        {/* Navigation Links on Right Side */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <FaHome size={20} /> <span>Home</span>
          </Link>
          <Link to="/menu" className="nav-link">
            <FaUtensils size={20} /> <span>Menu</span>
          </Link>
          <Link to="/cart" className="nav-link relative">
            <div className="cart-icon-container">
              <FaShoppingCart size={24} />
              {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
            </div>
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
