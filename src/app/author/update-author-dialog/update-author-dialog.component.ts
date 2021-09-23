import {Author} from "../author";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject} from "@angular/core";

@Component({
  selector: 'update-author-dialog.html',
  templateUrl: 'update-author-dialog.html',
})
export class UpdateAuthorDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateAuthorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Author) {
    this.author = data;
  }

  author: Author | undefined;

  onNoClick(): void {
    this.dialogRef.close();
  }

}
