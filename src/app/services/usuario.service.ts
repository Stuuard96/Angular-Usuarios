import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {user: 'dblas@info.com', firstName: 'Dilan', lastName: 'Blas', sex: 'Male'},
    {user: 'orobles@info.com', firstName: 'Omar', lastName: 'Robles', sex: 'Male'},
    {user: 'jperez@info.com', firstName: 'Juan', lastName: 'Perez', sex: 'Male'},
    {user: 'mrocca@info.com', firstName: 'Mario', lastName: 'Rocca', sex: 'Male'},
    {user: 'acasillas@info.com', firstName: 'Ana', lastName: 'Casillas', sex: 'Female'},
    {user: 'mvelasquez@info.com', firstName: 'Maria', lastName: 'Velasquez', sex: 'Female'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(user: Usuario){
    this.listUsuarios.unshift(user);
  }
}
