// async function getData() {
//   try {
//     const response = await fetch("https://api.github.com/users/MTouthang");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

// getData();

const fetchData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/MTouthang");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
