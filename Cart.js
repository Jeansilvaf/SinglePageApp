import React from 'react';

function Cart({ cart, onRemoveFromCart }) {
  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
              <button onClick={() => onRemoveFromCart(product)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
