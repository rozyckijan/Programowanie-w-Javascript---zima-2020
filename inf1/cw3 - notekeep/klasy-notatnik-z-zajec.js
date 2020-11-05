// ---------------------------
// only scratch from labs not completed/tested code!
// --------------------------

// note.js
class Note {
    constructor(title, content, color = 'red', pinned = false) {        
        this.title  = title;
        this.content = content;
        this.color = color;
        this.pinned = pinned;
        this.createDate = new Date();
        this.reminderDate = new Date(Date.now() + 1000*60*10 );
        
        this.id = Date.now();
    }    
}

// notes.js
class Notes {
    constructor(containerSelector) {
        this.notesArr = [];
        this.db = new Db();
        this.notesUI = new NotesUI(containerSelector);
    }

    addNote(note) {
        this.notesArr.push(note);
        this.db.saveNotes(this.notesArr);
        this.notesUI.addNote(note);
    }
    removeNote(id) {
        this.notesArr = this.notesArr.filter(el => el.id !== id);
        // this.notesArr.findeIndex, then this.notesArr.splice        
        this.db.saveNotes(this.notesArr);
        this.notesUI.removeNote(id);
    }

    getNote(id) {
        return this.notesArr.find(el => el.id === id);
    }

    getNotes() {
        return [...this.notesArr];
    }
}

// db.js
class Db {
    constructor() {
        this.lsNotesKey = 'notes';
    }
    saveNotes(notes) {
        localStorage.setItem(this.lsNotesKey, JSON.stringify(notes));
    }
    getNotes() {
        // check if localStorage has item this.lsNotesKey
        return JSON.parse(localStorage.getItem(this.lsNotesKey));
    }
}

// notes-ui.js
class NotesUI {
    constructor(containerSelector = 'section') {
        this.notesContainer = document.querySelector(containerSelector);
    }
    addNote(note) {
        const htmlNote = this.createNote(note);
        const container = this.getNotesContainer();
        container.appendChild(htmlNote);
    }
    createNote(note) {
        const htmlNote = document.createElement('div');
        htmlNote.classList.add('note');
        // do all the things with notehtml object - create title, content ...
        return htmlNote;
    }
    removeNote(id) {
        const note = this.getNote(id);
        const container = this.getNotesContainer();
        container.removeChild(note);
    }
    getNote(id) {
        return document.querySelector('#' + id);
    }
    getNotesContainer() {
        return this.notesContainer;
    }
}

// main.js
const notesObj = new Notes();

document.querySelector('#addNewNote').addEventListener('click', onNewNote);

function checkForNotifications(notes) {
    const timestamp = Date.now();
    const notifies = notes.filter(el => Math.abs(el.reminderDate.timestamp - timestamp) < 1000 );
    if (notifies.length > 0) {
        // show notifications
    }
}
setInterval(() => {
    checkForNotifications();
}, 1000);

// const notesArr = notesObj.getNotes()

// notes collection
// storage 
// ui operations 