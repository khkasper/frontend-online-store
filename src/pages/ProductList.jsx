import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

export default class ProductList extends Component {
  render() {
    const { productList } = this.props;

    if (!productList.length) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

    return (
      <div>
        {productList.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
