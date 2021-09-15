import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorComponent} from "./author/author.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";

const routes = [
  {path: '', component: HomeComponent},
  {path: 'author', component: AuthorComponent}
]
@NgModule({
  declarations: [
    AppComponent, AuthorComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
