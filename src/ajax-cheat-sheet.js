// Define de URL for Fetch
// EX:
// Fetch the URL (a GET request to that specific URL which will respond with JSON data)
// Then parse the response => response.json()
// This is just an HTTP response, not the actual JSON. It's in the format of a String!
// To extract the JSON body content from the response, we use the .json() method (defined on the Body mixin, which is implemented by both the Request and Response objects.
// THEN do whatever you want with the data, which is now in the form of a JSON object

// Remember: JSON = JavaScript Object Notation


// My API function
const myApiFunction = () => {
  const input = document.querySelector('#input');
  const movies = document.querySelector('.movies')
  const request = `http://www.omdbapi.com/?i=tt3896198&apikey=3a8bd6c2&s=${input.value}`
  fetch(request)
    .then(response => response.json())
    .then((data) => {
      movies.innerHTML = '';
      data.Search.slice(0, 5).forEach((result) => {
        const movie = `<li class="list-inline-item">
            <img src="${result.Poster}" alt="">
            <p>${result.Title}</p>
          </li>`;
        movies.insertAdjacentHTML("beforeend", movie)
      })
    });
}

// #1 find the element
const input = document.querySelector('#form');
// #2 Add the event listener with the correct callback
// Remember the prevent default with the submit!
input.addEventListener('submit', (event) => {
  event.preventDefault();
  myApiFunction();
});

// ALGOLIA PLACES (POST)
const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const algolia = document.querySelector("#algolia");
algolia.addEventListener("keyup", searchAlgoliaPlaces);


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
