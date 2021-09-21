import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchComponent extends Component {
  handleClick = () => {
    const { searchTerm, onClick } = this.props;
    onClick('', searchTerm);
  }

  render() {
    const { searchTerm, onChange } = this.props;
    return (
      <form>
        <input
          type="text"
          value={ searchTerm }
          onChange={ onChange }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

SearchComponent.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
