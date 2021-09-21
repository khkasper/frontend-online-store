// Feito em pair programming (Dandara, João Marcelo, Kristiano, Gabriella)
const URL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  const response = await fetch(`${URL}/categories`);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`${URL}/search?category=${categoryId}&q=${query}`);
  return response.json();
}
