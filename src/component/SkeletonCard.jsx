function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm animate-pulse">
      
      
      <div className="w-full h-52 bg-gray-300 rounded-xl"></div>

    
      <div className="h-4 bg-gray-300 rounded mt-4 w-3/4"></div>

     
      <div className="h-3 bg-gray-300 rounded mt-2 w-1/4"></div>

      
      <div className="h-4 bg-gray-300 rounded mt-3 w-1/3"></div>

    </div>
  );
}

export default SkeletonCard;