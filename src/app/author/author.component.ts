import {Component, OnInit} from "@angular/core";
import {RestService} from "../rest.service";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {

  constructor(private rs: RestService) {
  }

  displayedColumns = ["id", "fullName", "update", "delete"];

  stringObject: any;

  ngOnInit(): void {
    this.rs.getAuthors().subscribe
    (
      (response) => {
        this.stringObject = response;
      },
      (error) => {
        console.log("Error Occurred : " + error);
      }
    )
  }
}
