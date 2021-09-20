import React from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategoriesApi();
  }

  fetchCategoriesApi = async () => {
    const categories = await getCategories();

    this.setState({ categories });
  }

  mapCategories = () => {
    const { categories } = this.state;
    return (
      categories.map(({ name, id }) => (
        <p data-testid="category" key={ id } id={ id }>{ name }</p>
      ))
    );
  }

  render() {
    return (
      <aside>
        { this.mapCategories() }
      </aside>
    );
  }
}

export default CategoriesList;
