import { UserService } from "./../../services/user.service";
import { HeaderService } from "./../../services/header.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Viewer } from "src/app/data-models/viewer";
import { Router } from "@angular/router";

@Component({
  selector: "cin-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  currentUser: Viewer;
  signInForm: FormGroup;

  constructor(
    private headerService: HeaderService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signInForm = formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  onSubmit(formValues) {
    console.log("Submitting");
    this.userService
      .signIn(formValues.email, formValues.password)
      .subscribe((user) => {
        this.userService.setUser(user),
          () => "",
          () =>
            this.userService.user.subscribe((user) => {
              this.currentUser = user;
            });
      });
    this.router.navigate(["/home"]);
  }

  ngOnInit(): void {
    this.headerService.changeSubtitle("Sign In");
  }
}
