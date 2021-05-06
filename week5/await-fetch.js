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

function parseName1(data) {
  return new Promise(function (resolve, reject) {
    reject(Error("parseName error"));
  });
}

async function getName1() {
  try {
    let name = await fetch(url)
      .then(getResponse)
      .then(parseName1);
  }
  catch (err) {
    console.error(err);
  }
  console.log("getName: ", name);
}

getName1();


async function getName2() {
  try {
    let response = await fetch(url);
    let data = await getResponse(response);
    let name = await parseName1(data);
    console.log("getName: ", name);
  }
  catch (e) {
    console.error(e);
  }
}

getName2();
