var myPromise = function (param) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (param) {
        resolve(1);
      }
      else {
        reject(-1);
      }
    }, 5000);
  });
};

function resolveFunc(res) {
  console.log("resolved: ", res);
};

function rejectFunc(err) {
  console.log("rejected: ", err);
};

myPromise(false)
  .then(resolveFunc)
  .catch(rejectFunc);
