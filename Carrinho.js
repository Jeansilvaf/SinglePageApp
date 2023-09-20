const products = [
  { id: 1, name: 'Produto 1', price: 19.99 },
  { id: 2, name: 'Produto 2', price: 29.99 },
  { id: 3, name: 'Produto 3', price: 15.99 },
  // Adicione mais produtos aqui
];

import React, { useState } from 'react';
import './App.css'; // Importe seu arquivo CSS aqui
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Sistema de E-commerce</h1>
      <button onClick={() => setShowCart(!showCart)}>
        {showCart ? 'Ver Produtos' : 'Ver Carrinho'}
      </button>
      {showCart ? (
        <Cart cart={cart} onRemoveFromCart={removeFromCart} />
      ) : (
        <ProductList products={products} onAddToCart={addToCart} />
      )}
    </div>
  );
}

export default App;
