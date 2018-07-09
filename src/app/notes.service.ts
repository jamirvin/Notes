import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Note } from './model/note';

export type NoteSchema = {
    id: number,
    text: string
}

@Injectable({
    providedIn: 'root'
})
export class NotesService {

    baseUrl = "/api";

    constructor(private http: HttpClient) { }

    getNotes() {
        return this.http.get<NoteSchema[]>(this.baseUrl + '/notes')
            .pipe(
                map(notes => notes.map(noteJson => new Note(noteJson.text, noteJson.id)))
            );
    }

    addNote(note: Note) {
        let noteJson = { 'text': note.text, 'id': note.id}
        return this.http.post(`${this.baseUrl}/notes/${note.id}`, noteJson);
    }

}