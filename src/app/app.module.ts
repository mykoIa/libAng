import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AuthorComponent} from "./page/author/author.component";
import {HomeComponent} from "./page/home/home.component";
import {PublisherComponent} from "./page/publisher/publisher.component";
import {BookInformationComponent} from "./page/book-information/book-information.component";
import {BookComponent} from "./page/book/book.component";
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AuthorDialogComponent} from "./page/author/author-dialog/author-dialog.component";
import {PublisherDialogComponent} from "./page/publisher/publisher-dialog/publisher-dialog.component";
import {BookInformationDialogComponent} from "./page/book-information/book-information-dialog/book-information-dialog.component";
import {MatSelectModule} from "@angular/material/select";
import {BookDialogComponent} from "./page/book/book-dialog/book-dialog.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    BookInformationDialogComponent,
    BookDialogComponent
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
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
