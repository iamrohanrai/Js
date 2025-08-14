// const result = readFileWithPromise("./hello.txt", "utf-8");
// result
//   .then((content) => {
//     console.log("Content is :-", content);
//   })
//   .catch((err) => {
//     console.log("error while readfile is :-", err);
//   });

const fs = require("fs");

function readFileWithPromise(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, content) => {
      //   resolve(content); // signal do -user ke then function ko execute kr do
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}
function writeFileWithPromise(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function unlinkWithPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

readFileWithPromise("./hello.txt", "utf-8")
  .then((content) => {
    writeFileWithPromise("./backup.txt", content);
  })
  .then(() => {
    unlinkWithPromise("./hello.txt");
  })
  .catch((err) => {
    console.log("error ho gaya bhai", err);
  })
  .finally(() => console.log("all done"));
