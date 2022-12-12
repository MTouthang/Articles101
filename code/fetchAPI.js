fetch("https://api.github.com/users/MTouthang")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// TODO:
// Perform fetch with PUT, POST, DELETE, GET
