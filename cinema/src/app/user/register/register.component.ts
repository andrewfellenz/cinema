import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "cin-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  adult: boolean;
  registerForm: FormGroup;

  constructor(
    private headerService: HeaderService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required],
      age: [null, Validators.required],
    });
  }

  onSubmit(formValues) {
    this.registerUser(formValues);
  }

  registerUser(formValues) {}

  ngOnInit(): void {
    this.headerService.changeSubtitle("Register");
  }
}
