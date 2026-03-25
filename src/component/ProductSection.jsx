import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/newArrivals")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

 if (!products.length) {
  return (
    <div className="px-8 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">
        New Arrivals
      </h2>

      <div className="grid grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
  return (
    <div className="px-8 py-10 bg-gray-50">
      
      
      <h2 className="text-3xl font-bold mb-8 text-center">New Arrivals</h2>

      <div className="grid grid-cols-4 gap-8">
        {products.map((item) => (
          
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300"
          >
            
            
            <Link to={`/product/${item.id}`}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover rounded-xl"
              />
            </Link>

            
            <h3 className="mt-4 text-sm font-semibold">
              {item.title}
            </h3>

           
            <p className="text-yellow-500 text-sm mt-1">
              ⭐ {item.rating}
            </p>

           
            <div className="flex items-center gap-2 mt-2">
              <p className="text-lg font-bold">₹{item.price}</p>

              {item.oldPrice && (
                <p className="text-gray-400 line-through text-sm">
                  ₹{item.oldPrice}
                </p>
              )}
            </div>

            
            {item.discount && (
              <span className="inline-block mt-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                {item.discount}
              </span>
            )}
          </div>

        ))}
      </div>
      <SkeletonCard></SkeletonCard>
    </div>
  );
}

export default ProductSection;