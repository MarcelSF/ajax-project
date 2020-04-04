// API KEYS:

// adf1f2d7
// 48727053
// 8691812a

// My API function
const myApiFunction = () => {
  const input = document.querySelector('#input').value;
  const request = `http://www.omdbapi.com/?i=tt3896198&apikey=3a8bd6c2&s=${input}`
  console.log(request)
  fetch(request)
    .then(response => response.json())
    .then((data) => {
      const movies = document.querySelector('.movies');
      movies.innerHTML = '';
      data.Search.forEach((result) => {
        const movie = `<li class="list-inline-item">
            <img src="${result.Poster}" alt="">
            <p>${result.Title}</p>
          </li>`;
        movies.insertAdjacentHTML("beforeend", movie)
      })
    });
  //  then response
  //  then data
  //  then do something with the data
}

// #1 find the element
const input = document.querySelector('#form');
// #2 Add the event listener with the correct callback
input.addEventListener('submit', (event) => {
  event.preventDefault();
  myApiFunction();
});





