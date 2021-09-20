import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Author} from "../author/author";

@Component({
  selector: 'author-dialog.html',
  templateUrl: 'author-dialog.html',
})
export class AuthorDialog {

  constructor(
    public dialogRef: MatDialogRef<AuthorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Author) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
