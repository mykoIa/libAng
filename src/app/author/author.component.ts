import {Component, OnInit} from "@angular/core";
import {AuthorRestService} from "./author-rest.service";

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {

  constructor(private rs: AuthorRestService) {
  }

  displayedColumns = ["id", "fullName", "update", "delete"];

  stringObject: any;

  ngOnInit(): void {
    this.rs.getAuthors().subscribe
    (
      (response) => {
        this.stringObject = response;
      },
      (error) => {
        console.log("Error Occurred : " + error);
      }
    )
  }

  deleteAuthorById(id: string) {
    this.rs.deleteAuthor(id).subscribe();
  }


  // deleteEmployee(employeeId: string) {
  //   if (confirm("Are you sure you want to delete this ?")) {
  //     this.employeeService.deleteEmployeeById(employeeId).subscribe(() => {
  //       this.dataSaved = true;
  //       this.massage = 'Record Deleted Succefully';
  //       this.loadAllEmployees();
  //       this.employeeIdUpdate = null;
  //       this.employeeForm.reset();
  //
  //     });
  //   }
}
