import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './note-list/list.component';
import { ComposeComponent } from './compose/compose.component';
import { CardComponent } from './card/card.component';
import { ListHeaderComponent } from './list-header/list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ComposeComponent,
    CardComponent,
    ListHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
