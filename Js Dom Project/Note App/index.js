const textarea = document.getElementById("text");
const addBtn = document.getElementById("addbtn");
const delBtn = document.getElementById("delbtn");
const noteList = document.querySelector("ul");

// ADD NOTE
addBtn.addEventListener("click", () => {
  const noteText = textarea.value.trim();
  if (!noteText) {
    alert("Please Enter A Note");
    return;
  } else {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    if (notes.includes(noteText)) {
      alert("Note already exist");
      textarea.value = "";
      return;
    }

    addNoteToDom(noteText);
    saveItemLocalStorage(noteText);
    textarea.value = "";
  }
});

// add note to dom
function addNoteToDom(noteText) {
  const li = document.createElement("li");
  li.textContent = noteText;

  const del = document.createElement("button");
  del.textContent = "❌";
  del.style.marginLeft = "10px";

  del.addEventListener("click", () => {
    li.remove();
    removeNoteFromStorage(noteText);
  });
  li.appendChild(del);
  noteList.append(li);
}

function removeNoteFromStorage(noteText) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter((note) => note !== noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
}

// del button
delBtn.addEventListener("click", () => {
  noteList.innerHTML = "";
  localStorage.removeItem("notes");
  textarea.value = "";
});

// Save Note to local storage
function saveItemLocalStorage(noteText) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
}
function loadNotesFromLocalStorage() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach((note) => addNoteToDom(note));
}
loadNotesFromLocalStorage();
