import React, { useState } from 'react';

function ProductCard() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-5xl mx-auto my-10 bg-white rounded-md shadow flex flex-col md:flex-row overflow-hidden  min-h-[500px]">
      <div className="md:w-1/2 bg-gray-100 flex justify-center items-center p-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmTWw106a5lbnJwBHVhcwWGsTasBu_x9BiBqOUAbJ53eWvtAG_4YvDmtUlWIt_76kCDw&usqp=CAU"
          alt="Black Printed Coffee Mug"
          className="w-[550px] h-auto object-cover"
        />
      </div>

      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Black Printed Coffee Mug</h2>
          <p className="text-lg font-bold text-gray-900 mb-3">$15.00</p>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis sapiente praesentium explicabo quaerat consectetur aperiam eius? Neque accusantium suscipit dolorem et? Ipsum officiis adipisci rem vel non corrupti harum!
          </p>
        </div>

        <div className="flex flex-start justify-start gap-1">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
          />
          <button className="bg-red-500 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-red-600 transition">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
