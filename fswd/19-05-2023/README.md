Create a function called fetchData that simulates fetching data from an API. The function should take a URL as a parameter and return a promise. The promise should resolve with the data fetched from the API if the request is successful, and reject with an error message if the request fails.

Next, demonstrate the usage of the fetchData function by calling it with a sample URL using async/await syntax. Handle any errors that may occur during the asynchronous operation
-------------------------------------

// Example usage
fetchDataAsync('https://api.example.com/data'); // Data: { id: 1, name: 'John Doe', email: 'johndoe@example.com' }

fetchDataAsync('https://api.example.com/dataaaa'); // Error: Error: Failed to fetch data
