import React, { useState } from 'react';

function Product({ product, onAddToCart }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
    onAddToCart(product);
  };

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Preço: R$ {product.price}</p>
      {inCart ? (
        <p>Produto no Carrinho</p>
      ) : (
        <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
      )}
    </div>
  );
}

export default Product;
