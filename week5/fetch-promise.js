let url = "https://jsonplaceholder.typicode.com/users/1";

function getResponse(response) {
  return new Promise(function (resolve, reject) {
    if (!response) {
      reject(Error("getResponse"));
    }
    else {
      console.log("getResponse: ", response);
      resolve(response.json());
    }
  });
}

function parseName(data) {
  return new Promise(function (resolve, reject) {
    if (!data) {
      reject(Error("parseName error"));
    }
    else {
      console.log("parseName: ", data.name);
      resolve(data.name);
    }
  });
}
function authName(name) {
  return new Promise(function (resolve, reject) {
    if (!name || name !== "Leanne Graham") {
      reject(Error("authName error"));
    }
    else {
      console.log("authName: ", name);
      resolve(name);
    }
  });
}
function displayName(name) {
  return new Promise(function (resolve, reject) {
    if (!name) {
      reject(Error("displayName error"));
    }
    else {
      console.log("displayName: ", name);
      resolve(1);
    }
  });
}

fetch(url)
  .then(getResponse)
  .then(parseName)
  .then(authName)
  .then(displayName)
  .catch((err) => {
    console.error(err);
  });
