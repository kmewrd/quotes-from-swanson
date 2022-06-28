export const getSingleQuote = () => {
  return fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(response => response.json())
}