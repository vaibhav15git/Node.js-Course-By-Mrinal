function fetchData(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Do something with the data, e.g. update the DOM
    })
    .catch(error => {
      console.error(`Fetch error: ${error}`);
    });
}

// Example usage:
fetchData('https://jsonplaceholder.typicode.com/posts/1');
