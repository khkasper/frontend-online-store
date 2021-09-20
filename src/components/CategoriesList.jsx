import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categoriesList } = this.props;
    return (
      <div>
        {categoriesList.map(({ id, name }) => (
          <div key={ id }>
            <label data-testid="category" htmlFor={ id }>
              <input id={ id } type="radio" name="category" />
              { name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;
