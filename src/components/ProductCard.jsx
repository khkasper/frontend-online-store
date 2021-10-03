import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  addToCart = () => {
    const { product, onAdd } = this.props;
    onAdd(product);
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product" key={ id }>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/productdetails/${id}`,
            state: product,
          } }
        >
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </Link>
        <button
          type="button"
          onClick={ this.addToCart }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        {product.freeShipping && (
          <p data-testid="free-shipping">Free Shipping</p>
        )}
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
    freeShipping: PropTypes.bool.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ProductCard;
