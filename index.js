const form = document.getElementById('form');
const fileInput = document.getElementById('fileInput');
const cancelInput = document.getElementById('cancelInput');
const cancelButton = document.getElementById('cancelButton');


form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission


  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);


  // Make the POST request to the FastAPI endpoint
  fetch('http://localhost:8000/scan_receipt', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);

      const fileData = new FormData();
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      fileData.append('file', blob, 'data.json');

      fetch('/upload', {
        method: 'POST',
        body: fileData,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data); // Success message from the backend
        })
        .catch((error) => {
          console.error(error); // Error message if the upload fails
        });
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
});


cancelButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission


  const name = cancelInput.value.trim();
  if (name) {
    fetch(`/cancel/${name}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Success message from the backend
      })
      .catch((error) => {
        console.error(error); // Error message if the cancel request fails
      });
  }
});


searchButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission


  const name = searchInput.value.trim();
  if (name) {
    fetch(`/search/${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.expiry) {
          expiryResult.textContent = `Expiry for ${name}: ${data.expiry}`;
        } else {
          expiryResult.textContent = `No expiry found for ${name}`;
        }
      })
      .catch((error) => {
        console.error(error); // Error message if the search request fails
      });
  }
});
