import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ProductList from './ProductList';
import SearchComponent from '../components/SearchComponent';
import CategoriesList from '../components/CategoriesList';
import ShoppingCartButton from '../components/ShoppingCartButton';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      input: '',
      list: [],
      submit: false,
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.getCategoriesList();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { input, category } = this.state;
    this.setState(async () => {
      const listaProdutos = await getProductsFromCategoryAndQuery(category, input);
      this.setState({
        list: listaProdutos.results,
        submit: true,
      });
    });
  }

  getCategoriesList = async () => {
    const categories = await getCategories();
    this.setState({ categoriesList: categories });
  }

  render() {
    const { input, list, submit, categoriesList } = this.state;
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <div>
          <ShoppingCartButton />
        </div>
        <SearchComponent
          value={ input }
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />
        <CategoriesList categoriesList={ categoriesList } />
        { submit && <ProductList list={ list } /> }
      </div>
    );
  }
}

export default Home;
