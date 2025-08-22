import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="flex flex-wrap gap-2">
      {products.map(function (item) {
        return (
          <Product
            key={item.id}
            title={item.title}
            category={item.category}
            imgUrl={item.imgUrl}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
