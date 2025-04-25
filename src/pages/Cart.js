import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {cart.map((item, index) => (
            <div 
              key={index} 
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={`${process.env.REACT_APP_BASE_URL}item.image`}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              
              {/* Card Body */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <Link
          to="/checkout"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg"
        >
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
};

export default Cart;
