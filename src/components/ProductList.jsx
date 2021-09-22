import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  addCart = (product) => {
    const { onAdd } = this.props;
    onAdd(product);
  }

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
          <ProductCard
            key={ product.id }
            product={ product }
            onAdd={ this.addCart }
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ProductList;
