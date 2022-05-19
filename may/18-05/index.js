const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) =>
    res.data.map(({ name, address, phone }) =>
      console.log(
        `This person ${name} lives in ${address.street} you can all them on ${phone}`
      )
    )
  )
  .catch((err) => console.log(err));
console.log("cool");

// https://jsonplaceholder.typicode.com/

// todos
// users
// comments
