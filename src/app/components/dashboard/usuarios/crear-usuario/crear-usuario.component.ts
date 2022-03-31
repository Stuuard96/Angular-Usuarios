import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {
  
  sexs: any[] = ['Male', 'Female'];
  form: FormGroup;

  constructor(private fb:FormBuilder, private _usuarioService:UsuarioService, private router:Router, private _snackBar: MatSnackBar) { 
    this.form=this.fb.group({
      user: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sex: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    const user:Usuario ={
      user: this.form.value.user,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      sex: this.form.value.sex,
    }
    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);
    
    this._snackBar.open('The user was added successfully!', 'Close',{
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  
}
