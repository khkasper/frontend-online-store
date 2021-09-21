import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends Component {
  render() {
    return (
      <div>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <img width="40px" src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="shopping cart" />
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
