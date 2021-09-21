import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject} from "@angular/core";
import {Publisher} from "../publisher";

@Component({
  selector: 'update-publisher-dialog.html',
  templateUrl: 'update-publisher-dialog.html',
})
export class UpdatePublisherDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdatePublisherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Publisher) {
  }

  publisher: Publisher | undefined;

  onNoClick(): void {
    this.dialogRef.close();
  }

}
