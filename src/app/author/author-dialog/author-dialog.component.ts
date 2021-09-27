import {Author} from "../author";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {AuthorRestService} from "../author-rest.service";

@Component({
  selector: 'update-author-dialog.html',
  templateUrl: 'author-dialog.html',
})
export class AuthorDialogComponent {

  authorForm = this.formBuilder.group({
    fullName: ['']
  })

  author: any;

  constructor(
    public dialogRef: MatDialogRef<AuthorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Author, private formBuilder: FormBuilder, private authorRestService: AuthorRestService) {
    if (data.id != undefined) {
      this.authorRestService.getAuthorById(data.id).subscribe((response) => {
        this.author = response;
        this.authorForm.patchValue({
          fullName: this.author.fullName
        })
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
