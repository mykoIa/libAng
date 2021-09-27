import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {BookRestService} from "../book-rest.service";
import {Book} from "../book";

@Component({
  selector: 'book-dialog',
  templateUrl: 'book-dialog.html',
})
export class BookDialogComponent {

  bookForm = this.formBuilder.group({
    name: ['']
  })

  book: any;

  constructor(
    public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book, private formBuilder: FormBuilder, private bookRestService: BookRestService) {
    if (data.id != undefined) {
      this.bookRestService.getBookById(data.id).subscribe((response) => {
        this.book = response;
        this.bookForm.patchValue({
          fullName: this.book.fullName
        })
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
