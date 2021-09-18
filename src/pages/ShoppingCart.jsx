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
          <img width="40px" src="data:image/png;base64,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" alt="return home arrow" />
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
