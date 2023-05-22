function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('ERROR');
        }
      })
      .then(data => resolve(data))
      .catch(error => reject(error.message));
  });
}

async function fetchDataAsync(url, params) {
  try {
    const urlParams = new URL(url);
    urlParams.searchParams.append('userId', params);
    const data = await fetchData(urlParams);
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchDataAsync('https://jsonplaceholder.typicode.com/posts', '10');
