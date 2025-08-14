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
async function doTask() {
  try {
    const fileContent = await readFileWithPromise("./hello.txt", "utf-8");
    await writeFileWithPromise("./backup2.txt", fileContent);
    await unlinkWithPromise("./hello.txt");
  } catch (error) {
    console.log("Error while running", error);
  }
}
doTask().then(() => console.log("All Done"));
