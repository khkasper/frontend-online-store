import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCartButton extends Component {
  render() {
    const { quantity } = this.props;
    return (
      <div>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <img width="40px" src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="shopping cart" />
        </Link>
        <p data-testid="shopping-cart-size">
          { quantity }
        </p>
      </div>
    );
  }
}

ShoppingCartButton.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default ShoppingCartButton;
