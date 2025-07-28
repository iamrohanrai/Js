function changeBackground(bgcolor, color) {
  document.body.style.backgroundColor = bgcolor;
  document.body.style.color = color;
}

// const darkButton = document.getElementById("dark-mode-button");
// // console.log(darkButton);
// darkButton.addEventListener("click", function () {
//   //console.log("i got clicked");
//   changeBackground("black", "white");
// });
// darkButton.addEventListener("click", function () {
//   console.log("storing data");
// });

const themeButton = document.getElementById("theme-mode-button");
themeButton.addEventListener("click", function () {
  const currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor == "white") {
    changeBackground("black", "white");
    themeButton.innerText = "Dark Mode";
  } else {
    changeBackground("white", "black");
    themeButton.innerText = "Light Mode";
  }
});
