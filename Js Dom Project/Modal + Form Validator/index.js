const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModelBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// validation
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("click", (e) => {
  e.preventDefault(); // page reload prevent kr dena form submit ke baad

  let isValid = true;
  nameError.textContent = "";
  emailError.textContent = "";

  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  }
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Email must contain @ symbol.";
    isValid = false;
  }

  if (isValid) {
    alert("Form Submitted");
    modal.classList.add("hidden");
    form.reset();
  }
});
