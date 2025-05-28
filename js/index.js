class Note {
    constructor(title, content, date) {
        this.title = title;
        this.content = content;
        this.date = date;
    }
}

class NotesList {
    constructor() {
        this.notes = [];
    }

    addNote(note) {
        this.notes.push(note);
    }

    removeNote(index) {
        this.notes.splice(index, 1);
    }
}

addEventListener("DOMContentLoaded", () => {

    const addNoteButton = document.getElementById("addNote");
    const notesContainer = document.getElementById("notesContainer");
    const notesHolder = document.getElementById("notes");
    const newNotesContainer = document.getElementById("newNote");

    let storedNotes;
    if (localStorage.getItem("StoredNotes") === null) {
        storedNotes = new NotesList();
    } else {
        const data = JSON.parse(localStorage.getItem("StoredNotes"));
        storedNotes = new NotesList();
        data.notes.forEach(Note => {
            storedNotes.addNote(new Note(Note.title, Note.content, Note.date));
        });
    }

    storedNotes.notes.forEach(note => {
        let date = note.date;
        let title = note.title;
        let content = note.content;

        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `
        <h2>${title}</h2>
        <h4>${date}</h4>
        <p>${content}</p>
    `;
        notesContainer.appendChild(noteElement);
    });

    addNoteButton.addEventListener("click", () => {
        notesHolder.style.display = "none";
        newNotesContainer.style.display = "block";
    });
})