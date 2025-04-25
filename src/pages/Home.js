const Home = () => {
  const menuItems = [
    { id: 1, name: "Garlic Alfredo", category: "Comfort Food Classics", image: "/garlic.jpg" },
    { id: 2, name: "Albaloo Polo", category: "International Eats", image: "/albaloo-polo.jpg" },
    { id: 3, name: "Breakfast Casserole", category: "Breakfast & Brunch", image: "/breakfast-casserole.jpg" },
    { id: 4, name: "Fruit Salad", category: "Community Picks", image: "/fruit-salad.jpg" },
    { id: 5, name: "Quick & Easy Cover", category: "Egg Vegies", image: "/egg-vegies.jpg" },
    { id: 6, name: "Dragonfruit Refresher", category: "Copycat Recipes", image: "/dragonfruit-refresher.jpg" },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="home-container">
        <div className="overlay">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            Welcome to Our Food Order Website
          </h2>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto drop-shadow-md">
            Discover a world of delicious flavors at your fingertips. From sizzling 
            street food to gourmet meals, we bring you the best dishes prepared 
            with love. Order now and enjoy your favorite meals at home!
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="menu-section">
        <h3 className="text-3xl font-bold text-center mt-10">Explore More</h3>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <h4 className="font-semibold mt-2">{item.name}</h4>
              <p className="text-gray-500 text-sm">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
