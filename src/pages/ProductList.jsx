import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../components/ProductCard';

export default class ProductList extends Component {
  render() {
    const { list } = this.props;
    return (
      <section>
        { !list.length
          ? <p> Nenhum produto foi encontrado </p>
          : list.map((product, key) => <ProductCard key={ key } product={ product } />)}
      </section>
    );
  }
}

ProductList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};
