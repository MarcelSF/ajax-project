const request = 'http://www.omdbapi.com/?i=tt3896198&apikey=3a8bd6c2&s=ryan'

fetch(request)
  .then(response => response.json())
  .then((data) => {
    console.log(data.Search)
  });
