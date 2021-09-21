import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Author} from "../author";

@Component({
  selector: 'author-dialog.html',
  templateUrl: 'add-author-dialog.html',
})
export class AuthorDialog {
  author: Author | undefined;

  constructor(
    public dialogRef: MatDialogRef<AuthorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Author) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
