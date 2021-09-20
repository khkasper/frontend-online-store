import React from 'react';
import CategoriesList from '../components/CategoriesList';

class ProductList extends React.Component {
  render() {
    return (
      <main>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList />
      </main>
    );
  }
}

export default ProductList;
