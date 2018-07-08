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

    constructor() { }

    ngOnInit() { }
}