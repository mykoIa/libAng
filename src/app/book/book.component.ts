import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {BookRestService} from "./book-rest.service";
import {BookDialogComponent} from "./book-dialog/book-dialog.component";

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookRestService: BookRestService, public dialog: MatDialog) {
  }

  displayedColumns = ["id", "name", "bookInformation", "publisher", "author", "update", "delete"];

  stringObject: any;

  book: any;

  ngOnInit(): void {
    this.bookRestService.getBook().subscribe
    (
      (response) => {
        this.stringObject = response;
      },
      (error) => {
        console.log("Error Occurred : " + error);
      }
    )
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: '250px',
      data: {
        name: this.book?.name
      }
    });

    dialogRef.afterClosed().subscribe(() => this.ngOnInit());
  }

  deleteBookById(id: string) {
    this.bookRestService.delete(id).subscribe(() => this.ngOnInit());
  }

  openUpdateDialog(id: string) {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: '250px',
      data: {name: this.book?.name, id: id}

    });

    dialogRef.afterClosed().subscribe(() => this.ngOnInit());
  }
}
