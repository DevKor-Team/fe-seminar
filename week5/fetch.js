let url = "https://jsonplaceholder.typicode.com/users/1";

const fetchPromise = fetch(url);
console.log(fetchPromise);

// fetchPromise
//   .then(res => {
//     console.log(res);
//   });



// function callback1(res) {
//   console.log(res);
// };

// fetchPromise
//   .then(callback1);

fetchPromise
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("data: ", data);
    return data.name
  })
  .then((name) => {
    console.log("name: ", name);
  });