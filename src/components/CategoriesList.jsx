import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryItem from './CategoryItem';
import { getCategories } from '../services/api';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const data = await getCategories();
    if (data) this.setState({ categories: data });
  };

  render() {
    const { categories } = this.state;
    const { selectedCategory, handleCategory } = this.props;

    return (
      <div>
        <ul>
          {categories.length !== 0 && categories.map(({ id, name }) => (
            <CategoryItem
              key={ id }
              categoryName={ name }
              categoryId={ id }
              selectedCategory={ selectedCategory }
              onChange={ handleCategory }
            />
          ))}
        </ul>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  handleCategory: PropTypes.func.isRequired,
};

export default CategoriesList;
