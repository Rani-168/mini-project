import './Header.css';
import { IconX } from '@tabler/icons-react';
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(true);

  if (!show) return null; 

  return (
    <div className="bg-black text-white text-xs sm:text-sm py-2 px-4 flex justify-center items-center relative hover:bg-sky-900 transition duration-500">
     
      <p className="text-center pr-8">
        Sign up and get 20% off to your first order.
        <a href="/" className="underline ml-1 cursor-pointer">
          Sign Up Now
        </a>
      </p>

      
      <button
        onClick={() => setShow(false)}
        className="absolute right-14 sm:right-10 cursor-pointer"
      >
        <IconX size={18} />
      </button>

    </div>
  );
}

export default Header;
// for new page we use react-router-dom labbery download
// use hock for useParams