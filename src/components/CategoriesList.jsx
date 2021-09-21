import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import { getCategories } from '../services/api';

export default class CategoriesList extends Component {
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
    const { selectedCategory, onChange } = this.props;

    return (
      <ul>
        {categories.map(({ id, name }) => (
          <CategoryItem
            key={ id }
            categoryName={ name }
            categoryId={ id }
            selectedCategory={ selectedCategory }
            onChange={ onChange }
          />
        ))}
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
