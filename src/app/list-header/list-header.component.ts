import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
    selector: 'note-list-header',
    templateUrl: 'list-header.component.html',
    styleUrls: ['list-header.component.css']
})

export class ListHeaderComponent implements OnInit {
    @Output()
    addCard: EventEmitter<void> = new EventEmitter();
    
    constructor() { }

    ngOnInit() { }

}