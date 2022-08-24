// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//      resolve(180);
//     } else {
//      reject("180");
//     }
//   }, 2000);
// });
// promise
// .then( value => {
//   console.log(value);
//   return value / 10
// })
// .then( value => {
//   console.log(value);
//   return value / 3
// })
// .then( value => {
//   console.log(value);
//   return value *5
//   })
// .then( value => {
//   console.log(value);
//   return value + 20
// })
//   .catch(e => {
//     console.log(e);
//   })
// .finally(() => console.log("Promise settled")); // "Promise settled"

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// const onFetchSuccess = user => {
//   console.log(user);
// };

// const onFetchError = error => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

const makeGreeting = guestName => {
  if (guestName === "" || guestName === undefined) {
    return Promise.reject("Guest name must not be empty");
  }

   return Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting("Mango")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));






