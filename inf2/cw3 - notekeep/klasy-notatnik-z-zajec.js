// przykładowa architektura aplikacji NoteKeep
// class Note {
//     constructor(title, description, pinned, color) {
//         this.id = 'id' + Math.random()*10000;
//         this.title = title //itd
//         this.createDate = new Date()
//     }
// }

// const n1 = new Note('title', 'descrip', true, 'red')

// class Notes {
//     constructor() {
//         this.db = new Db();
//         this.htmlObj = new UI();
//         this.notes = this.db.get();
//     }

//     addNote(note) {
//         this.notes.push(note);
//         this.db.save(this.notes);
//         this.htmlObj.addNote(note);
//     }

//     removeNote(id) {
//         const note = this.getNote(id);
//         // remove note
//     }
//     getNotes() {
//         return this.notes;
//     }
//     getNote(id) {
//         return this.notes.find(el =>el.id === id)
//     }
// }

// // db.js
// class Db {
//     constructor()  {
//         this.notesKey = 'notes';
//     }
//     save(notes){
//         // localStorage.setItem(this.notesKey)
//     }
//     get() {
//         // return localStorage.getItem(this.notesKey)
//     }
// }


// class UI {
//     constructor(notesEl = 'section') {
//         this.notesObj = document.querySelector(notesEl);
//     }

//     getNote(id) {

//     }
//     addNote(note) {
//         const noteEl = document.createElement('div')
//         noteEl.classList.add('note');
//         // ...do all the things with content
//         this.getNotes().appendChild(noteEl);
//     }
//     removeNote() {

//     }
//     getNotes() {
//         return this.notesObj;
//     }



// }
// // main.js
// const notesObj = new Notes();
// const notesArr = notesObj.getNotes();
// const newNote = new Note('asd')
 
//     const noteEl = document.createElement('div')
//  noteEl.classList.add('note');
//  newNote.htmlOb = noteEl;

// notesArr.addNote(newNote);


// somebutton.addEventListener('click',(ev) => {
//     const id = ev.target.id
//     notesObj.removeNote(id);
// })