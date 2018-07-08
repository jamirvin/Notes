import { Component, OnInit } from '@angular/core';
import { Note } from './model/note';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    notes = [
        new Note("example"), 
        new Note("Another example"),
        new Note("This is an example\nWith a newline")
    ];

    active: Note = this.notes[1];

    ngOnInit() {
        this.active = this.notes[1];
        this.active.activate();
    }

    onActivate(note: Note) {
        this.active.deactivate();
        note.activate();
        this.active = note;
    }
}
