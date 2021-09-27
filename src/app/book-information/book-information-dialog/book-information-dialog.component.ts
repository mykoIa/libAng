import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {BookInfoRestService} from "../book-info-rest.service";
import {BookInformation} from "../book-information";

@Component({
  selector: 'book-information-dialog',
  templateUrl: 'book-information-dialog.html',
})
export class BookInformationDialogComponent {

  bookInfoForm = this.formBuilder.group({
    genre: [''],
    numberOfPages: ['']
  })

  bookInfo: any;

  constructor(
    public dialogRef: MatDialogRef<BookInformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookInformation, private formBuilder: FormBuilder, private bookInfoRestService: BookInfoRestService) {
    if (data.id != undefined) {
      this.bookInfoRestService.getBookInformationById(data.id).subscribe((response) => {
        this.bookInfo = response;
        this.bookInfoForm.patchValue({
          genre: this.bookInfo.genre,
          numberOfPages: this.bookInfo.numberOfPages
        })
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
