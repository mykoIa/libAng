import {Publisher} from "../publisher";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject} from "@angular/core";

@Component({
  selector: 'add-publisher-dialog.html',
  templateUrl: 'add-publisher-dialog.html',
})
export class AddPublisherDialogComponent {
  publisher: Publisher | undefined;

  constructor(
    public dialogRef: MatDialogRef<AddPublisherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Publisher) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
