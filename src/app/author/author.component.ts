import {Component, Inject, OnInit} from "@angular/core";
import {AuthorRestService} from "./author-rest.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthorDialog} from "../author-dialog/author-dialog.component";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {

  fullName: string | undefined;

  constructor(private rs: AuthorRestService, public dialog: MatDialog) {
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

  deleteAuthorById(id: string) {
    this.rs.deleteAuthor(id).subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthorDialog, {
      width: '250px',
      data: {name: this.fullName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fullName = result;
    });
  }

}
