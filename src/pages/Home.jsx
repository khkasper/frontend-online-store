import React, { Component } from 'react';
import ProductList from './ProductList';
import SearchComponent from '../components/SearchComponent';
import CategoriesList from '../components/CategoriesList';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
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
      ttributes: product.attributes,
    }));
    this.setState({ productList: products });
  };

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
            onChange={ this.handleCategory }
          />
        </div>
        <div>
          <ProductList productList={ productList } />
        </div>
      </div>
    );
  }
}
