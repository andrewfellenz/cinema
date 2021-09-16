import { RegisterService } from "./../../services/register.service";
import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Viewer } from "src/app/data-models/viewer";

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
    private userService: UserService,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
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
    } else {
      console.log("Please fill out all fields");
    }
  }

  registerViewer(formValues) {
    this.viewer.id = 0;
    this.viewer.firstName = formValues.firstName;
    this.viewer.lastName = formValues.lastName;
    this.viewer.email = formValues.email;
    this.viewer.password = formValues.password;
    this.viewer.isAdult = formValues.isAdult;
    this.viewer.tickets = [];
    this.registerService.registerViewer(this.viewer).subscribe();
  }

  ngOnInit(): void {
    this.headerService.changeSubtitle("Register");
  }
}
