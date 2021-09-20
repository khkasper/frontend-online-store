import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardProduct extends Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <p>{ `R$${price}`}</p>
      </div>
    );
  }
}
CardProduct.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};
