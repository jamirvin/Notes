import { Component, OnInit } from '@angular/core';
import { Note } from './model/note';
import { NoteSchema, NotesService } from './notes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    notes: Note[];
    active: Note;

    constructor(private noteService: NotesService) {

    }

    ngOnInit() {
        this.noteService.getNotes().subscribe(notes => {
            this.notes = notes;
            this.active = notes[0];
            this.active.activate();
        })
    }

    onActivate(note: Note) {
        this.active.deactivate();
        note.activate();
        this.active = note;
    }
}
