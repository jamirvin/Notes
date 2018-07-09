import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../model/note';

@Component({
    selector: 'note-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {
    @Input()
    notes: Note[];

    @Output()
    activate: EventEmitter<Note> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onActivate(note: Note) {
        this.activate.emit(note);
    }

    addCard() {
        let newNote = new Note("", this.notes[this.notes.length - 1].id + 1);
        this.notes.push(newNote);
        this.activate.emit(newNote);
    }
}