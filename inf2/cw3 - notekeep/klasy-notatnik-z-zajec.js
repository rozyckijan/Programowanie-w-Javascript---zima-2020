class Note {
    constructor(title, content, color, pinned = false) {        
        this.title = title;
        this.content = content;
        this.color = color;
        this.pinned = isPinned();
        this.createDate = new Date();
        this.id = 'id' + Math.random()*10000;
    }
}

class Notes {
    constructor() {
        this.db = new Db();
        this.notesArr = this.db.get(); 
        this.notesUI = new NotesUI();
    }
    addNote(note) {
        this.notesArr.push(note);
        this.db.save(this.notesArr);
        this.notesUI.addNoteHtml(note);
    }
    removeNote(id) {
        const a = this.notesArr.filter(el => el.id != id);   
        this.db.save(a);
    }

    getNote(id) {
        const a = this.notesArr.find(el => el.id === id);
        console.log(a);
        return this.notesArr.find(el => el.id === id);
    }
    get() {
        return [...this.notesArr];
    }
    pinnedNote(id) {
        this.index = this.notesArr.findIndex(element => {element.id == id});
        this.notesArr[this.index].pinned = !this.notesArr[this.index].pinned;
        this.db.save(this.notesArr);
    }
}
class Db {
    constructor() {
        this.lsNotesKey = 'notes';
    }
    save(notes) {
            localStorage.setItem(this.lsNotesKey, JSON.stringify(notes));
    }
    get() {
        const notesFromLocalStorage = JSON.parse(localStorage.getItem(this.lsNotesKey));

        if (notesFromLocalStorage)
        {
            const convertedNotes = notesFromLocalStorage.map ( notes => {
                notes.createDate = new Date(notes.createDate);
                return notes;
            });
            return convertedNotes;
        }

        else return [];
    }
}
class NotesUI {
    constructor(notesEl = 'section') {
        this.notesObj = document.querySelector(notesEl);
    
    }
    getNote(id) {
        return document.querySelector('#' + id);
    }
    addNoteHtml(note) {

        const noteEl = document.createElement('div');
        noteEl.classList.add('note');

        this.getNotes().appendChild(noteEl);
        
        const htmlTitle = document.createElement('h1');
        const htmlContent = document.createElement('p');
        const htmlButton = document.createElement('button');
        const htmlTime = document.createElement('h4');
        
        noteEl.style.backgroundColor=note.color;

        noteEl.classList.add('note');
        noteEl.setAttribute('name', note.id);
        htmlTitle.innerHTML = note.title;
        htmlContent.innerHTML = note.content;
        htmlButton.innerHTML = 'Remove'; 
        htmlTime.innerHTML = note.createDate.toLocaleString(); 
        htmlButton.id = note.id;

        noteEl.appendChild(htmlTitle);
        noteEl.appendChild(htmlContent);
        noteEl.appendChild(htmlButton);
        noteEl.appendChild(htmlTime);

        return noteEl;
    }
    removeNote(){
        const note = this.getNote(id);
        const container = this.getNotesContent();
        container.removeChild(note);
    }
    getNotes(){
        return this.notesObj;
    }
}