import {Component} from "@angular/core";

import {MatDialog} from "@angular/material/dialog";
import {BookInformation} from "./book-information";
import {BookInfoRestService} from "./book-info-rest.service";
import {BookInformationDialogComponent} from "./book-information-dialog/book-information-dialog.component";

@Component({
  selector: 'bookInfo',
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.css']
})
export class BookInformationComponent {

  constructor(private bookInformationService: BookInfoRestService, public dialog: MatDialog) {
  }

  displayedColumns = ["id", "genre", "numberOfPages", "update", "delete"];

  stringObject: any;

  bookInfo: BookInformation | undefined;

  ngOnInit(): void {
    this.bookInformationService.getBookInformation().subscribe
    (
      (response) => {
        this.stringObject = response;
      },
      (error) => {
        console.log("Error Occurred : " + error);
      }
    )
  }

  deletePublisherById(id: string) {
    this.bookInformationService.deleteBookInformation(id).subscribe(() => this.ngOnInit());
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(BookInformationDialogComponent, {
      width: '250px',
      data: {genre: this.bookInfo?.genre, numberOfPages: this.bookInfo?.numberOfPages}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookInformationService.addBookInformation(result).subscribe(() => this.ngOnInit());
        this.ngOnInit();
      }
    });
  }

  openUpdateDialog(id: string) {
    const dialogRef = this.dialog.open(BookInformationDialogComponent, {
      width: '250px',
      data: {id: id, genre: this.bookInfo?.genre, numberOfPages: this.bookInfo?.numberOfPages}

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookInformationService.updateBookInformation(result).subscribe(() => this.ngOnInit());
        this.ngOnInit();
      }
    });
  }

}
