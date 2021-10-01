import {Publisher} from "../../../model/publisher";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {PublisherRestService} from "../../../service/publisher-rest.service";

@Component({
  selector: 'add-publisher-dialog.html',
  templateUrl: 'publisher-dialog.html',
})
export class PublisherDialogComponent {

  publisherForm = this.formBuilder.group({
    publisherName: ['']
  })

  publisher: any;

  constructor(
    public dialogRef: MatDialogRef<PublisherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Publisher, private formBuilder: FormBuilder, private publisherRestService: PublisherRestService) {
    if (data.id != undefined) {
      this.publisherRestService.getPublisherById(data.id).subscribe((response) => {
        this.publisher = response;
        this.publisherForm.patchValue({
          publisherName: this.publisher.publisherName
        })
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
