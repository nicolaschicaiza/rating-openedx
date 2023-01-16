import React from "react";
import StarRating from "../components/StarRating";

function ProductPage() {
  return (
    <div>
      <h1>Producto</h1>
      <p>Califica este producto:</p>
      <StarRating />
    </div>
  );
}

export default ProductPage;