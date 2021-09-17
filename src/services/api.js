// feito em pair programming (Dandara, João Marcelo, Kristiano, Gabriella)
const URL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  // Implemente aqui
  const endpointApi = `${URL}/categories`;
  const fetchApi = await fetch(endpointApi);
  const data = await fetchApi.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}q=$${query}`);
  const data = await result.json();
  return data;
}
