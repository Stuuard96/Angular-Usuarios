import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup; 

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { 
    this.form=this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  logIn(){
    const user=this.form.value.user;
    const pass=this.form.value.pass;
    if(user=="admin" && pass=='123'){
      //Redireccionamos al dashboard
    }else{
      //Mostramos mensaje de error
      this.errorLogIn();
    }
  }
  errorLogIn(){
    this._snackBar.open('User or Password invalid. Try again!', 'Close',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
