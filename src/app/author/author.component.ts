import {Component, OnInit} from "@angular/core";
import {Author} from "./author";
import {RestService} from "../rest.service";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {

  constructor(private rs: RestService) {
  }

  columns = ["id", "Full Name"];

  index = ["id", "fullName"];

  authors: Author[] = []

  ngOnInit(): void {
    this.rs.getAuthors().subscribe
    (
      (response) => {
        this.authors = response;
      },
      (error) => {
        console.log("Error Occured : " + error);
      }
    )
  }
}
