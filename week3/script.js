let notes = [
    {
        title: "Judul 1",
        desc: "Deskripsi 1",
    },
    {
        title: "Judul 2",
        desc: "Deskripsi 2",
    },
]

let notesElement = document.getElementById('notes-list')

function renderNotes() {
    notesElement.innerHTML = ""
    notes.forEach((note, index) => {
        const newElemnet = `
        <div class="note">
            <h3>${note.title}</h3>
            <p>${note.desc}</p>
            <button onclick="deleteNote(${index})">Hapus</button>
        </div>
        `
        notesElement.innerHTML += newElemnet
    });
}

function addNote() {
    const newTitle = document.getElementById('title').value
    const newDesc = document.getElementById('description').value
    if (newTitle && newDesc && newTitle.length > 1 && newDesc.length > 1) {
        const newData = {
            title: newTitle,
            desc: newDesc
        }
        notes.push(newData)
        renderNotes()
    }
}

function deleteNote(index) {
    notes.splice(index, 1)
    renderNotes()
}

renderNotes()