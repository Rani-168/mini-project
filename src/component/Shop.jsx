import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const category = queryParams.get("category");
  useEffect(() => {
    fetch("http://localhost:3000/newArrivals")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

 
  if (!products.length) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="flex px-10 py-6 gap-8 bg-gray-50">

    
      <div className="w-1/4 bg-white p-5 rounded-xl shadow-sm">
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        <p className="font-semibold">Category</p>
        <ul className="text-gray-600 text-sm mt-2 space-y-1">
  <li><Link to="/shop">All</Link></li>
  <li><Link to="/shop?category=t-shirts">T-shirts</Link></li>
  <li><Link to="/shop?category=shirts">Shirts</Link></li>
  <li><Link to="/shop?category=jeans">Jeans</Link></li>
</ul>

        <button className="w-full mt-4 bg-black text-white py-2 rounded-full">
          Apply Filter
        </button>
      </div>

      
      <div className="w-3/4">

  <h1 className="text-2xl font-bold mb-6">Casual</h1>

  {/* 🔍 Search Bar */}
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full mb-5 p-2 border rounded-lg"
  />

  <div className="grid grid-cols-3 gap-6">
    {products
      .filter((item) => {
        // Category filter
        if (category && item.category?.toLowerCase() !== category.toLowerCase()) {
          return false;
        }

        // Search filter
        return item.title.toLowerCase().includes(search.toLowerCase());
      })

      .map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm">

          <Link to={`/product/${item.id}`}>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-contain"
            />
          </Link>

          <h3 className="mt-2 font-semibold">{item.title}</h3>

          <p className="text-yellow-500 text-sm">⭐ {item.rating}</p>

          <div className="flex gap-2 mt-1">
            <p className="font-bold">₹{item.price}</p>

            {item.oldPrice && (
              <p className="line-through text-gray-400">
                ₹{item.oldPrice}
              </p>
            )}
          </div>

          {item.discount && (
            <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full">
              {item.discount}
            </span>
          )}
        </div>
      ))}
  </div>
</div>
  
    </div>
  );
}

export default Shop;