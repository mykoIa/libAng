import {Component, OnInit} from "@angular/core";
import {AuthorRestService} from "./author-rest.service";
import {MatDialog} from "@angular/material/dialog";
import {AuthorDialog} from "../author-dialog/author-dialog.component";
import {Author} from "./author";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {

  fullName: string | undefined;

  constructor(private authorRestService: AuthorRestService, public dialog: MatDialog) {
  }

  displayedColumns = ["id", "fullName", "update", "delete"];

  stringObject: any;

  author: Author | undefined;

  ngOnInit(): void {
    this.authorRestService.getAuthors().subscribe
    (
      (response) => {
        this.stringObject = response;
      },
      (error) => {
        console.log("Error Occurred : " + error);
      }
    )
  }

  deleteAuthorById(id: string) {
    this.authorRestService.deleteAuthor(id).subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthorDialog, {
      width: '250px',
      data: {name: this.fullName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.authorRestService.addAuthor(result);
      this.fullName = result;
    });
  }

}
