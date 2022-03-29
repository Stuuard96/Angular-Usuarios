import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading=false; 
  
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private route: Router) { 
    this.form=this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.form);
    const user=this.form.value.user;
    const password=this.form.value.password;
    if(user=="admin" && password=='123'){
      //Redireccionamos al dashboard
      this.fakeLoading();
    }else{
      //Mostramos mensaje de error
      this.errorLogIn();
      this.form.reset();
    }
  }
  
  errorLogIn(){
    this._snackBar.open('User or Password invalid. Try again!', 'Close',{
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  fakeLoading(){
    this.loading=true;
    setTimeout(() => {
      //Redireccionamos al dashboard
      this.route.navigate(['dashboard']);
    }, 1500);
  }
}
