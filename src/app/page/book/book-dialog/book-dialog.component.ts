import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {BookRestService} from "../../../service/book-rest.service";
import {Book} from "../../../model/book";
import {PublisherRestService} from "../../../service/publisher-rest.service";
import {BookInfoRestService} from "../../../service/book-info-rest.service";
import {AuthorRestService} from "../../../service/author-rest.service";

@Component({
  selector: 'book-dialog',
  templateUrl: 'book-dialog.html',
})
export class BookDialogComponent {

  bookForm = this.formBuilder.group({
    name: [''],
    publisher: [],
    bookInformation: [],
    author: []
  })

  book: any;
  publisher: any;
  bookInformation: any;
  author: any;

  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name;
  }

  constructor(
    public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book, private formBuilder: FormBuilder,
    private bookRestService: BookRestService, private publisherRestService: PublisherRestService,
    private bookInfoRestService: BookInfoRestService, private authorRestService: AuthorRestService) {
    if (data.id != undefined) {
      this.bookRestService.getBookById(data.id).subscribe((response) => {
        this.book = response;
        this.bookForm.patchValue({
          name: this.book.name,
          publisher: this.book.publisher,
          bookInformation: this.book.bookInformation,
          author: this.book.author
        });

      });
    }
    this.publisherRestService.getPublisher().subscribe((response) => {
      this.publisher = response;
    });
    this.bookInfoRestService.getBookInformation().subscribe((response) => {
      this.bookInformation = response;
    });
    this.authorRestService.getAuthors().subscribe((response) => {
      this.author = response;
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.book = this.bookForm.value;
    if (this.data.id == undefined) {
      this.bookRestService.addBook(this.book);
    } else {
      this.book.id = this.data.id;
      this.bookRestService.updateBook(this.book);
    }
  }
}
