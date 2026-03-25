import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Product({ cart, setCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [mainImg, setMainImg] = useState("");

useEffect(() => {
  fetch(`http://localhost:3000/newArrivals/${id}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data);
      setMainImg(data.img);
    });
}, [id]);
  if (!product) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="p-10 bg-gray-50 min-h-screen">

      <div className="grid grid-cols-2 gap-10 bg-white p-8 rounded-xl">
<div className="flex gap-4">

 
  <div className="flex flex-col gap-3">
    
    <img
      src={product.img}
      onClick={() => setMainImg(product.img)}
      className="w-20 h-20 rounded-lg border cursor-pointer"
    />

    {product.imgBack && (
      <img
        src={product.imgBack}
        onClick={() => setMainImg(product.imgBack)}
        className="w-20 h-20 rounded-lg border cursor-pointer"
      />
    )}

    {product.imgfront && (
      <img
        src={product.imgfront}
        onClick={() => setMainImg(product.imgfront)}
        className="w-20 h-20 rounded-lg border cursor-pointer"
      />
    )}

  </div>

  <img
    src={mainImg}
    alt={product.title}
    className="w-96 rounded-xl object-contain bg-gray-100 p-4"
  />

</div>        
        <div>

          <h1 className="text-3xl font-bold">{product.title}</h1>

         
          <p className="text-yellow-500 mt-2">
            ⭐⭐⭐⭐☆ ({product.rating})
          </p>

          
          <div className="flex items-center gap-3 mt-3">
            <p className="text-2xl font-bold">₹{product.price}</p>

            {product.oldPrice && (
              <p className="line-through text-gray-400">
                ₹{product.oldPrice}
              </p>
            )}

            {product.discount && (
              <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-sm">
                {product.discount}
              </span>
            )}
          </div>

        
          <p className="mt-4 text-gray-600">
            This t-shirt is perfect for any occasion. Soft and comfortable fabric.
          </p>

         
          <div className="mt-6">
            <p className="font-semibold">Select Colors</p>
            <div className="flex gap-3 mt-2">
              <div className="w-6 h-6 rounded-full bg-green-700 border-2 border-black"></div>
              <div className="w-6 h-6 rounded-full bg-gray-500"></div>
              <div className="w-6 h-6 rounded-full bg-blue-900"></div>
            </div>
          </div>

          
          <div className="mt-6">
            <p className="font-semibold">Choose Size</p>
            <div className="flex gap-3 mt-2">
              <button className="px-4 py-1 border rounded-full">Small</button>
              <button className="px-4 py-1 border rounded-full">Medium</button>
              <button className="px-4 py-1 bg-black text-white rounded-full">Large</button>
              <button className="px-4 py-1 border rounded-full">X-Large</button>
            </div>
          </div>

          
          <div className="flex items-center gap-4 mt-8">
          <div className="flex items-center border rounded-full px-4 py-2 gap-4">
  <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
  <span>{qty}</span>
  <button onClick={() => setQty(qty + 1)}>+</button>
</div>
<button
  className="bg-black text-white px-10 py-3 rounded-full"
 onClick={() => {
  const exist = cart.find((item) => item.id === product.id);
 
  if (exist) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + qty }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, qty }]);
  }
}}
>
  Add to Cart
</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Product;