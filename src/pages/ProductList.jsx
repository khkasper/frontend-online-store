import React from 'react';
import CategoriesList from '../components/CategoriesList';

import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <ShoppingCartButton />
        <main>
          <input type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <CategoriesList />
        </main>
      </div>
    );
  }
}

export default ProductList;
