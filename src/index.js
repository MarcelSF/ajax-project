// API KEYS:

// adf1f2d7
// 48727053
// 8691812a

// My API function
const myApiFunction = () => {
  const input = "";
  const request = `http://www.omdbapi.com/?i=tt3896198&apikey=3a8bd6c2&s=${'???'}`
  console.log(request)
  // fetch
  //  then response
  //  then data
  //  then do something with the data
}

// #1 find the element
const input = document.querySelector('#form');
// #2 Add the event listener with the correct callback
input.addEventListener('submit', (event) => {
  myApiFunction();
});













// ALGOLIA PLACES (POST)
// const searchAlgoliaPlaces = (event) => {
//   fetch("https://places-dsn.algolia.net/1/places/query", {
//     method: "POST",
//     body: JSON.stringify({ query: event.currentTarget.value })
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data.hits); // Look at local_names.default
//     });
// };

// const algolia = document.querySelector("#algolia");
// algolia.addEventListener("keyup", searchAlgoliaPlaces);


