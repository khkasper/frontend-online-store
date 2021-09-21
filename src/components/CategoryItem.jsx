import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryItem extends Component {
  render() {
    const { categoryName, categoryId, selectedCategory, onChange } = this.props;
    const selected = selectedCategory === categoryId;
    return (
      <ul>
        <input
          type="radio"
          name="category"
          id={ categoryId }
          value={ categoryId }
          checked={ selected }
          onChange={ onChange }
        />
        <label
          htmlFor={ categoryId }
          data-testid="category"
        >
          { categoryName }
        </label>
      </ul>
    );
  }
}

CategoryItem.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
