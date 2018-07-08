import { Component, OnInit, Input, HostListener, HostBinding } from '@angular/core';
import { Note } from '../model/note';

@Component({
    selector: 'note-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.style.css'],
    host: {
        '[class.active]': 'note.active'
    }
})

export class CardComponent implements OnInit {

    @Input()
    note: Note;

    constructor() { }

    ngOnInit() { }

}