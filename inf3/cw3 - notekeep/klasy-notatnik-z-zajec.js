// note.js
class Note {
    constructor(title, content, color = 'red', pinned = false) {
        this.title = title;
        this.content = content;
        this.color = color;
        this.pinned = pinned;
        this.createdDate = new Date();
        this.id = '' + Date.now();
    }
}
// const n1 = new Note('tytuł', 'treść')

// notes.js
class Notes {
    constructor(containerSelector) {
        this.notesArr = [];
        this.db = new Db();
        this.notesUI = new NotesUI(containerSelector)
    }

    addNote(note) {
        this.notesArr.push(note);
        this.db.saveNotes(this.notesArr);
        this.notesUI.addNote(note);
    }
    removeNote(id) {
        
    }
    getNotes() {
        return this.notesArr;
    } 
    getNote(id) {
        return this.notesArr.find(el => el.id === id);
    } 
}

// db.js
class Db {
    constructor() {
        this.notesLSKey = 'notes'
    }

    saveNotes(notes) {
        localStorage.setItem(this.notesLSKey, notes);
    }
    getNotes() {
        return JSON.parse(localStorage.getItem(this.notesLSKey));
    }
}

// ui.js
class NotesUI {
    constructor(containerSelector) {
        this.notesContainer = this.getNotesContainer(containerSelector)
    }
    getNotesContainer(containerSelector) {
        return document.querySelector(containerSelector)
    }
    createNote(note) {
        const htmlNote = document.createElement('div')
        htmlNote.classList.add('note')
        return htmlNote;
    }
    getNote(id) {
        noteSelector = '#'+ id;
        this.notesContainer.querySelector(noteSelector);
    }
    addNote(note) {
        const htmlNote = this.createNote(note);
        this.notesContainer.appendChild(htmlNote)
    }
    removeNote(id) {
        const htmlNote = this.getNote(id);
        this.notesContainer.removeChild(htmlNote)
    }
}
const ui = new UI('main')


// main.js
const notesObj = new Notes();
const notesArr = notesObj.notesArr;
const notesArr = notesObj.getNotes();




