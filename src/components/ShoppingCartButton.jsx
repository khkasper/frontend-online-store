import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <img width="40px" src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="shopping cart image" />
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
