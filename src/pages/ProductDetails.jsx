import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReturnButton from '../components/ReturnButton';
import EvaluationForm from '../components/EvaluationForm';

class ProductDetails extends Component {
  addToCart = () => {
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
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
        <EvaluationForm />
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
  onAdd: PropTypes.func.isRequired,
};

export default ProductDetails;
