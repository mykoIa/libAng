import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {BookRestService} from "../book-rest.service";
import {Book} from "../book";
import {PublisherRestService} from "../../publisher/publisher-rest.service";

@Component({
  selector: 'book-dialog',
  templateUrl: 'book-dialog.html',
})
export class BookDialogComponent {

  bookForm = this.formBuilder.group({
    name: [''],
    publisher: []
  })

  book: any;
  publisher: any;

  constructor(
    public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book, private formBuilder: FormBuilder, private bookRestService: BookRestService, private publisherRestService: PublisherRestService) {
    if (data.id != undefined) {
      this.bookRestService.getBookById(data.id).subscribe((response) => {
        this.book = response;
        this.bookForm.patchValue({
          fullName: this.book.fullName
        })
      });
    } else {
      this.publisherRestService.getPublisher().subscribe((response) => {
        this.publisher = response;
        this.bookForm.patchValue({
          publisher: this.publisher
        })
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
