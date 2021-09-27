import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AuthorComponent} from "./author/author.component";
import {HomeComponent} from "./home/home.component";
import {PublisherComponent} from "./publisher/publisher.component";
import {BookInformationComponent} from "./book-information/book-information.component";
import {BookComponent} from "./book/book.component";
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AuthorDialogComponent} from "./author/author-dialog/author-dialog.component";
import {PublisherDialogComponent} from "./publisher/publisher-dialog/publisher-dialog.component";
import {AddBookInformationDialogComponent} from "./book-information/add-book-information-dialog/add-book-information-dialog.component";

const routes = [
  {path: '', component: HomeComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'publisher', component: PublisherComponent},
  {path: 'bookInfo', component: BookInformationComponent},
  {path: 'book', component: BookComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    HomeComponent,
    PublisherComponent,
    BookInformationComponent,
    BookComponent,
    AuthorDialogComponent,
    PublisherDialogComponent,
    AddBookInformationDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
