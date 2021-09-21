import {Component} from "@angular/core";
import {Publisher} from "./publisher";
import {PublisherRestService} from "./publisher-rest.service"
import {AddPublisherDialogComponent} from "./add-publisher-dialog/add-publisher-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {UpdatePublisherDialogComponent} from "./update-publisher-dialog/update-publisher-dialog.component";

@Component({
  selector: 'publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent {

  constructor(private publisherRestService: PublisherRestService, public dialog: MatDialog) {
  }

  displayedColumns = ["id", "publisherName", "update", "delete"];

  stringObject: any;

  id: string | undefined;

  publisher: Publisher | undefined;

  ngOnInit(): void {
    this.publisherRestService.getPublisher().subscribe
    (
      (response) => {
        this.stringObject = response;
      },
      (error) => {
        console.log("Error Occurred : " + error);
      }
    )
  }

  deletePublisherById(id: string) {
    this.publisherRestService.deletePublisher(id).subscribe(() => this.ngOnInit());
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddPublisherDialogComponent, {
      width: '250px',
      data: {name: this.publisher?.publisherName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.publisherRestService.addPublisher(result).subscribe(() => this.ngOnInit());
        this.ngOnInit();
      }
    });
  }

  openUpdateDialog(id: string) {
    const dialogRef = this.dialog.open(UpdatePublisherDialogComponent, {
      width: '250px',
      data: {name: this.publisher?.publisherName}

    });
    this.id = id;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.publisherRestService.updatePublisher(result, this.id).subscribe(() => this.ngOnInit());
        this.ngOnInit();
      }
    });
  }

}
