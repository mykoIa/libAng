import {Component} from "@angular/core";
import {Publisher} from "./publisher";
import {PublisherRestService} from "./publisher-rest.service"
import {PublisherDialogComponent} from "./publisher-dialog/publisher-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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
    const dialogRef = this.dialog.open(PublisherDialogComponent, {
      width: '250px',
      data: {publisherName: this.publisher?.publisherName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.publisherRestService.addPublisher(result).subscribe(() => this.ngOnInit());
        this.ngOnInit();
      }
    });
  }

  openUpdateDialog(id: string) {
    const dialogRef = this.dialog.open(PublisherDialogComponent, {
      width: '250px',
      data: {publisherName: this.publisher?.publisherName, id: id}

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.publisherRestService.updatePublisher(result).subscribe(() => this.ngOnInit());
        this.ngOnInit();
      }
    });
  }

}
