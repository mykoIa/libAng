import {Component, OnInit} from "@angular/core";
import {AuthorRestService} from "../../service/author-rest.service";
import {MatDialog} from "@angular/material/dialog";
import {Author} from "../../model/author";
import {AuthorDialogComponent} from "./author-dialog/author-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {

  constructor(private authorRestService: AuthorRestService, public dialog: MatDialog, private snackBar: MatSnackBar) {
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
    this.authorRestService.deleteAuthor(id).subscribe(() => {
      this.ngOnInit();
    }, (error) => {
      this.openSnackBar();
    });
  }

  openSnackBar() {
    this.snackBar.open("This element has connections", '', {
      duration: 1000
    });
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
