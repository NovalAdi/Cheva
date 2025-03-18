let notes = []

let notesElement = document.getElementById('notes-list')

function loadData() {
    const data = localStorage.getItem('notes')
    if (data) {
        notes = JSON.parse(data)
    }
}

function saveData() {
    localStorage.setItem('notes', JSON.stringify(notes))
}

function renderNotes() {
    notesElement.innerHTML = "";
    notes.forEach((note, index) => {
        const newElemnet = `
        <div class="card">
            <h1>${note.title}</h1>
            <p>${note.desc}</p>
            <p>Deadline: ${note.deadline}</p>
            <button onclick="deleteNote(${index})">Hapus</button>
        </div>
        `
        notesElement.innerHTML += newElemnet
    });
}

function addNote() {
    const newTitle = document.getElementById('title').value
    const newDesc = document.getElementById('desc').value
    const newDeadline = document.getElementById('deadline').value
    if (newTitle && newDesc && newDeadline && newTitle.length > 1 && newDesc.length > 1 && newDeadline.length > 1) {
        const newData = {
            title: newTitle,
            desc: newDesc,
            deadline: newDeadline
        }
        notes.push(newData)
        saveData()
        renderNotes()
    }
}

function deleteNote(index) {
    notes.splice(index, 1)
    saveData()
    renderNotes()
}

loadData()
renderNotes()