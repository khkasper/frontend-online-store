import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product" key={ product.id }>
        <Link
          data-testid="product-detail-link"
          to={ `/productdetails/${product.id}` }
        >
          <p>{ product.title }</p>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{ product.price }</p>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
