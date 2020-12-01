import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  userName:string = '';
  passwords:string = '';
  invalidLogin = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", {
        validators: [Validators.required],
      }),
      password: new FormControl("", {
        validators: [Validators.required]
      }),
    });
  }

  onSubmit(
     form: NgForm
    ){
    // console.log(form);
    this.loginService.authenticate(this.userName, this.passwords).subscribe(data => {

      this.router.navigate(['/employees'])
      this.invalidLogin = false
      this.loginService.unhide();
    },
    error => {
      console.log("incorrect credentials");
      this.invalidLogin = true
    }
  );

  }

  login(){

    this.loginService.authenticate(this.userName, this.passwords).subscribe(data => {

          this.router.navigate(['/home'])
          this.invalidLogin = false
          this.loginService.unhide();

        },
        error => {
          this.invalidLogin = true
        }
      );

    }

}
