import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserRestService} from "../../service/user-rest.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    login: [''],
    password: ['']
  })
  loading = false;
  submitted = false;
  returnUrl: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private userRestService: UserRestService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  get checkForm() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['/home'] || '/login';
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.userRestService.getUserForLogin(this.loginForm.value).subscribe(data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
      });
  }
}
