import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject} from "@angular/core";
import {BookInformation} from "../book-information";

@Component({
  selector: 'add-book-information-dialog.html',
  templateUrl: 'add-book-information-dialog.html',
})
export class AddBookInformationDialogComponent {
  bookInfo: BookInformation | undefined;

  constructor(
    public dialogRef: MatDialogRef<AddBookInformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookInformation) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
