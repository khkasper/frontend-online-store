import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';
import SearchComponent from '../components/SearchComponent';
import CategoriesList from '../components/CategoriesList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      searchTerm: '',
      selectedCategory: '',
    };
  }

  handleSearch = ({ target }) => {
    this.setState({ searchTerm: target.value });
  };

  handleCategory = ({ target }) => {
    if (target.value) this.getProducts(target.value, '');
    this.setState({ selectedCategory: target.value });
  };

  getProducts = async (category, query) => {
    const response = await getProductsFromCategoryAndQuery(category, query);
    const products = response.results.map((product) => ({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      availableQuantity: product.available_quantity,
      freeShipping: product.shipping.free_shipping,
    }));
    this.setState({ productList: products });
  };

  addItem = (product) => {
    const { onAdd } = this.props;
    onAdd(product);
  }

  render() {
    const { searchTerm, productList, selectedCategory } = this.state;
    return (
      <div>
        <div>
          <SearchComponent
            searchTerm={ searchTerm }
            onChange={ this.handleSearch }
            onClick={ this.getProducts }
          />
        </div>
        <div>
          <CategoriesList
            selectedCategory={ selectedCategory }
            handleCategory={ this.handleCategory }
          />
        </div>
        <div>
          <ProductList
            productList={ productList }
            onAdd={ this.addItem }
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default Home;
