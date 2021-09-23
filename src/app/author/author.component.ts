import {Component, OnInit} from "@angular/core";
import {AuthorRestService} from "./author-rest.service";
import {MatDialog} from "@angular/material/dialog";
import {AuthorDialog} from "./add-author-dialog/add-author-dialog.component";
import {Author} from "./author";
import {UpdateAuthorDialogComponent} from "./update-author-dialog/update-author-dialog.component";

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

  id: string | undefined;

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
    const dialogRef = this.dialog.open(AuthorDialog, {
      width: '250px',
      data: {name: this.author?.fullName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authorRestService.addAuthor(result).subscribe(() => this.ngOnInit());
        this.ngOnInit();
      }
    });
  }

  openUpdateDialog(id: string) {
    const dialogRef = this.dialog.open(UpdateAuthorDialogComponent, {
      width: '250px',
      data: {name: this.author?.fullName, id: this.author?.id}

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authorRestService.updateAuthor(result, this.id).subscribe(() => this.ngOnInit());
        this.ngOnInit();
      }
    });
  }
}
