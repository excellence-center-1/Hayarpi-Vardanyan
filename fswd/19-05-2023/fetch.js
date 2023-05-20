function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data from the API');
        }
      })
      .then(data => resolve(data))
      .catch(error => reject(error.message));
  });
}

async function fetchDataAsync(url, params) {
  try {
    const urlWithParams = new URL(url);
    urlWithParams.searchParams.append('userId', params);
    const data = await fetchData(urlWithParams);
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchDataAsync('https://jsonplaceholder.typicode.com/posts', '10');
