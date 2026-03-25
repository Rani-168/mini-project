import './Header.css';
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div><div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 py-10 md:py-14 bg-[#F2F2F2] gap-10">
      
    
      <div className="max-w-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality.
        </p>
        <br />
        <Link to="/shop">
  <button className="bg-black text-white px-6 py-3 rounded-full">
    Shop Now
  </button>
</Link>

        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">200+</h2>
            <p className="text-gray-500 text-xs sm:text-sm">International Brands</p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">2,000+</h2>
            <p className="text-gray-500 text-xs sm:text-sm">High-Quality Products</p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">30,000+</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Happy Customers</p>
          </div>
        </div>
      </div>

     
      <div className="flex justify-center">
        <img 
          src="src/assets/image1.png"
          alt="fashion"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain"
        />
      </div>
    
    </div>
    <div className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-6 md:px-10 text-lg md:text-xl font-semibold tracking-wide gap-6">
        <h1>VERSACE</h1>
        <h1>ZARA</h1>
        <h1>GUCCI</h1>
        <h1>PRADA</h1>
        <h1>Calvin Klein</h1>
      </div>
    </div>
    </div>
  );
}

export default HeroSection;