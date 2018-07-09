import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../model/note';

@Component({
    selector: 'note-compose',
    templateUrl: 'compose.component.html',
    styleUrls: ['compose.component.css']
})
export class ComposeComponent implements OnInit {

    @Input()
    note: Note;

    getText() {
        if (this.note)   
            return this.note.text;
        else 
            return ""
    }

    constructor() { }

    ngOnInit() { }
}