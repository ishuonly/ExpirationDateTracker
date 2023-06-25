form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);

  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data); // Success message from the backend
    })
    .catch((error) => {
      console.error(error); // Error message if the upload fails
    });
});

