import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReturnButton from '../components/ReturnButton';

class ProductDetails extends Component {
  addCart = () => {
    const { onAdd } = this.props;
    const { props: { location: { state } } } = this;
    onAdd(state);
  }

  render() {
    const { props: { location: { state } } } = this;
    const { title, price, thumbnail } = state;
    return (
      <div>
        <h3 data-testid="product-detail-name">
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <h3>
          { `R$${price}`}
        </h3>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.addCart }
        >
          Adicionar ao carrinho
        </button>
        <ReturnButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProductDetails;
