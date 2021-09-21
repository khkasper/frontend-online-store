import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;

    return (
      <div>
        { cart.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : cart.map(({ id, title, thumbnail }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ShoppingCart;
