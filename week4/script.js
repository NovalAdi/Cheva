let notes = [];

function loadData() {
  // Kode untuk simpan ke sessionStorage
  // const data = sessionStorage.getItem("notes");

  // Kode untuk simpan ke localStorage
  const data = localStorage.getItem("notes");
  if (data) {
    notes = JSON.parse(data);
  }
}

function saveData() {
  // Kode untuk simpan ke sessionStorage
  // sessionStorage.setItem("notes", JSON.stringify(notes));

  // Kode untuk simpan ke localStorage
  localStorage.setItem("notes", JSON.stringify(notes));
}

let notesElement = document.getElementById("notes-list");
function renderNotes() {
  notesElement.innerHTML = "";
  notes.forEach((note, index) => {
    const newElement = `
            <div class="note">
                <h3>${note.title}</h3>
                <p>${note.description}</p>
                <button onclick="deleteNote(${index})">Hapus</button>
            </div>
        `;
    notesElement.innerHTML += newElement;
  });
}

function addNote() {
  const newTitle = document.getElementById("title").value;
  const newDescription = document.getElementById("description").value;
  if (newTitle && newDescription && newTitle.length > 1 && newDescription.length > 1) {
    const newData = {
      title: newTitle,
      description: newDescription,
    };
    notes.push(newData);
    saveData();
    renderNotes();
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveData();
  renderNotes();
}

loadData();
renderNotes();
