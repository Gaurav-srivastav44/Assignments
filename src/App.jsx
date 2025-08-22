import React from "react";

const products = [
  {
    id: 1,
    name: "Black Printed Coffee Mug",
    category: "Mugs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bfDP3DX0i1EhOizxt_6X6UdJw2Q20DxWfw&s",
    oldPrice: "$20.00",
    price: "$15.00",
    onSale: false,
  },
  {
    id: 2,
    name: "Black Printed Coffee Mug",
    category: "Mugs",
    image:
      "https://images.unsplash.com/photo-1481973946307-512988dde8b1?w=600&auto=format&fit=crop&q=60",
    oldPrice: "$20.00",
    price: "$15.00",
    onSale: false,
  },
  {
    id: 3,
    name: "Printed Green Tshirt",
    category: "Tshirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop",
    oldPrice: "$30.00",
    price: "$25.00",
    onSale: true,
  },
  {
    id: 4,
    name: "Black Printed Coffee Mug",
    category: "Mugs",
    image:
      "https://images.unsplash.com/photo-1511725300345-f87a25ebb232?q=80&w=2074&auto=format&fit=crop",
    oldPrice: "$20.00",
    price: "$15.00",
    onSale: false,
  },
  {
    id: 5,
    name: "Typography Teal Printed Tshirt",
    category: "Tshirts",
    image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    oldPrice: "$34.00",
    price: "$29.00",
    onSale: true,
  },
  {
    id: 6,
    name: "Typography Teal Printed Tshirt",
    category: "Tshirts",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop",
    oldPrice: "$34.00",
    price: "$29.00",
    onSale: true,
  },
  {
    id: 7,
    name: "Typography Teal Printed Tshirt",
    category: "Tshirts",
    image: "https://images.unsplash.com/photo-1600405387549-1267a54d597a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VHlwb2dyYXBoeSUyMFRlYWwlMjBQcmludGVkJTIwVHNoaXJ0fGVufDB8fDB8fHww",
    oldPrice: "$34.00",
    price: "$29.00",
    onSale: true,
  },
  {
    id: 8,
    name: "Typography Teal Printed Tshirt",
    category: "Tshirts",
    image:
      "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?w=600&auto=format&fit=crop",
    oldPrice: "$34.00",
    price: "$29.00",
    onSale: true,
  },
  {
    id: 9,
    name: "Typography Teal Printed Tshirt",
    category: "Tshirts",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=687&auto=format&fit=crop",
    oldPrice: "$34.00",
    price: "$29.00",
    onSale: false,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col ">
      <div className="flex justify-between items-center mb-6 px-32 bg-white p-3 shadow-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-32"
        />
        
      </div>

      <div className="px-8 bg-white pt-10 max-w-6xl justify-center mx-auto">
          <div className="flex justify-end mb-6">
          <select className="border px-4 py-2 rounded">
            <option>Default sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          </div>

      <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow overflow-hidden relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="text-yellow-400 text-sm mt-1">
                  ☆☆☆☆☆
                </div>
                <p className="mt-2 text-gray-800">
                  <span className="line-through mr-2 text-red-500">
                    {product.oldPrice}
                  </span>
                  <span className="font-bold">{product.price}</span>
                </p>
              </div>
              {product.onSale && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  SALE
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-start mt-10 space-x-2 mb-32">
        <button className="px-4 py-2 bg-red-500 text-white rounded border border-red-500">1</button>
        <button className="px-4 py-2 text-red-500 border border-red-500 rounded hover:bg-red-100">2</button>
        <button className="px-4 py-2 text-red-500 border border-red-500 rounded hover:bg-red-100">→</button>
      </div>
        </div>
      <footer className="bg-gray-700 text-white text-sm py-3 px-6 mt-10">
  <div className="flex justify-between">
    <span>Copyright © 2025 | Gaurav Srivastav</span>
    <span>Powered By Gaurav Srivastav</span>
  </div>
</footer>


    </div>
  );
}
