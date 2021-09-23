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
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AuthorDialog} from "./author/add-author-dialog/add-author-dialog.component";
import {MatInputModule} from "@angular/material/input";
import {UpdateAuthorDialogComponent} from "./author/update-author-dialog/update-author-dialog.component";
import {AddPublisherDialogComponent} from "./publisher/add-publisher-dialog/add-publisher-dialog.component";
import {UpdatePublisherDialogComponent} from "./publisher/update-publisher-dialog/update-publisher-dialog.component";
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
    AuthorDialog,
    UpdateAuthorDialogComponent,
    AddPublisherDialogComponent,
    UpdatePublisherDialogComponent,
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
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
