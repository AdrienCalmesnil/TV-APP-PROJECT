const API_KEY = '44939c2eaad9e8d15f23cf86e5f8babe';
const API_URL = 'https://api.themoviedb.org/3/search/multi';

export async function search(query: string) {
  const response = await fetch(
    `${API_URL}?api_key=${API_KEY}&query=${query}`
  );
  const responseData = await response.json();
  return responseData.results;
}