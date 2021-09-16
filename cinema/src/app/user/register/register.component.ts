import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Viewer } from "src/app/data-models/viewer";
import { Router } from "@angular/router";

@Component({
  selector: "cin-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  viewer: Viewer = new Viewer();
  registerForm: FormGroup;

  constructor(
    private headerService: HeaderService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      isAdult: [null, Validators.required],
    });
  }

  onSubmit(formValues) {
    if (formValues) {
      this.registerViewer(formValues);
    }
    this.router.navigate(["/home"]);
  }

  registerViewer(formValues) {
    this.viewer.id = 0;
    this.viewer.firstName = formValues.firstName;
    this.viewer.lastName = formValues.lastName;
    this.viewer.email = formValues.email;
    this.viewer.password = formValues.password;
    this.viewer.isAdult = formValues.isAdult;
    this.viewer.tickets = [];
    this.userService
      .registerViewer(this.viewer)
      .subscribe((user) => this.userService.setUser(user));
  }

  ngOnInit(): void {
    this.headerService.changeSubtitle("Register");
  }
}
