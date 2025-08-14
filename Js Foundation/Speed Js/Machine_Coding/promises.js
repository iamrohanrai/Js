// const fs = require("fs");
// console.log("Starting Program");

// const contents = fs.readFileSync("./hello.txt", "utf-8");
// console.log("reading success:-", contents);

// console.log("End of progrmam");

// const fs = require("fs");
// console.log("Starting Program");

// fs.readFile("./hello.txt", "utf-8", function (err, content) {
//   if (err) {
//     console.log("Error in file reading", err);
//   } else {
//     console.log("File reading success:-", content);
//   }
// });

// console.log("End of progrmam");

/*
const fs = require("fs");
fs.readFile("./hello.txt", "utf-8", function (err, content) {
  if (err) {
    console.log("Error Reading File", err);
  } else {
    console.log("Content of file is :-", content);
  }
  fs.writeFile("./backup.txt", content, function (err) {
    if (err) {
      console.log("Error while writing backup.txt", err);
    } else {
      fs.unlink("./hello.txt", function (err) {
        if (err) {
          console.log("Error while deleting", err);
        } else {
          console.log("All Done");
        }
      });
    }
  });
}); */
// Above code is call back hell

const fsv2 = require("fs/promises");
fsv2
  .readFile("./backup.txt", "utf-8")
  .then((content) => {
    return fsv2.writeFile("hello.txt", content); // its better to return kyuki agar heavy copying raha toh undefined ho jayega aur write file se pehle unlink chlega then undefine aayega
  })
  .then(() => fsv2.unlink("./backup.txt"))
  .catch((err) => {
    console.log("error", err);
  });
