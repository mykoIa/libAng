import {Component, OnInit} from "@angular/core";
import {AuthorRestService} from "./author-rest.service";
import {MatDialog} from "@angular/material/dialog";
import {Author} from "./author";
import {AuthorDialogComponent} from "./author-dialog/author-dialog.component";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {

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
    this.authorRestService.deleteAuthor(id).subscribe(() => this.ngOnInit());
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AuthorDialogComponent, {
      width: '250px',
      data: {fullName: this.author?.fullName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authorRestService.addAuthor(result).subscribe(() => this.ngOnInit());
        this.ngOnInit();
      }
    });
  }

  openUpdateDialog(id: string) {
    const dialogRef = this.dialog.open(AuthorDialogComponent, {
      width: '250px',
      data: {fullName: this.author?.fullName, id: id}

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authorRestService.updateAuthor(result).subscribe(() => this.ngOnInit());
        this.ngOnInit();
      }
    });
  }
}
