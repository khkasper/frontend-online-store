import React from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartButton from '../components/ShoppingCartButton';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <ShoppingCartButton />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">
          <img
            width="40px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS97Ebf7j7tVXfBfCecWctHDbp7UVJRQBdDhIQtrTJHbnXFugi_UsZ-aPE5TGVDYO3ZkM&usqp=CAU"
            alt="return home arrow"
          />
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
